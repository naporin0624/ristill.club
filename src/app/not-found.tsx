import Link from "next/link";

import * as styles from "./not-found.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "ページが見つかりません",
	description: "お探しのページが見つかりませんでした。URLをご確認いただくか、トップページからお探しください。",
};

const NotFound = () => {
	return (
		<section className={styles.root}>
			<div className={styles.screen}>
				<div className={styles.content}>
					<h1 className={styles.title}>
						<span>404</span>
						<span>{"page not\nfound"}</span>
					</h1>
					<p className={styles.message}>お探しのページが見つかりませんでした</p>
					<div className={styles.actions}>
						<Link href="/" className={styles.homeButton}>
							トップページへ戻る
						</Link>
						<Link href="/2025" className={styles.birthdayButton}>
							2025年誕生日ページへ
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default NotFound;
