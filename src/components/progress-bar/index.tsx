"use client";

import { useEffect, useState } from "react";

import * as styles from "./styles.css";

export const ProgressBar = () => {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		// REQUIRED COMMENT: Calculating scroll progress to show reading progress on the page
		const calculateProgress = () => {
			const scrollTop = window.scrollY;
			const docHeight = document.documentElement.scrollHeight - window.innerHeight;
			const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
			setProgress(Math.min(100, Math.max(0, scrollPercent)));
		};

		const handleScroll = () => {
			calculateProgress();
		};

		// Calculate initial progress
		calculateProgress();

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div
			className={styles.root}
			role="progressbar"
			aria-label="ページの読み進み状況"
			aria-valuenow={Math.round(progress)}
			aria-valuemin={0}
			aria-valuemax={100}
			aria-valuetext={`${Math.round(progress)}% 読了`}
		>
			<div className={styles.bar} style={{ width: `${progress}%` }} />
		</div>
	);
};
