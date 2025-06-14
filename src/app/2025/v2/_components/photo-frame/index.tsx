// This component uses motion animations which require client-side JavaScript
"use client";

import { motion } from "motion/react";
import { useRef, useState, useEffect, useCallback } from "react";

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
		<div className={styles.root}>
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
						<div className={styles.cornerTopLeft} />
						<div className={styles.cornerTopRight} />
						<div className={styles.cornerBottomLeft} />
						<div className={styles.cornerBottomRight} />
						<div className={styles.photoContent} ref={scrollContainerRef}>
							{/* Hero Section */}
							<motion.section
								className={styles.heroSection}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ default: { duration: 0.8, delay: 0.3 } }}
							>
								<h1 className={styles.mainTitle}>✨ おてぃる誕生日記念 ✨</h1>
								<h2 className={styles.subTitle}>おてぃる</h2>
								<p className={styles.dateText}>2025.01.15</p>
								<p className={styles.conceptText}>今日の主役は金髪碧眼の美少女</p>
							</motion.section>

							{/* Memories Section */}
							<motion.section
								className={styles.memoriesSection}
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ default: { duration: 0.6, delay: 0.6 } }}
							>
								<h3 className={styles.sectionTitle}>思い出の瞬間</h3>
								<div className={styles.memoryGrid}>
									<div className={styles.memoryItem}>
										<div className={styles.memoryIcon}>🎨</div>
										<h4 className={styles.memoryItemTitle}>クリエイティブな才能</h4>
										<p className={styles.memoryItemDesc}>毎日のように見せてくれる素晴らしい作品たち</p>
									</div>
									<div className={styles.memoryItem}>
										<div className={styles.memoryIcon}>✨</div>
										<h4 className={styles.memoryItemTitle}>キラキラした笑顔</h4>
										<p className={styles.memoryItemDesc}>いつも明るく周りを照らす存在感</p>
									</div>
									<div className={styles.memoryItem}>
										<div className={styles.memoryIcon}>💫</div>
										<h4 className={styles.memoryItemTitle}>優しい心</h4>
										<p className={styles.memoryItemDesc}>いつも周りのことを気にかけてくれる温かさ</p>
									</div>
									<div className={styles.memoryItem}>
										<div className={styles.memoryIcon}>🌟</div>
										<h4 className={styles.memoryItemTitle}>成長する姿</h4>
										<p className={styles.memoryItemDesc}>日々進化し続ける素晴らしい成長</p>
									</div>
								</div>
							</motion.section>

							{/* Timeline Section */}
							<motion.section
								className={styles.timelineSection}
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ default: { duration: 0.6, delay: 0.9 } }}
							>
								<h3 className={styles.sectionTitle}>これまでの軌跡</h3>
								<div className={styles.timelineFlow}>
									<div className={styles.timelineItem}>
										<div className={styles.timelineIcon}>🌱</div>
										<div className={styles.timelineItemTitle}>出会い</div>
										<div className={styles.timelineItemDesc}>最初の出会いから</div>
									</div>
									<div className={styles.timelineArrow}>→</div>
									<div className={styles.timelineItem}>
										<div className={styles.timelineIcon}>🌸</div>
										<div className={styles.timelineItemTitle}>成長</div>
										<div className={styles.timelineItemDesc}>日々の積み重ね</div>
									</div>
									<div className={styles.timelineArrow}>→</div>
									<div className={styles.timelineItem}>
										<div className={styles.timelineIcon}>🌟</div>
										<div className={styles.timelineItemTitle}>今日</div>
										<div className={styles.timelineItemDesc}>特別な一日へ</div>
									</div>
								</div>
							</motion.section>

							{/* Message Section */}
							<motion.section
								className={styles.messageSection}
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ default: { duration: 0.6, delay: 1.2 } }}
							>
								<h3 className={styles.sectionTitle}>心からのメッセージ</h3>
								<div className={styles.letterCard}>
									<h4 className={styles.letterTitle}>おてぃるへ</h4>
									<p className={styles.birthdayMessage}>
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
										お誕生日おめでとう！✨
									</p>
								</div>
							</motion.section>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
