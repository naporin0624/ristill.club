import { useCallback, useEffect, useRef } from "react";

import type { CacheSnapshot, WindowVirtualizerHandle } from "virtua";

type ScrollState = {
	windowScrollY: number; // Use window scroll position for WindowVirtualizer
	cache: CacheSnapshot;
	count: number;
	startIndex: number; // Store visible start index for better restoration
};

type MultiColumnScrollState = {
	[columnId: string]: ScrollState;
};

const STORAGE_KEY = "materials-grid-scroll-v3"; // Incremented version for new format
const SESSION_STORAGE_KEY = "materials-grid-scroll-session"; // sessionStorage key for cross-navigation state

export const useScrollRestoration = () => {
	const virtualizerRefs = useRef<Map<string, WindowVirtualizerHandle>>(new Map());

	// Get saved state from history or sessionStorage
	const getSavedState = useCallback((): MultiColumnScrollState => {
		if (typeof window === "undefined") return {};

		// First try to get from history state (for browser navigation)
		const historyState = window.history.state?.[STORAGE_KEY] as MultiColumnScrollState | null;
		if (historyState && Object.keys(historyState).length > 0) {
			return historyState;
		}

		// Fallback to sessionStorage (for Link/router.push navigation)
		try {
			const sessionState = window.sessionStorage.getItem(SESSION_STORAGE_KEY);
			if (sessionState !== null && sessionState.length > 0) {
				const parsed = JSON.parse(sessionState) as MultiColumnScrollState;
				// Debug logging
				if (process.env.NODE_ENV === "development") {
					// eslint-disable-next-line no-console
					console.log("[ScrollRestoration] Loaded state from sessionStorage:", parsed);
				}

				return parsed;
			}
		} catch (error) {
			// eslint-disable-next-line no-console
			console.warn("[ScrollRestoration] Failed to parse sessionStorage state:", error);
		}

		return {};
	}, []);

	// Save current scroll state to both history and sessionStorage
	const saveState = useCallback(() => {
		if (typeof window === "undefined") return;

		const state: MultiColumnScrollState = {};
		const windowScrollY = window.scrollY;

		for (const [columnId, virtualizer] of virtualizerRefs.current.entries()) {
			// Use window scroll position and virtualizer state
			const startIndex = virtualizer.findStartIndex();

			state[columnId] = {
				windowScrollY,
				cache: virtualizer.cache,
				count: 0, // Will be set by component
				startIndex,
			};

			// Debug logging
			if (process.env.NODE_ENV === "development" && windowScrollY > 0) {
				// eslint-disable-next-line no-console
				console.log(`[ScrollRestoration] Saving state for ${columnId}:`, {
					windowScrollY,
					startIndex,
				});
			}
		}

		// Save to history state (for browser navigation)
		window.history.replaceState(
			{
				...window.history.state,
				[STORAGE_KEY]: state,
			},
			"",
		);

		// Also save to sessionStorage (for Link/router.push navigation)
		try {
			window.sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(state));
			if (process.env.NODE_ENV === "development" && Object.keys(state).length > 0) {
				// eslint-disable-next-line no-console
				console.log("[ScrollRestoration] Saved state to sessionStorage:", state);
			}
		} catch (error) {
			// eslint-disable-next-line no-console
			console.warn("[ScrollRestoration] Failed to save to sessionStorage:", error);
		}
	}, []);

	// Restore scroll position for each virtualizer
	const restoreScrollPosition = useCallback(
		(columnId: string, virtualizer: WindowVirtualizerHandle, windowScrollY: number, startIndex: number) => {
			if (windowScrollY <= 0 && startIndex <= 0) return;

			// Debug logging
			if (process.env.NODE_ENV === "development") {
				// eslint-disable-next-line no-console
				console.log(`[ScrollRestoration] Restoring position for ${columnId}:`, {
					windowScrollY,
					startIndex,
				});
			}

			// First, restore the virtualizer to the correct index
			if (startIndex > 0) {
				virtualizer.scrollToIndex(startIndex, {
					align: "start",
					smooth: false, // Fast restoration without animation
				});
			}

			// Then restore window scroll position
			if (windowScrollY > 0) {
				// Use requestAnimationFrame to ensure virtualizer is ready
				requestAnimationFrame(() => {
					window.scrollTo(0, windowScrollY);
				});
			}
		},
		[],
	);

	// Register a virtualizer instance
	const registerVirtualizer = useCallback(
		(columnId: string, virtualizer: WindowVirtualizerHandle | null, itemCount = 0) => {
			if (virtualizer) {
				virtualizerRefs.current.set(columnId, virtualizer);

				// Update count in saved state
				const currentState = getSavedState();
				if (currentState[columnId]) {
					currentState[columnId].count = itemCount;
					window.history.replaceState(
						{
							...window.history.state,
							[STORAGE_KEY]: currentState,
						},
						"",
					);

					// Restore scroll position for this virtualizer if we have saved state
					const { windowScrollY, startIndex } = currentState[columnId];
					if (windowScrollY > 0 || startIndex > 0) {
						// Defer restoration to ensure virtualizer is ready
						requestAnimationFrame(() => {
							restoreScrollPosition(columnId, virtualizer, windowScrollY, startIndex);

							// Clear sessionStorage after successful restoration
							// Only clear if we actually restored from sessionStorage (not history state)
							const historyHasState = window.history.state?.[STORAGE_KEY] != null;
							if (!historyHasState) {
								try {
									window.sessionStorage.removeItem(SESSION_STORAGE_KEY);
									if (process.env.NODE_ENV === "development") {
										// eslint-disable-next-line no-console
										console.log("[ScrollRestoration] Cleared sessionStorage after restoration");
									}
								} catch (error) {
									// eslint-disable-next-line no-console
									console.warn("[ScrollRestoration] Failed to clear sessionStorage:", error);
								}
							}
						});
					}
				}
			} else {
				virtualizerRefs.current.delete(columnId);
			}
		},
		[getSavedState, restoreScrollPosition],
	);

	// Get initial state for a column
	const getInitialState = useCallback(
		(columnId: string, itemCount: number) => {
			const savedState = getSavedState();
			const columnState = savedState[columnId];

			if (columnState && columnState.count === itemCount) {
				return {
					initialCache: columnState.cache,
				};
			}

			return {
				initialCache: undefined,
			};
		},
		[getSavedState],
	);

	// Set up state saving before page unload
	useEffect(() => {
		// Save state before unload
		const handleBeforeUnload = () => {
			saveState();
		};

		window.addEventListener("beforeunload", handleBeforeUnload);

		return () => {
			window.removeEventListener("beforeunload", handleBeforeUnload);
		};
	}, [saveState]);

	// Scroll all virtualizers to top and clear saved state
	const scrollToTop = useCallback(() => {
		// Scroll all virtualizers to index 0
		for (const virtualizer of virtualizerRefs.current.values()) {
			virtualizer.scrollToIndex(0, { align: "start", smooth: true });
		}

		// Also scroll the main window to top
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});

		// Clear saved scroll state since we're starting fresh
		try {
			window.sessionStorage.removeItem(SESSION_STORAGE_KEY);
		} catch (error) {
			// eslint-disable-next-line no-console
			console.warn("[ScrollRestoration] Failed to clear sessionStorage:", error);
		}
	}, []);

	// Create a scroll end handler for each column
	const createScrollEndHandler = useCallback(
		(_columnId: string) => {
			return () => {
				// Simply save state when scroll ends
				saveState();
			};
		},
		[saveState],
	);

	return {
		registerVirtualizer,
		getInitialState,
		scrollToTop,
		createScrollEndHandler, // New scroll end handler factory
	};
};
