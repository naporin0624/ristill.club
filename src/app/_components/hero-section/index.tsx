import { Button } from "@components/button";

import * as styles from "./styles.css";

export const HeroSection = () => {
	return (
		<section className={styles.root}>
			<h1 className={styles.title}>RISTILL ANNIVERSARY 2025</h1>
			<p className={styles.subtitle}>最高のイベント体験をお届けします</p>
			<div className={styles.buttonContainer}>
				<Button>イベント詳細</Button>
				<Button variant="secondary">チケット予約</Button>
			</div>
		</section>
	);
};
