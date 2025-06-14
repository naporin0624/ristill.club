// This component uses motion animations which require client-side JavaScript
"use client";

import { motion } from "motion/react";

import { PhotoFrame } from "./_components/photo-frame";
import * as styles from "./styles.css";

const V2Page = () => {
	return (
		<motion.main
			className={styles.root}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ default: { duration: 0.8 } }}
		>
			<div className={styles.singleFrameLayout}>
				<motion.div
					className={styles.mainFrame}
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ default: { duration: 1.0, delay: 0.3 } }}
				>
					<PhotoFrame />
				</motion.div>
			</div>
		</motion.main>
	);
};

export default V2Page;
