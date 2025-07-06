// REQUIRED COMMENT: Uses MutationObserver to monitor font loading state and motion animations
"use client";

import { motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

import * as styles from "./styles.css";

// Font loading state union type
type FontLoadingState = "loading" | "active" | "inactive" | "idle";

// Animation phases for the loading sequence
type AnimationPhase = "initial" | "understanding" | "scaling" | "complete";

// Custom hook for typekit font loading state
const useTypeKitState = (): FontLoadingState => {
	const [fontState, setFontState] = useState<FontLoadingState>(() => {
		if (typeof window === "undefined") return "loading";
		// Check initial state
		const initialClassList = document.documentElement.classList;
		if (initialClassList.contains("wf-loading")) return "loading";
		if (initialClassList.contains("wf-active")) return "active";
		if (initialClassList.contains("wf-inactive")) return "inactive";

		return "loading";
	});

	useEffect(() => {
		// REQUIRED COMMENT: Setting up MutationObserver to monitor typekit font loading status
		// Typekit changes document.documentElement class names to indicate font loading state
		const observer = new MutationObserver((mutations) => {
			for (const mutation of mutations) {
				if (mutation.type === "attributes" && mutation.attributeName === "class") {
					const target = mutation.target as HTMLElement;
					const classList = target.classList;

					if (classList.contains("wf-loading")) {
						setFontState("loading");
					} else if (classList.contains("wf-active")) {
						setFontState("active");
					} else if (classList.contains("wf-inactive")) {
						setFontState("inactive");
					}
				}
			}
		});

		// Observe changes to the document element's class attribute
		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ["class"],
		});

		return () => {
			observer.disconnect();
		};
	}, []);

	return fontState;
};

// Custom hook for managing animation phases
const useAnimationPhases = (
	fontState: FontLoadingState,
): {
	phase: AnimationPhase;
	showUnderstanding: boolean;
	isComplete: boolean;
	progressValue: number;
} => {
	const [phase, setPhase] = useState<AnimationPhase>("initial");
	const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

	const clearAllTimers = useCallback(() => {
		for (const timer of timersRef.current) {
			clearTimeout(timer);
		}
		timersRef.current = [];
	}, []);

	useEffect(() => {
		if (fontState === "active") {
			// Clear any existing timers
			clearAllTimers();

			// Phase 1: Show "わかったっ!" after 1500ms
			const understandingTimer = setTimeout(() => {
				setPhase("understanding");
			}, 1500);
			timersRef.current.push(understandingTimer);

			// Phase 2: Start scaling animation after 2500ms
			const scalingTimer = setTimeout(() => {
				setPhase("scaling");
			}, 2500);
			timersRef.current.push(scalingTimer);

			// Phase 4: Complete after 6500ms (after brightening animation completes)
			const completeTimer = setTimeout(() => {
				setPhase("complete");
			}, 5000);
			timersRef.current.push(completeTimer);
		}

		return () => {
			clearAllTimers();
		};
	}, [fontState, clearAllTimers]);

	const progressValue = (() => {
		switch (phase) {
			case "initial":
				return 20;
			case "understanding":
				return 40;
			case "scaling":
				return 60;
			case "complete":
				return 100;
			default:
				return 0;
		}
	})();

	return {
		phase,
		showUnderstanding: phase === "understanding" || phase === "scaling" || phase === "complete",
		isComplete: phase === "complete",
		progressValue,
	};
};

// Loading status messages for screen readers
const getLoadingMessage = (phase: AnimationPhase): string => {
	switch (phase) {
		case "initial":
			return "おてぃるわかんな～い！読み込み中です";
		case "understanding":
			return "おてぃるわかったっ！表示準備中です";
		case "scaling":
			return "画面を準備中です";
		case "complete":
			return "読み込み完了しました";
		default:
			return "読み込み中";
	}
};

