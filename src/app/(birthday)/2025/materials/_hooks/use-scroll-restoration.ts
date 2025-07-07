import { useCallback, useEffect, useRef } from "react";

import type { CacheSnapshot, WindowVirtualizerHandle } from "virtua";

type ScrollState = {
	offset: number;
	cache: CacheSnapshot;
	count: number;
};

type MultiColumnScrollState = {
	[columnId: string]: ScrollState;
};

const STORAGE_KEY = "materials-grid-scroll-v2";

export const useScrollRestoration = () => {
	const virtualizerRefs = useRef<Map<string, WindowVirtualizerHandle>>(new Map());

	// Get saved state from history
	const getSavedState = useCallback((): MultiColumnScrollState => {
		if (typeof window === "undefined") return {};

		return (window.history.state?.[STORAGE_KEY] as MultiColumnScrollState | null) ?? {};
	}, []);

	// Save current scroll state to history
	const saveState = useCallback(() => {
		if (typeof window === "undefined") return;

		const state: MultiColumnScrollState = {};

		for (const [columnId, virtualizer] of virtualizerRefs.current.entries()) {
			state[columnId] = {
				offset: window.scrollY,
				cache: virtualizer.cache,
				count: 0, // Will be set by component
			};
		}

		window.history.replaceState(
			{
				...window.history.state,
				[STORAGE_KEY]: state,
			},
			"",
		);
	}, []);

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
				}
			} else {
				virtualizerRefs.current.delete(columnId);
			}
		},
		[getSavedState],
	);

	// Get initial state for a column
	const getInitialState = useCallback(
		(columnId: string, itemCount: number) => {
			const savedState = getSavedState();
			const columnState = savedState[columnId];

			if (columnState && columnState.count === itemCount) {
				return {
					initialOffset: columnState.offset,
					initialCache: columnState.cache,
				};
			}

			return {
				initialOffset: 0,
				initialCache: undefined,
			};
		},
		[getSavedState],
	);

	// Restore scroll position on mount
	useEffect(() => {
		const savedState = getSavedState();
		if (Object.keys(savedState).length > 0) {
			// Find any saved offset to restore
			const firstState = Object.values(savedState)[0];
			if (firstState && firstState.offset > 0) {
				setTimeout(() => {
					window.scrollTo(0, firstState.offset);
				}, 100);
			}
		}
	}, [getSavedState]);

	// Set up scroll listener
	useEffect(() => {
		const handleScroll = () => {
			saveState();
		};

		window.addEventListener("scroll", handleScroll, { passive: true });

		// Save state before unload
		const handleBeforeUnload = () => {
			saveState();
		};

		window.addEventListener("beforeunload", handleBeforeUnload);

		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("beforeunload", handleBeforeUnload);
		};
	}, [saveState]);

	// Scroll all virtualizers to top
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
	}, []);

	return {
		registerVirtualizer,
		getInitialState,
		scrollToTop,
		onScroll: () => {}, // No longer needed
	};
};
