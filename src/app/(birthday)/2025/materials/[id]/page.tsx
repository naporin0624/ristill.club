import { notFound } from "next/navigation";
import { Link } from "next-view-transitions";

import Image from "@components/image";
import { formatBlurURL } from "@components/image/helper";

import { Heading } from "../../_components/heading";
import materialsData from "../materials.json";

import { KeyboardNavigation } from "./_components/keyboard-navigation";
import { RelatedMaterials } from "./_components/related-materials";
import * as styles from "./styles.css";

import type { Metadata } from "next";

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

type Props = {
	params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { id } = await params;
	const material = (materialsData as MaterialData[]).find((m) => m.id === id);

	if (!material) {
		return {
			title: "画像が見つかりません - RISTILL BIRTHDAY 2025",
		};
	}

	return {
		title: `${material.displayName} - RISTILL BIRTHDAY 2025`,
		description: `おてぃるの2025年誕生日モザイクアートに使用された${material.displayName}の詳細ページ。`,
		openGraph: {
			title: `${material.displayName} - RISTILL BIRTHDAY 2025`,
			description: `おてぃるの2025年誕生日モザイクアートに使用された素材画像`,
			url: `https://ristill.club/2025/materials/${id}`,
			type: "website",
			images: [
				{
					url: material.url,
					width: 1200,
					height: 630,
					alt: material.displayName,
				},
			],
		},
	};
}

const Page = async ({ params }: Props) => {
	const { id } = await params;
	const materials = materialsData as MaterialData[];
	const currentIndex = materials.findIndex((m) => m.id === id);

	if (currentIndex === -1) {
		notFound();
	}

	const material = materials[currentIndex];
	const prevMaterial = currentIndex > 0 ? materials[currentIndex - 1] : null;
	const nextMaterial = currentIndex < materials.length - 1 ? materials[currentIndex + 1] : null;

	return (
		<div className={styles.root}>
			<KeyboardNavigation prevId={prevMaterial?.id} nextId={nextMaterial?.id} />
			<div className={styles.container}>
				{/* Header */}
				<header className={styles.header}>
					<Link href="/2025/materials" className={styles.backButton} aria-label="素材一覧に戻る">
						← 素材一覧に戻る
					</Link>
					<nav className={styles.navigation} aria-label="画像ナビゲーション">
						{prevMaterial ? (
							<Link
								href={`/2025/materials/${prevMaterial.id}`}
								className={styles.navButton}
								aria-label={`前の画像: ${prevMaterial.displayName}`}
							>
								← 前
							</Link>
						) : null}
						{nextMaterial ? (
							<Link
								href={`/2025/materials/${nextMaterial.id}`}
								className={styles.navButton}
								aria-label={`次の画像: ${nextMaterial.displayName}`}
							>
								次 →
							</Link>
						) : null}
					</nav>
				</header>

				{/* Main Content */}
				<article className={styles.main} aria-labelledby="material-title">
					<div className={styles.imageSection}>
						<div className={styles.imageContainer}>
							<Image
								src={material.url}
								alt={`MosaicArt Material「${material.displayName}」（全${materials.length}枚中${currentIndex + 1}番目）`}
								width={material.width}
								height={material.height}
								className={styles.image}
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
								priority
								placeholder="blur"
								blurDataURL={formatBlurURL(material.url, { blur: 10 })}
								style={{
									viewTransitionName: `material-image-${material.id}`,
								}}
							/>
						</div>
					</div>

					<aside className={styles.sidebar}>
						<div className={styles.imageInfo} role="region" aria-labelledby="material-title">
							<Heading level={1} id="material-title">
								{material.displayName}
							</Heading>
							<dl className={styles.metadataList} aria-label="画像詳細情報">
								<div className={styles.metadataItem}>
									<dt>画像番号</dt>
									<dd>{material.id}</dd>
								</div>
								<div className={styles.metadataItem}>
									<dt>全体での位置</dt>
									<dd>
										<span aria-label={`全${materials.length}枚中${currentIndex + 1}番目`}>
											{currentIndex + 1} / {materials.length}
										</span>
									</dd>
								</div>
							</dl>
						</div>

						{/* Keyboard shortcuts info */}
						<div className={styles.shortcuts} role="complementary" aria-labelledby="shortcuts-heading">
							<h2 id="shortcuts-heading" className={styles.shortcutsTitle}>
								キーボードショートカット
							</h2>
							<dl className={styles.shortcutsList}>
								<div className={styles.shortcutItem}>
									<dt className={styles.shortcutKey}>←</dt>
									<dd className={styles.shortcutDescription}>前の画像</dd>
								</div>
								<div className={styles.shortcutItem}>
									<dt className={styles.shortcutKey}>→</dt>
									<dd className={styles.shortcutDescription}>次の画像</dd>
								</div>
								<div className={styles.shortcutItem}>
									<dt className={styles.shortcutKey}>Esc</dt>
									<dd className={styles.shortcutDescription}>一覧に戻る</dd>
								</div>
							</dl>
						</div>
					</aside>
				</article>

				{/* Related Materials */}
				<RelatedMaterials materials={materials} currentId={material.id} />
			</div>
		</div>
	);
};

export default Page;
