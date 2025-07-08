import { useCallback, useEffect, useRef, useState } from "react";

type StoredScrollState = {
	index: number;
	scrollY: number;
	timestamp: number;
};

const STORAGE_KEY = "masonic-materials-scroll";
const STORAGE_EXPIRY = 1000 * 60 * 30; // 30 minutes

export const useMasonicScrollRestoration = () => {
	const firstVisibleIndex = useRef<number>(0);
	const isRestoring = useRef<boolean>(false);
	const hasRestoredOnce = useRef<boolean>(false);
	const [scrollToIndex, setScrollToIndex] = useState<number | undefined>(undefined);

	// Get stored scroll state
	const getStoredState = useCallback((): StoredScrollState | null => {
		if (typeof window === "undefined") return null;

		try {
			const stored = window.sessionStorage.getItem(STORAGE_KEY);
			if (stored === null || stored === "") return null;

			const state = JSON.parse(stored) as StoredScrollState;

			// Check if stored state has expired
			if (Date.now() - state.timestamp > STORAGE_EXPIRY) {
				window.sessionStorage.removeItem(STORAGE_KEY);

				return null;
			}

			return state;
		} catch (error) {
			if (process.env.NODE_ENV === "development") {
				// eslint-disable-next-line no-console
				console.warn("[MasonicScrollRestoration] Failed to parse stored state:", error);
			}

			return null;
		}
	}, []);

	// Save current scroll state
	const saveState = useCallback(() => {
		if (typeof window === "undefined" || isRestoring.current) return;

		const state: StoredScrollState = {
			index: firstVisibleIndex.current,
			scrollY: window.scrollY,
			timestamp: Date.now(),
		};

		try {
			window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));

			if (process.env.NODE_ENV === "development") {
				// eslint-disable-next-line no-console
				console.log("[MasonicScrollRestoration] Saved state:", state);
			}
		} catch (error) {
			if (process.env.NODE_ENV === "development") {
				// eslint-disable-next-line no-console
				console.warn("[MasonicScrollRestoration] Failed to save state:", error);
			}
		}
	}, []);

	// Restore scroll position using masonic's scrollToIndex prop
	const restoreScrollPosition = useCallback((state: StoredScrollState) => {
		if (isRestoring.current || hasRestoredOnce.current) return;

		isRestoring.current = true;
		hasRestoredOnce.current = true;

		if (process.env.NODE_ENV === "development") {
			// eslint-disable-next-line no-console
			console.log("[MasonicScrollRestoration] Restoring to index:", state.index);
		}

		// Use masonic's scrollToIndex prop to restore position
		setScrollToIndex(state.index);

		// After masonic repositions, also restore window scroll if needed
		requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				if (state.scrollY > 0) {
					window.scrollTo({
						top: state.scrollY,
						behavior: "auto", // No animation for restoration
					});
				}
				isRestoring.current = false;
				// Reset scrollToIndex after restoration
				setScrollToIndex(undefined);
			});
		});
	}, []);

	// Handle render events from masonic
	const handleRender = useCallback(
		(startIndex: number, _endIndex: number) => {
			// Track the first visible item
			firstVisibleIndex.current = startIndex;

			// Try to restore on first render if we haven't restored yet
			if (!hasRestoredOnce.current) {
				const storedState = getStoredState();
				if (storedState && storedState.index >= 0) {
					// Delay restoration slightly to ensure masonic is ready
					requestAnimationFrame(() => {
						restoreScrollPosition(storedState);
					});
				} else {
					hasRestoredOnce.current = true;
				}
			}
		},
		[getStoredState, restoreScrollPosition],
	);

	// Save state before page unload or navigation
	useEffect(() => {
		const handleBeforeUnload = () => {
			saveState();
		};

		const handleVisibilityChange = () => {
			if (document.visibilityState === "hidden") {
				saveState();
			}
		};

		// Save state on various events
		window.addEventListener("beforeunload", handleBeforeUnload);
		document.addEventListener("visibilitychange", handleVisibilityChange);

		// Save state periodically when scrolling stops
		let scrollTimeout: ReturnType<typeof setTimeout>;
		const handleScroll = () => {
			clearTimeout(scrollTimeout);
			scrollTimeout = setTimeout(() => {
				if (!isRestoring.current) {
					saveState();
				}
			}, 150); // Debounce scroll events
		};

		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			clearTimeout(scrollTimeout);
			window.removeEventListener("beforeunload", handleBeforeUnload);
			document.removeEventListener("visibilitychange", handleVisibilityChange);
			window.removeEventListener("scroll", handleScroll);
		};
	}, [saveState]);

	// Scroll to top and clear saved state
	const scrollToTop = useCallback(() => {
		isRestoring.current = true;

		// Clear saved state
		try {
			window.sessionStorage.removeItem(STORAGE_KEY);
		} catch (error) {
			if (process.env.NODE_ENV === "development") {
				// eslint-disable-next-line no-console
				console.warn("[MasonicScrollRestoration] Failed to clear state:", error);
			}
		}

		// Scroll masonic grid to top using scrollToIndex prop
		setScrollToIndex(0);

		// Also scroll window to top
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});

		// Reset state
		firstVisibleIndex.current = 0;
		hasRestoredOnce.current = true;

		setTimeout(() => {
			isRestoring.current = false;
			setScrollToIndex(undefined); // Reset scrollToIndex
		}, 1000); // Allow time for smooth scroll
	}, []);

	// Clear stored state (useful for debugging or manual reset)
	const clearStoredState = useCallback(() => {
		try {
			window.sessionStorage.removeItem(STORAGE_KEY);
			if (process.env.NODE_ENV === "development") {
				// eslint-disable-next-line no-console
				console.log("[MasonicScrollRestoration] Cleared stored state");
			}
		} catch (error) {
			if (process.env.NODE_ENV === "development") {
				// eslint-disable-next-line no-console
				console.warn("[MasonicScrollRestoration] Failed to clear state:", error);
			}
		}
	}, []);

	return {
		handleRender,
		scrollToTop,
		scrollToIndex,
		clearStoredState,
	};
};
