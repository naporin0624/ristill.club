// This component uses motion animations and particle effects which require client-side JavaScript
"use client";

import { motion } from "motion/react";
import { useState } from "react";

import * as styles from "./styles.css";

export const BirthdayHero = () => {
	const [particles] = useState(() => Array.from({ length: 20 }, (_, i) => ({ id: `particle-${i}` })));

	return (
		<section className={styles.root}>
			{/* Golden Particles */}
			{particles.map((particle) => (
				<motion.div
					key={particle.id}
					className={styles.particle}
					initial={{ opacity: 0, y: 100 }}
					animate={{
						opacity: [0, 1, 0],
						y: [100, -50],
						x: [0, Math.random() * 100 - 50],
					}}
					transition={{
						default: {
							duration: 3,
							delay: Math.random() * 2,
							repeat: Infinity,
							repeatDelay: Math.random() * 3,
						},
					}}
				>
					✨
				</motion.div>
			))}

			{/* Main Content */}
			<div>
				<motion.h1
					className={styles.title}
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ default: { duration: 1, delay: 0.2 } }}
				>
					Happy Birthday
				</motion.h1>

				<motion.div
					className={styles.emoji}
					initial={{ scale: 0, rotate: -180 }}
					animate={{ scale: 1, rotate: 0 }}
					transition={{ default: { duration: 0.8, delay: 0.5 } }}
				>
					🎂 🎈 🎁
				</motion.div>

				<motion.h2
					className={styles.subtitle}
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ default: { duration: 0.8, delay: 0.8 } }}
				>
					おてぃる！
				</motion.h2>

				<motion.p
					className={styles.welcomeMessage}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ default: { duration: 1, delay: 1.2 } }}
				>
					今日はあなたの特別な日
				</motion.p>
			</div>
		</section>
	);
};
