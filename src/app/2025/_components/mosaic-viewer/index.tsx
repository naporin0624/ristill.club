// This component uses motion animations and particle effects which require client-side JavaScript
"use client";

import { motion } from "motion/react";
import { useState, useCallback } from "react";

import * as styles from "./styles.css";

export const MosaicViewer = () => {
	const [isRevealed, setIsRevealed] = useState(false);

	const handleViewportEnter = useCallback(() => {
		setIsRevealed(true);
	}, []);

	// モザイクアートの模擬データ（静的画像として表現）
	const mosaicItems = Array.from({ length: 100 }, (_, index) => ({
		id: index,
		color: `hsl(${Math.random() * 360}, 70%, ${60 + Math.random() * 20}%)`,
		emoji: ["💖", "🌟", "✨", "🎉", "💝", "🎂"][Math.floor(Math.random() * 6)],
	}));

	const hearts = Array.from({ length: 15 }, (_, i) => ({ id: `heart-${i}` }));
	const loveParticles = Array.from({ length: 20 }, (_, i) => ({ id: `particle-${i}` }));

	return (
		<section className={styles.root}>
			{/* Floating Hearts */}
			{hearts.map((heart) => (
				<motion.div
					key={heart.id}
					className={styles.heartFloat}
					initial={{ opacity: 0, y: 20 }}
					animate={{
						opacity: [0, 1, 0],
						y: [20, -100],
						x: [0, Math.random() * 200 - 100],
					}}
					transition={{
						default: {
							duration: 4,
							delay: Math.random() * 3,
							repeat: Number.POSITIVE_INFINITY,
							repeatDelay: Math.random() * 2,
						},
					}}
				>
					💖
				</motion.div>
			))}

			{/* Love Visualization Particles */}
			{loveParticles.map((particle) => (
				<motion.div
					key={particle.id}
					className={styles.loveParticle}
					initial={{ opacity: 0, scale: 0 }}
					animate={{
						opacity: [0, 0.8, 0],
						scale: [0, 1, 0],
						y: [0, -200],
						x: [0, Math.random() * 400 - 200],
					}}
					transition={{
						default: {
							duration: 5,
							delay: Math.random() * 4,
							repeat: Number.POSITIVE_INFINITY,
							repeatDelay: Math.random() * 3,
						},
					}}
				>
					{["💝", "✨", "🌟", "💖"][Math.floor(Math.random() * 4)]}
				</motion.div>
			))}

			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ default: { duration: 0.8 } }}
				viewport={{ once: true }}
			>
				<h2 className={styles.title}>🖼️ みんなの想いモザイク 🖼️</h2>
			</motion.div>

			<motion.div
				className={styles.storyText}
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ default: { duration: 1, delay: 0.3 } }}
				viewport={{ once: true }}
			>
				<p>たくさんの人から集められた画像で作られた、愛の結晶</p>
			</motion.div>

			<motion.div
				className={styles.mosaicGrid}
				initial={{ opacity: 0, scale: 0.9 }}
				whileInView={{
					opacity: 1,
					scale: 1,
				}}
				transition={{ default: { duration: 1.2, delay: 0.5 } }}
				viewport={{ once: true }}
				onViewportEnter={handleViewportEnter}
			>
				{mosaicItems.map((item, index) => (
					<motion.div
						key={item.id}
						className={styles.mosaicItem}
						style={{ backgroundColor: item.color }}
						initial={{ scale: 0, opacity: 0 }}
						animate={
							isRevealed
								? {
										scale: 1,
										opacity: 1,
									}
								: {}
						}
						transition={{
							default: {
								duration: 0.4,
								delay: isRevealed ? index * 0.008 : 0,
								type: "spring",
								stiffness: 120,
							},
						}}
					>
						{item.emoji}
					</motion.div>
				))}
			</motion.div>

			<motion.div
				className={styles.counter}
				initial={{ opacity: 0, y: 30 }}
				animate={
					isRevealed
						? {
								opacity: 1,
								y: 0,
							}
						: {}
				}
				transition={{ default: { duration: 1, delay: 2 } }}
			>
				<motion.span
					initial={{ scale: 0 }}
					animate={isRevealed ? { scale: 1 } : {}}
					transition={{ default: { duration: 0.6, delay: 2.5 } }}
				>
					💖
				</motion.span>
				<motion.p
					initial={{ opacity: 0 }}
					animate={isRevealed ? { opacity: 1 } : {}}
					transition={{ default: { duration: 1, delay: 3 } }}
				>
					{mosaicItems.length}人の愛が込められた1枚
				</motion.p>
				<motion.span
					initial={{ scale: 0 }}
					animate={isRevealed ? { scale: 1 } : {}}
					transition={{ default: { duration: 0.6, delay: 3.5 } }}
				>
					💖
				</motion.span>
			</motion.div>

			<motion.div
				className={styles.collectionStory}
				initial={{ opacity: 0, y: 20 }}
				animate={
					isRevealed
						? {
								opacity: 1,
								y: 0,
							}
						: {}
				}
				transition={{ default: { duration: 0.8, delay: 4 } }}
			>
				<h3 className={styles.collectionTitle}>みんなで作った愛の結晶</h3>
				<p className={styles.collectionText}>
					一人ひとりが心を込めて提供してくれた画像が
					<br />
					おてぃるさんへの愛情となって、ひとつの美しいアートに
				</p>
			</motion.div>
		</section>
	);
};
