// REQUIRED COMMENT: Uses motion animations requiring client-side JavaScript
"use client";

import { motion } from "motion/react";
import Link from "next/link";

import * as styles from "./styles.css";

export const NotFound = () => {
	return (
		<motion.section
			className={styles.root}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ default: { duration: 0.8 } }}
		>
			<div className={styles.screen}>
				<motion.div
					className={styles.content}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ default: { duration: 0.6, delay: 0.2 } }}
				>
					<motion.h1
						className={styles.title}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ default: { duration: 0.6, delay: 0.4 } }}
					>
						<motion.span whileHover={{ scale: 1.02 }} transition={{ default: { duration: 0.3 } }}>
							404
						</motion.span>
						<motion.span
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ default: { duration: 0.6, delay: 0.6 } }}
						>
							{"page not\nfound"}
						</motion.span>
					</motion.h1>

					<motion.p
						className={styles.message}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ default: { duration: 0.6, delay: 0.8 } }}
					>
						お探しのページが見つかりませんでした。
						<br />
						ナビゲーションから他のページをご覧いただくか、下記のリンクからアクセスしてください。
					</motion.p>

					<motion.div
						className={styles.actions}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ default: { duration: 0.6, delay: 1.0 } }}
					>
						<motion.div
							whileHover={{ scale: 1.01 }}
							whileTap={{ scale: 0.99 }}
							transition={{ default: { duration: 0.2 } }}
						>
							<Link href="/" className={styles.homeButton}>
								トップページへ戻る
							</Link>
						</motion.div>
						<motion.div
							whileHover={{ scale: 1.01 }}
							whileTap={{ scale: 0.99 }}
							transition={{ default: { duration: 0.2 } }}
						>
							<Link href="/2025" className={styles.birthdayButton}>
								2025年誕生日ページへ
							</Link>
						</motion.div>
					</motion.div>
				</motion.div>
			</div>
		</motion.section>
	);
};
