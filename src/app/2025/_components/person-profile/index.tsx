// This component uses motion animations with viewport intersection tracking which require client-side JavaScript
"use client";

import { motion } from "motion/react";

import * as styles from "./styles.css";

export const PersonProfile = () => {
	const charms = [
		{ id: "charm-1", text: "VRChatの世界で輝く金髪碧眼の美少女" },
		{ id: "charm-2", text: "イベントキャストとしての華やかな活躍" },
		{ id: "charm-3", text: "配信での自然で可愛らしい魅力" },
		{ id: "charm-4", text: "フレンドから愛される温かい人柄" },
		{ id: "charm-5", text: "見る人の心を癒す優しい笑顔" },
	];

	return (
		<section className={styles.root}>
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ default: { duration: 0.8 } }}
				viewport={{ once: true }}
			>
				<h2 className={styles.title}>🌟 今日の主役はこんな人 🌟</h2>
			</motion.div>

			<div className={styles.content}>
				<motion.div
					className={styles.card}
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ default: { duration: 0.8, delay: 0.2 } }}
					viewport={{ once: true }}
				>
					<div>
						<h3 className={styles.cardTitle}>おてぃるさんプロフィール</h3>
						<p className={styles.cardText}>VRChatの世界で多くの人に愛される、特別な存在</p>
						<div className={styles.avatarPlaceholder}>👤</div>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ default: { duration: 0.8, delay: 0.4 } }}
					viewport={{ once: true }}
				>
					<div className={styles.charmList}>
						<h3 className={styles.listTitle}>魅力ポイント</h3>
						{charms.map((charm, index) => (
							<motion.div
								key={charm.id}
								className={styles.charmItem}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ default: { duration: 0.5, delay: 0.6 + index * 0.1 } }}
								viewport={{ once: true }}
							>
								💫 {charm.text}
							</motion.div>
						))}
					</div>

					<motion.div
						className={styles.quoteCard}
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ default: { duration: 0.6, delay: 1.2 } }}
						viewport={{ once: true }}
					>
						<p className={styles.quoteText}>「君の輝きは、いつも私たちの心を照らしてくれる」</p>
						<span className={styles.quoteAuthor}>- フレンドより -</span>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};
