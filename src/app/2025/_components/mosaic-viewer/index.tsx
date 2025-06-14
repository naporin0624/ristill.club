// This component uses minimal animations for literary atmosphere which require client-side JavaScript
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
		color: `hsl(${Math.random() * 60 + 30}, 30%, ${70 + Math.random() * 20}%)`,
		emoji: ["💖", "🌟", "✨", "🎉", "💝", "🎂"][Math.floor(Math.random() * 6)],
	}));

	return (
		<section className={styles.root}>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ default: { duration: 2 } }}
				viewport={{ once: true }}
			>
				<h2 className={styles.title}>みんなの想いモザイク</h2>
			</motion.div>

			<motion.div
				className={styles.storyText}
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ default: { duration: 2, delay: 0.5 } }}
				viewport={{ once: true }}
			>
				<p>たくさんの人から集められた画像で作られた、愛の結晶</p>
			</motion.div>

			<motion.div
				className={styles.mosaicGrid}
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ default: { duration: 2, delay: 1 } }}
				viewport={{ once: true }}
				onViewportEnter={handleViewportEnter}
			>
				{mosaicItems.map((item, index) => (
					<motion.div
						key={item.id}
						className={styles.mosaicItem}
						style={{ backgroundColor: item.color }}
						initial={{ opacity: 0 }}
						animate={isRevealed ? { opacity: 1 } : {}}
						transition={{
							default: {
								duration: 0.1,
								delay: isRevealed ? index * 0.005 : 0,
							},
						}}
					>
						{item.emoji}
					</motion.div>
				))}
			</motion.div>

			<motion.div
				className={styles.counter}
				initial={{ opacity: 0 }}
				animate={isRevealed ? { opacity: 1 } : {}}
				transition={{ default: { duration: 2, delay: 1 } }}
			>
				<p>{mosaicItems.length}人の愛が込められた1枚</p>
			</motion.div>

			<motion.div
				className={styles.collectionStory}
				initial={{ opacity: 0 }}
				animate={isRevealed ? { opacity: 1 } : {}}
				transition={{ default: { duration: 2, delay: 1.5 } }}
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