export const Loading = () => {
	const fontState = useTypeKitState();
	const { phase, showUnderstanding, isComplete, progressValue } = useAnimationPhases(fontState);

	const loadingMessage = getLoadingMessage(phase);

	// Check for reduced motion preference
	const prefersReducedMotion =
		typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

	// Motion variants for same logo animation with anticipation + overshoot
	const sameVariants = {
		initial: {
			scale: 1,
		},
		scaling: {
			// Anticipation (0.92) → Overshoot (126) → Final (120)
			scale: [1, 0.92, 126, 120],
		},
		brightening: {
			scale: 120,
		},
	};

	// Background variants
	const backgroundVariants = {
		initial: { backgroundColor: "#5EC9FF" },
		scaling: { backgroundColor: "#ffffff" },
		brightening: { backgroundColor: "#ffffff" },
	};

	// Content variants
	const contentVariants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1 },
	};

	// Get current animation state
	const getCurrentVariant = () => {
		if (phase === "scaling") return phase;

		return "initial";
	};

	return (
		<>
			{/* Loading overlay */}
			<motion.div
				className={styles.root}
				variants={backgroundVariants}
				initial="initial"
				animate={getCurrentVariant()}
				transition={{ default: { duration: 2, delay: 0.2 } }}
				style={{
					opacity: isComplete ? 0 : 1,
					pointerEvents: isComplete ? "none" : "auto",
					transition: isComplete ? "opacity 1s ease-in-out" : "none",
				}}
				role="progressbar"
				aria-label="ページ読み込み中"
				aria-valuemin={0}
				aria-valuemax={100}
				aria-valuenow={progressValue}
				aria-live="polite"
				aria-atomic="true"
			>
				{/* Visually hidden loading status for screen readers */}
				<div className={styles.visuallyHidden} aria-live="polite">
					{loadingMessage}
				</div>

				{/* Same logo with motion animation */}
				<motion.div
					className={styles.sameLogo}
					variants={sameVariants}
					initial="initial"
					animate={getCurrentVariant()}
					transition={{
						default:
							phase === "scaling"
								? {
										times: [0, 0.12, 0.72, 1],
										ease: ["anticipate", "easeOut", "easeInOut", "easeOut"],
										duration: 1.25,
										delay: 0.3,
									}
								: {
										duration: 2,
										delay: 0.5,
										ease: "easeOut",
									},
					}}
					role="img"
					aria-label="Ristill ロゴ"
				/>

				{/* Text container with motion animations */}
				<div className={styles.textContainer}>
					{/* Confusion text with sophisticated shake animation */}
					{!showUnderstanding && (
						<motion.div
							className={styles.motionText}
							initial={{ opacity: 1, rotate: 0, scale: 1 }}
							animate={
								prefersReducedMotion
									? {
											opacity: 1,
											color: "#ffffff",
										}
									: {
											opacity: [1, 0.7, 0.4, 0.9, 0.5, 0.8, 1],
											rotate: [0, -2, 1, 2, -1, 3, 0],
											x: [0, -2, 3, -4, 2, -1, 0],
											y: [0, 1, -3, 2, -1, 3, 0],
											scale: [1, 1.02, 0.98, 1.03, 0.97, 1.04, 1],
											color: "#ffffff",
										}
							}
							transition={
								prefersReducedMotion
									? { duration: 0 }
									: {
											default: {
												duration: 1.2,
												times: [0, 0.14, 0.28, 0.42, 0.6, 0.75, 1],
												repeat: Infinity,
												repeatType: "reverse",
												ease: "linear",
											},
										}
							}
						>
							おてぃるわかんな～い！
						</motion.div>
					)}

					{/* Understanding text with pop bounce and color burst */}
					{showUnderstanding ? (
						<motion.div
							className={styles.motionText}
							initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
							animate={
								prefersReducedMotion
									? {
											opacity: 1,
											scale: 1,
											rotate: 0,
											color: "#ffffff",
										}
									: {
											opacity: 1,
											scale: [0.85, 1.25, 0.95, 1.05, 1],
											rotate: [-4, 4, -2, 1, 0],
											color: "#ffffff",
										}
							}
							transition={
								prefersReducedMotion
									? { duration: 0.3, ease: "easeOut" }
									: {
											default: {
												duration: 1.6,
												ease: [0.25, 1.5, 0.5, 1], // Overshoot curve like After Effects Back.Out
											},
										}
							}
						>
							おてぃるわかったっ！
						</motion.div>
					) : null}
				</div>
			</motion.div>

			{/* Content container that fades in after loading */}
			<motion.div
				className={styles.content}
				variants={contentVariants}
				initial="hidden"
				animate={isComplete ? "visible" : "hidden"}
				transition={{ default: { duration: 1.5, delay: 0.5 } }}
				aria-hidden={!isComplete}
				style={{ pointerEvents: isComplete ? "auto" : "none" }}
			>
				{/* Content will be inserted here by parent component */}
			</motion.div>
		</>
	);
};

export type { FontLoadingState, AnimationPhase };
