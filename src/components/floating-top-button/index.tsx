"use client";

import { useCallback, useEffect, useState } from "react";

import * as styles from "./styles.css";

type Props = {
	onScrollToTop?: () => void;
};

export const FloatingTopButton = ({ onScrollToTop }: Props) => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		// REQUIRED COMMENT: Listening to scroll events to show/hide the button based on scroll position
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			const shouldShow = scrollTop > 300;
			setIsVisible(shouldShow);
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleClick = useCallback(() => {
		if (onScrollToTop) {
			// Use the provided callback if available
			onScrollToTop();
		} else {
			// Fall back to default window scroll behavior
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		}
	}, [onScrollToTop]);

	return (
		<button
			className={styles.root}
			onClick={handleClick}
			aria-label="ページの先頭に戻る"
			type="button"
			data-visible={isVisible}
		>
			<svg
				className={styles.icon}
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path d="m18 15-6-6-6 6" />
			</svg>
		</button>
	);
};
