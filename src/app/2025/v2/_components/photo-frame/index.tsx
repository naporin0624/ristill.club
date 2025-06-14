// This component uses basic interactions which require client-side JavaScript
"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";

import * as styles from "./styles.css";

export const PhotoFrame = () => {
	const scrollContainerRef = useRef<HTMLDivElement>(null);
	const [scrollProgress, setScrollProgress] = useState(0);

	const handleScroll = useCallback(() => {
		if (!scrollContainerRef.current) return;
		const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
		const maxScroll = scrollHeight - clientHeight;
		const progress = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
		setScrollProgress(progress);
	}, []);

	useEffect(() => {
		// スクロールイベントリスナーを設定
		const scrollContainer = scrollContainerRef.current;
		if (!scrollContainer) return;
		
		scrollContainer.addEventListener("scroll", handleScroll);
		handleScroll(); // 初期値を設定
		
		return () => {
			scrollContainer.removeEventListener("scroll", handleScroll);
		};
	}, [handleScroll]);

	return (
		<article className={styles.root} role="article" aria-label="おてぃる誕生日記念フォトフレーム">
			<div className={styles.scrollIndicator}>
				<div 
					className={styles.scrollBar} 
					style={{ width: `${scrollProgress}%` }}
					role="progressbar"
					aria-valuenow={Math.round(scrollProgress)}
					aria-valuemin={0}
					aria-valuemax={100}
					aria-label="スクロール進捗"
				/>
			</div>
			<div className={styles.frameOuter}>
				<div className={styles.frameInner}>
					<div className={styles.matting}>
						<div className={styles.cornerTopLeft} aria-hidden="true" />
						<div className={styles.cornerTopRight} aria-hidden="true" />
						<div className={styles.cornerBottomLeft} aria-hidden="true" />
						<div className={styles.cornerBottomRight} aria-hidden="true" />
						<main className={styles.photoContent} role="main" aria-label="メインコンテンツ" ref={scrollContainerRef}>
							{/* Hero Section */}
							<section className={styles.heroSection}>
								<div className={styles.heroImageContainer}>
									<Image
										src="/assets/otiru_milltina.png"
										alt="おてぃるのメインビジュアル"
										width={800}
										height={450}
										className={styles.heroImage}
										priority
									/>
								</div>
								<div className={styles.heroTextOverlay}>
									<h1 className={styles.heroTitle}>HAPPY BIRTHDAY</h1>
									<h2 className={styles.heroName}>おてぃる</h2>
									<time className={styles.heroDate} dateTime="2025-01-15">2025.01.15</time>
								</div>
							</section>

							{/* Profile Section */}
							<section className={styles.profileSection}>
								<div className={styles.profileLayout}>
									<div className={styles.profileImageContainer}>
										<Image
											src="/assets/otiru_vertical.png"
											alt="おてぃるのプロフィール画像"
											width={300}
											height={533}
											className={styles.profileImage}
										/>
									</div>
									<div className={styles.profileContent}>
										<h3 className={styles.sectionTitle} id="profile-heading">今日の主役</h3>
										<div className={styles.profileCard}>
											<h4 className={styles.profileName}>おてぃる</h4>
											<p className={styles.profileDescription}>
												VRChatの世界で輝く金髪碧眼の美少女。
												イベントキャストとしての活躍、配信での可愛らしい魅力、
												フレンドから愛される理由がある素晴らしい存在。
											</p>
										</div>
									</div>
								</div>
							</section>

							{/* Mosaic Art Section */}
							<section className={styles.mosaicSection}>
								<h3 className={styles.sectionTitle} id="mosaic-heading">みんなでつくったモザイクアート</h3>
								<div className={styles.mosaicContainer}>
									<Image
										src="/assets/yoko_mosaic_db.png"
										alt="みんなで作ったモザイクアート"
										width={800}
										height={450}
										className={styles.mosaicImage}
									/>
									<p className={styles.mosaicDescription}>
										たくさんの人の愛が込められた美しいモザイクアート。
										あなたが愛されている証拠です。
									</p>
								</div>
							</section>

							{/* Growth Timeline Section */}
							<section className={styles.growthSection}>
								<h3 className={styles.sectionTitle} id="growth-heading">歩んできた軌跡</h3>
								<p className={styles.growthSubtitle}>2024年7月7日からのキャストとしての成長</p>
								<div className={styles.growthTimeline}>
									<div className={styles.growthItem}>
										<div className={styles.growthDate}>2024.07</div>
										<div className={styles.growthTitle}>キャストデビュー</div>
										<div className={styles.growthDesc}>初めてのイベント出演</div>
									</div>
									<div className={styles.growthItem}>
										<div className={styles.growthDate}>2024.10</div>
										<div className={styles.growthTitle}>活動の幅が拡大</div>
										<div className={styles.growthDesc}>複数のイベントで活躍</div>
									</div>
									<div className={styles.growthItem}>
										<div className={styles.growthDate}>2025.01</div>
										<div className={styles.growthTitle}>今日へ</div>
										<div className={styles.growthDesc}>継続した成長の記録</div>
									</div>
								</div>
							</section>

							{/* Letter Navigation Section */}
							<section className={styles.letterSection}>
								<h3 className={styles.sectionTitle}>特別な手紙</h3>
								<div className={styles.letterInvitation}>
									<h4 className={styles.letterTitle}>おてぃるへ、フレンドからの特別な手紙</h4>
									<p className={styles.letterDescription}>
										naporitanからの1万文字の推し活文章。
										この1年間、君の輝きを見続けてきた想いが込められています。
									</p>
									<button className={styles.letterButton}>
										手紙を読む
									</button>
								</div>
							</section>

							{/* Message Section */}
							<section className={styles.messageSection}>
								<h3 className={styles.sectionTitle} id="message-heading">心からのメッセージ</h3>
								<div className={styles.letterCard} role="region" aria-labelledby="message-heading">
									<h4 className={styles.letterCardTitle}>おてぃるへ</h4>
									<p className={styles.birthdayMessage} aria-live="polite">
										今日はあなたの特別な日。
										<br />
										いつも素敵な作品と笑顔で周りを明るくしてくれて、本当にありがとう。
										<br />
										<br />
										金髪碧眼の美少女として生まれたあなたが、これからもずっと輝き続けますように。
										<br />
										新しい一年が、今まで以上に素晴らしいものになることを心から願っています。
										<br />
										<br />
										お誕生日おめでとう。
									</p>
								</div>
							</section>
						</main>
					</div>
				</div>
			</div>
		</article>
	);
};