// This component uses minimal animations and click state management which require client-side JavaScript
"use client";

import { motion } from "motion/react";
import { useState } from "react";

import * as styles from "./styles.css";

export const GrowthTimeline = () => {
	const [selectedMonth, setSelectedMonth] = useState<number | null>(null);

	const handleTimelineClick = (index: number) => {
		setSelectedMonth(selectedMonth === index ? null : index);
	};

	const createHandleTimelineClick = (index: number) => () => handleTimelineClick(index);

	const timelineData = [
		{
			id: "timeline-2024-07",
			month: "2024/07",
			title: "新たな始まり",
			description: "VRChatでの活動本格化",
			achievement: "初回配信デビュー",
		},
		{
			id: "timeline-2024-08",
			month: "2024/08",
			title: "輝きの発見",
			description: "イベント参加増加",
			achievement: "フレンド数 50人突破",
		},
		{
			id: "timeline-2024-09",
			month: "2024/09",
			title: "魅力の開花",
			description: "配信スタイル確立",
			achievement: "定期配信スタート",
		},
		{
			id: "timeline-2024-10",
			month: "2024/10",
			title: "成長の実感",
			description: "コミュニティ参加",
			achievement: "イベントキャスト挑戦",
		},
		{
			id: "timeline-2024-11",
			month: "2024/11",
			title: "愛される存在",
			description: "多くの出会いと交流",
			achievement: "フレンド数 100人突破",
		},
		{
			id: "timeline-2024-12",
			month: "2024/12",
			title: "特別な年末",
			description: "年末イベント大活躍",
			achievement: "キャスト活動本格化",
		},
		{
			id: "timeline-2025-01",
			month: "2025/01",
			title: "新年の誓い",
			description: "新たな目標設定",
			achievement: "配信技術向上",
		},
		{
			id: "timeline-2025-02",
			month: "2025/02",
			title: "愛情深まる",
			description: "深い絆の形成",
			achievement: "コラボ配信増加",
		},
		{
			id: "timeline-2025-03",
			month: "2025/03",
			title: "春の躍進",
			description: "活動範囲拡大",
			achievement: "新企画スタート",
		},
		{
			id: "timeline-2025-04",
			month: "2025/04",
			title: "満開の魅力",
			description: "個性が光る時期",
			achievement: "オリジナル企画成功",
		},
		{
			id: "timeline-2025-05",
			month: "2025/05",
			title: "愛に包まれて",
			description: "周りからの愛情実感",
			achievement: "感謝イベント開催",
		},
		{
			id: "timeline-2025-06",
			month: "2025/06",
			title: "輝く誕生日",
			description: "1年間の集大成",
			achievement: "この誕生日サイト誕生",
		},
	];

	return (
		<section className={styles.root}>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ default: { duration: 2 } }}
				viewport={{ once: true }}
			>
				<h2 className={styles.title}>この1年で見せてくれた輝き</h2>
			</motion.div>

			<div className={styles.timeline}>
				<div className={styles.line}></div>

				{timelineData.map((item, index) => (
					<motion.div
						key={item.id}
						className={styles.item}
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ default: { duration: 1.5, delay: index * 0.1 } }}
						viewport={{ once: true }}
						onClick={createHandleTimelineClick(index)}
					>
						<div className={styles.date}>{item.month}</div>

						<div className={styles.card}>
							<h3 className={styles.cardTitle}>{item.title}</h3>
							<p className={styles.cardText}>{item.description}</p>
							<div className={styles.achievement}>🌟 {item.achievement}</div>

							{selectedMonth === index && (
								<motion.div
									className={styles.extraDetails}
									initial={{ opacity: 0, height: 0 }}
									animate={{ opacity: 1, height: "auto" }}
									exit={{ opacity: 0, height: 0 }}
								>
									<p>この月の特別な思い出がたくさん詰まっています</p>
								</motion.div>
							)}
						</div>
					</motion.div>
				))}
			</div>

			<motion.div
				className={styles.letterInvitation}
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ default: { duration: 2, delay: 0.5 } }}
				viewport={{ once: true }}
			>
				<div className={styles.invitationSparkles}>✨</div>
				<h3 className={styles.invitationTitle}>💌 「おてぃるへ、フレンドからの特別な手紙」</h3>
				<p className={styles.invitationText}>
					&ldquo;この1年間、君の輝きを見続けてきた。
					<br />
					VRChatで出会ったあの日から、
					<br />
					君の可愛さに心を奪われ続けている―&rdquo;
				</p>
				<div className={styles.letterButton}>📖 手紙を読む（約10分の心温まる体験）</div>
				<div className={styles.letterDescription}>
					✨ 深い想いと感謝が込められています
					<br />
					🎂 君だけに贈る、特別な言葉たち
				</div>
			</motion.div>
		</section>
	);
};
