// This component uses minimal animations for literary atmosphere which require client-side JavaScript
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
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ default: { duration: 2 } }}
				viewport={{ once: true }}
			>
				<h2 className={styles.title}>今日の主役はこんな人</h2>
			</motion.div>

			<div className={styles.content}>
				<motion.div
					className={styles.card}
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ default: { duration: 2, delay: 0.5 } }}
					viewport={{ once: true }}
				>
					<h3 className={styles.cardTitle}>おてぃるさんプロフィール</h3>
					<p className={styles.cardText}>VRChatの世界で多くの人に愛される、特別な存在</p>
					<div className={styles.avatarPlaceholder}>👤</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ default: { duration: 2, delay: 1 } }}
					viewport={{ once: true }}
				>
					<div className={styles.charmList}>
						<h3 className={styles.listTitle}>魅力ポイント</h3>
						{charms.map((charm, index) => (
							<motion.div
								key={charm.id}
								className={styles.charmItem}
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{ default: { duration: 1.5, delay: 1.5 + index * 0.2 } }}
								viewport={{ once: true }}
							>
								💫 {charm.text}
							</motion.div>
						))}
					</div>

					<motion.div
						className={styles.quoteCard}
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ default: { duration: 2, delay: 3 } }}
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
