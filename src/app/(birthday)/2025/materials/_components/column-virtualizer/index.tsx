"use client";

import { useCallback, useEffect, useState } from "react";
import { WindowVirtualizer } from "virtua";

import { MaterialItem } from "../material-item";

import * as styles from "./styles.css";

import type { CacheSnapshot, WindowVirtualizerHandle } from "virtua";

type MaterialData = {
	id: string;
	displayName: string;
	size: number;
	url: string;
	modTime: string;
	originalName: string;
	width: number;
	height: number;
};

type Props = {
	columnId: string;
	items: MaterialData[];
	initialCache?: CacheSnapshot;
	onRegisterVirtualizer: (columnId: string, virtualizer: WindowVirtualizerHandle | null, itemCount: number) => void;
};

export const ColumnVirtualizer = ({ columnId, items, initialCache, onRegisterVirtualizer }: Props) => {
	const [visibleRange, setVisibleRange] = useState<{ start: number; end: number } | null>(null);

	const handleRef = useCallback(
		(ref: WindowVirtualizerHandle | null) => {
			onRegisterVirtualizer(columnId, ref, items.length);
		},
		[columnId, onRegisterVirtualizer, items.length],
	);

	const handleScroll = useCallback(() => {
		// Update loading state and visible range for screen readers
		const virtualizer = document.querySelector(`[data-column-id="${columnId}"]`);
		if (virtualizer) {
			const visibleItems = virtualizer.querySelectorAll('[role="listitem"]:not([aria-hidden="true"])');
			if (visibleItems.length > 0) {
				const start = Array.from(virtualizer.querySelectorAll('[role="listitem"]')).indexOf(visibleItems[0] as Element);
				const end = start + visibleItems.length - 1;
				setVisibleRange({ start: start + 1, end: end + 1 }); // 1-indexed for screen readers
			}
		}
	}, [columnId]);

	// Cleanup on unmount
	useEffect(() => {
		return () => {
			onRegisterVirtualizer(columnId, null, 0);
		};
	}, [columnId, onRegisterVirtualizer]);

	return (
		<>
			{/* Live region for screen reader announcements */}
			{visibleRange ? (
				<div className={styles.screenReaderOnly} aria-live="polite" aria-atomic="false">
					列{columnId}：{visibleRange.start}から{visibleRange.end}番目の画像を表示中（全{items.length}枚中）
				</div>
			) : null}

			<WindowVirtualizer
				ref={handleRef}
				cache={initialCache}
				onScroll={handleScroll}
				data-column-id={columnId}
				aria-label={`画像列 ${items.length}枚`}
			>
				{items.map((material, index) => (
					<div
						key={material.id}
						className={styles.gridItem}
						role="listitem"
						aria-setsize={items.length}
						aria-posinset={index + 1}
					>
						<MaterialItem material={material} />
					</div>
				))}
			</WindowVirtualizer>
		</>
	);
};
