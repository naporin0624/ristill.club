import { Button } from "@components/button";

import { heroStyles, titleStyles, subtitleStyles, buttonContainerStyles } from "./styles.css";

export const HeroSection = () => {
	return (
		<section className={heroStyles}>
			<h1 className={titleStyles}>RISTILL ANNIVERSARY 2025</h1>
			<p className={subtitleStyles}>最高のイベント体験をお届けします</p>
			<div className={buttonContainerStyles}>
				<Button>イベント詳細</Button>
				<Button variant="secondary">チケット予約</Button>
			</div>
		</section>
	);
};
