import { Link } from "next-view-transitions";

import { Heading } from "../_components/heading";

import { MaterialsGrid } from "./_components/materials-grid";
import materialsData from "./materials.json";
import * as styles from "./styles.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "モザイクアート材料 - RISTILL BIRTHDAY 2025",
	description:
		"おてぃるの2025年誕生日を祝うモザイクアートに使用された材料画像の一覧ページ。3,000枚の画像から作られた24,000タイルのモザイクアート。",
	openGraph: {
		title: "モザイクアート材料 - RISTILL BIRTHDAY 2025",
		description: "おてぃるの2025年誕生日を祝うモザイクアートに使用された材料画像の一覧ページ。",
		url: "https://ristill.club/2025/materials",
		type: "website",
		images: [
			{
				url: "https://ristill.club/2025/ogp.jpg",
				width: 1200,
				height: 630,
				alt: "RISTILL BIRTHDAY 2025/07/07",
			},
		],
	},
	twitter: {
		title: "モザイクアート材料 - RISTILL BIRTHDAY 2025",
		description: "おてぃるの2025年誕生日を祝うモザイクアートに使用された材料画像の一覧ページ。",
		card: "summary_large_image",
		images: ["https://ristill.club/2025/ogp.jpg"],
	},
};

type MaterialData = {
	id: string;
	displayName: string;
	size: number;
	url: string;
	modTime: string;
	originalName: string;
	width: number;
	height: number;
};

const Page = async () => {
	const materials: MaterialData[] = materialsData;

	return (
		<div className={styles.root}>
			<div className={styles.screen}>
				<section className={styles.section}>
					<div className={styles.contents}>
						<Link href="/2025" className={styles.backLink}>
							← メインページに戻る
						</Link>

						<Heading level={1}>Mosaic Art Materials</Heading>

						<p className={styles.text}>
							おてぃるの誕生日を祝うモザイクアートに使用された材料画像です。
							{"\n"}
							みなさんからご提供いただいた大切な写真やイラストを使って、24,000タイルの素敵なモザイクアートが完成しました。
						</p>

						<MaterialsGrid materials={materials} />

						<p className={styles.text}>
							すべての材料を提供してくださったみなさまに心から感謝いたします。
							{"\n"}
							おてぃるお誕生日おめでとう！🎉
						</p>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Page;
