"use client";

import { useState } from "react";

import { clsx } from "@utils/clsx";

import * as styles from "./styles.css";

const getBubbleClassName = (animationType: 1 | 2 | 3 | 4): string => {
	switch (animationType) {
		case 1:
			return styles.bubbleRise1;
		case 2:
			return styles.bubbleRise2;
		case 3:
			return styles.bubbleRise3;
		case 4:
			return styles.bubbleRise4;
		default:
			return styles.bubbleRise1;
	}
};

type Bubble = {
	id: number;
	x: number;
	size: number;
	animationType: 1 | 2 | 3 | 4;
	delay: number;
};

type BubbleAnimationProps = {
	bubbleCount?: number;
	className?: string;
};

export const BubbleAnimation = ({ bubbleCount = 12, className }: BubbleAnimationProps) => {
	const [bubbles] = useState<Bubble[]>(() => {
		return Array.from({ length: bubbleCount }, (_, i) => ({
			id: i,
			x: Math.random() * 90 + 5,
			size: Math.random() * 20 + 15,
			animationType: (Math.floor(Math.random() * 4) + 1) as 1 | 2 | 3 | 4,
			delay: -Math.random() * 15,
		}));
	});

	return (
		<div className={clsx(styles.root, className)}>
			{bubbles.map((bubble) => (
				<div
					key={bubble.id}
					className={getBubbleClassName(bubble.animationType)}
					style={{
						left: `${bubble.x}%`,
						width: `${bubble.size}px`,
						height: `${bubble.size}px`,
						animationDelay: `${bubble.delay}s`,
					}}
				/>
			))}
		</div>
	);
};
