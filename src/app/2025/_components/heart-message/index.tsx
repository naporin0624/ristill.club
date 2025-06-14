// This component uses motion animations, interactive button state, and useState which require client-side JavaScript
"use client";

import { motion } from "motion/react";
import { useState, useCallback } from "react";

import * as styles from "./styles.css";

export const HeartMessage = () => {
	const [showFullMessage, setShowFullMessage] = useState(false);

	const handleMessageToggle = useCallback(() => {
		setShowFullMessage(!showFullMessage);
	}, [showFullMessage]);

	const floatingHearts = Array.from({ length: 30 }, (_, i) => ({ id: `heart-${i}` }));

	return (
		<section className={styles.root}>
			{/* Floating Hearts Background */}
			{floatingHearts.map((heart) => (
				<motion.div
					key={heart.id}
					className={styles.floatingHeart}
					initial={{ opacity: 0, scale: 0 }}
					animate={{
						opacity: [0, 0.7, 0],
						scale: [0, 1, 0],
						y: [0, -200],
						x: [0, Math.random() * 400 - 200],
					}}
					transition={{
						default: {
							duration: 6,
							delay: Math.random() * 8,
							repeat: Number.POSITIVE_INFINITY,
							repeatDelay: Math.random() * 5,
						},
					}}
				>
					💖
				</motion.div>
			))}

			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ default: { duration: 0.8 } }}
				viewport={{ once: true }}
			>
				<h2 className={styles.title}>💌 フレンドからの想い 💌</h2>
			</motion.div>

			<motion.div
				className={styles.messageRoot}
				initial={{ opacity: 0, scale: 0.9 }}
				whileInView={{ opacity: 1, scale: 1 }}
				transition={{ default: { duration: 1, delay: 0.3 } }}
				viewport={{ once: true }}
			>
				<motion.div className={styles.coreMessage} whileHover={{ scale: 1.02 }}>
					<h3 className={styles.coreMessageTitle}>「君の輝きを見守り続けたい」</h3>
					<div className={styles.heartDecoration}>💝 💖 💝</div>
				</motion.div>

				<motion.div
					className={styles.letterContent}
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ default: { duration: 0.8, delay: 0.6 } }}
					viewport={{ once: true }}
				>
					<p className={styles.letterParagraph}>
						VRChatの世界で出会ったあの日から、
						<br />
						君の輝きは私の心を照らし続けてくれている。
					</p>

					<p className={styles.letterParagraph}>
						金髪碧眼の美しさだけでなく、
						<br />
						君の内側から溢れる優しさと可愛らしさが、
						<br />
						私にとって何よりも大切な宝物になった。
					</p>

					{!showFullMessage ? (
						<motion.button
							className={styles.expandButton}
							onClick={handleMessageToggle}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							💕 もっと読む 💕
						</motion.button>
					) : (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: "auto" }}
							transition={{ default: { duration: 0.8 } }}
						>
							<p className={styles.letterParagraph}>
								配信での君の笑顔、イベントでの輝き、
								<br />
								フレンドとの温かい交流—
								<br />
								すべてが私にとって特別な思い出。
							</p>

							<p className={styles.letterParagraph}>
								この1年間、君の成長を見守ることができて、
								<br />
								本当に幸せだった。
							</p>

							<p className={styles.letterParagraph}>
								これからも、君の輝きを見守り続けたい。
								<br />
								君が笑顔でいられる限り、
								<br />
								私も幸せでいられるから。
							</p>
						</motion.div>
					)}
				</motion.div>

				<motion.div
					className={styles.signature}
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ default: { duration: 1, delay: 1.2 } }}
					viewport={{ once: true }}
				>
					<p className={styles.signatureParagraph}>愛を込めて</p>
					<p className={styles.signatureParagraph}>あなたを想う、フレンドより</p>
					<div className={styles.signatureDecoration}>🌟 ✨ 🌟</div>
				</motion.div>

				<motion.div
					className={styles.futureWish}
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ default: { duration: 0.8, delay: 1.5 } }}
					viewport={{ once: true }}
				>
					<h4 className={styles.futureWishTitle}>これからの願い</h4>
					<p className={styles.futureWishParagraph}>
						君がこれからも輝き続けて、
						<br />
						たくさんの人に愛されて、
						<br />
						幸せな毎日を過ごせますように。
					</p>
					<div className={styles.wishDecoration}>🎂 Happy Birthday! 🎂</div>
				</motion.div>
			</motion.div>
		</section>
	);
};
