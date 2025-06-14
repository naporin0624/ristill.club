// This component uses minimal animations for literary atmosphere which require client-side JavaScript
"use client";

import { motion } from "motion/react";

import * as styles from "./styles.css";

export const BirthdayHero = () => {
	return (
		<section className={styles.root}>
			{/* Main Content Container */}
			<div className={styles.celebrationRoot}>
				<motion.h1
					className={styles.title}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ default: { duration: 2, ease: "easeOut" } }}
				>
					Happy Birthday
				</motion.h1>

				<div className={styles.emoji}>🎂 🎈 🎁</div>

				<motion.h2
					className={styles.subtitle}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ default: { duration: 2, delay: 1, ease: "easeOut" } }}
				>
					おてぃる
				</motion.h2>

				<motion.p
					className={styles.welcomeMessage}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ default: { duration: 2, delay: 2, ease: "easeOut" } }}
				>
					今日はあなたの特別な日
				</motion.p>
			</div>
		</section>
	);
};
