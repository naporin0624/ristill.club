import Link from "next/link";

import Image from "@components/image";

import BannerImage from "./_assets/banner.webp";
import KVImage from "./_assets/kv.webp";
import MosaicArtImage from "./_assets/mosaic_24000.webp";
import { Figure } from "./_components/figure";
import { Heading } from "./_components/heading";
import { contributors } from "./contributors";
import * as styles from "./styles.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "RISTILL BIRTHDAY 2025",
	description:
		"VRChatで活動するりすてぃる（おてぃる）の2025年誕生日を祝う特設サイト。みんなで作ったモザイクアート、ファンからのメッセージを掲載。",
	openGraph: {
		title: "RISTILL BIRTHDAY 2025",
		description:
			"VRChatで活動するりすてぃる（おてぃる）の2025年誕生日を祝う特設サイト。みんなで作ったモザイクアート、ファンからのメッセージを掲載。",
		url: "https://ristill.club/2025",
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
		title: "RISTILL BIRTHDAY 2025",
		description:
			"VRChatで活動するりすてぃる（おてぃる）の2025年誕生日を祝う特設サイト。みんなで作ったモザイクアート、ファンからのメッセージを掲載。",
		card: "summary_large_image",
		images: ["https://ristill.club/2025/ogp.jpg"],
	},
	keywords: [
		"ristill_vr",
		"おてぃる",
		"りすてぃる",
		"リスティル",
		"VRChat",
		"誕生日",
		"2025",
		"モザイクアート",
		"ファンアート",
	],
};

const Page = async () => {
	return (
		<section className={styles.root}>
			<div className={styles.decoration}>
				<Image
					src={KVImage}
					alt="金髪ツインテールの女の子キャラクター「おてぃる」の誕生日を祝うキービジュアル。青いメイド服を着た可愛らしいキャラクターが笑顔でポーズを取り、周りにはカラフルなリボンやケーキなどの誕生日アイテムが散りばめられている。"
					className={styles.kv}
					priority
				/>
			</div>

			<div className={styles.screen}>
				<div className={styles.welcome}>
					<h1 className={styles.title}>
						<span>ristill</span>
						<span>{"happy\nbirthday"}</span>
						<time dateTime="2025-07-07T00:00:00+09:00">2025 07/07</time>
					</h1>
				</div>
			</div>

			<div className={styles.screen}>
				<section className={styles.section} id="about">
					<div className={styles.contents}>
						<Heading level={2}>このサイトについて</Heading>
						<p className={styles.text}>
							{[
								"ぼくの推しであるりすてぃること、おてぃるの誕生日を祝うために作られたウェブサイトです。",
								"naporitanがどうにかしておてぃるの誕生日を盛大に祝いたい！という思いの結晶をウェブサイトという形にしてみました。",
								"たくさんの人の協力がありこのウェブサイトを公開することができました。",
								"特にイラストを描いてくれたメスガキリョナ太郎と、声かけ協力してくれたねこぱんには感謝してもしきれません。",
								"2025年のおてぃるの誕生日と今年ががより良いものになることを願っています。",
							].join("\n")}
							<br />
							<span data-bold className={styles.text}>
								おてぃるお誕生日おめでと～～～～～～～！！！！
							</span>
						</p>
					</div>
				</section>
			</div>

			<div className={styles.screen}>
				<section className={styles.section} id="mosaic_art">
					<div className={styles.contents}>
						<Heading level={2}>みんなで作ったモザイクアート</Heading>

						<p className={styles.text}>
							{[
								"「個人の節目である誕生日に、歩んだ歴史からお祝いされる。」",
								"そんな体験を目指していた時に、タイルアートが目に入った。",
								"ああ、写真をたくさん撮るVRChatにぴったりな方法があるじゃないか！",
								"",
								"こんな経緯で始まったのが、このおてぃるモザイクアートプロジェクトです。",
							].join("\n")}
						</p>

						<Figure
							src={MosaicArtImage}
							alt="おてぃるの誕生日を祝うモザイクアート。24000個のタイルで構成され、中央に「RISTILL BIRTHDAY 2025/07/07」のテキストが表示されている。背景は様々な色とりどりのVRChatの写真で構成されている。"
							caption="おてぃるbirthdayモザイクアート24000タイル"
							placeholder="blur"
						/>

						<section className={styles.subSection}>
							<Heading level={3}>参加者</Heading>
							<p className={styles.text}>
								{[
									"たくさんの方に協力していただき、3000 枚もの画像が集まりました。ありがとうございます！",
									"人数が多いため、敬称略とさせていただきます。",
								].join("\n")}
							</p>

							<ul className={styles.contributors}>
								{contributors.map(({ href, name, id }) => (
									<li key={href} className={styles.contributor}>
										{name}
										<Link
											href={href}
											target="_blank"
											rel="noopener"
											className={styles.contributorLink}
										>{`(@${id})`}</Link>
									</li>
								))}
							</ul>
						</section>
					</div>
				</section>
			</div>

			<div className={styles.screen}>
				<section className={styles.section} id="join_fangroup">
					<div className={styles.contents}>
						<Heading level={2}>おてぃるのfangroupに入ろう！</Heading>

						<Figure
							src={BannerImage}
							alt="おてぃるふぁんくらぶの宣伝バナー。青い背景に「おてぃる」と「ふぁんくらぶ!!」の文字が表示され、様々なVRChatアバターの女の子キャラクターたちが描かれている。カラフルで楽しい雰囲気のイラスト。"
							caption="おてぃるふぁんくらぶ！バナー"
							placeholder="blur"
						/>
						<p className={styles.text}>
							<Link href="https://x.com/napochaan_vrc2" target="_blank" rel="noopener" className={styles.profileLink}>
								@napochaan_vrc2
							</Link>
							が運営している、おてぃる公認の非公式ファングループがあります。
							おてぃるのキャスト日の告知やキャスト情報などをまとめているので、ぜひ入ってみてください。
							おてぃるのことをたくさんの人に知ってもらって、たくさんの人が入っている巨大グループにしましょう！
						</p>
						<Link href="https://vrc.group/RISTIL.1680" target="_blank" rel="noopener" className={styles.joinButton}>
							おてぃるふぁんくらぶに入る
						</Link>
					</div>
				</section>
			</div>

			<div className={styles.screen}>
				<section className={styles.section} id="conclusion">
					<div className={styles.contents}>
						<Heading level={2}>さいごに</Heading>
						<p className={styles.text}>
							ぼくの推しであるりすてぃること、おてぃるの誕生日を祝うために作られたウェブサイトです。 naporitan
							がどうにかしておてぃるの誕生日を盛大に祝いたい！という思いの結晶をウェブサイトという形にしてみました。
							たくさんの人の協力がありこのウェブサイトを公開することができました。
							特にイラストを描いてくれたメスガキリョナ太郎と、声かけ協力してくれたねこぱんには感謝してもしきれません。
							2025年のおてぃるの誕生日と今年ががより良いものになることを願っています。
						</p>
					</div>
				</section>
			</div>
		</section>
	);
};

export default Page;
