import Image from "@components/image";
import MosaicArtImage from "./_assets/mosaic_24000.png";
import BannerImage from "./_assets/banner.png";

import { Heading } from "./_components/heading";
import * as styles from "./styles.css";
import Link from "next/link";
import { contributors } from "./contributors";

const Page = async () => {
	return (
		<section className={styles.root}>
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
				<section className={styles.section}>
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
				<section className={styles.section}>
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

						<figure>
							<Image src={MosaicArtImage} alt="" />
							<figcaption>おてぃるbirthdayモザイクアート24000タイル</figcaption>
						</figure>

						<section className={styles.subSection}>
							<Heading level={3}>参加者</Heading>
							<p className={styles.text}>
								{[
									"たくさんの方に協力していただき、3000 枚もの画像が集まりました。ありがとうございます！",
									"",
									"恐縮ではございますが、人数が多いので敬称略とさせていただきます。",
								].join("\n")}
							</p>

							<ul className={styles.contributors}>
								{contributors.map(({ href, name, id }) => (
									<li key={href} className={styles.contributor}>
										{name}
										<Link href={href} target="_blank" rel="noopener noreferrer">{`(@${id})`}</Link>
									</li>
								))}
							</ul>
						</section>
					</div>
				</section>
			</div>

			<div className={styles.screen}>
				<section className={styles.section}>
					<div className={styles.contents}>
						<Heading level={2}>おてぃるのfangroupに入ろう！</Heading>
						<figure>
							<Image src={BannerImage} alt="" />
							<figcaption>おてぃるふぁんくらぶ！バナー</figcaption>
						</figure>

						<p className={styles.text}>
							<Link href="https://x.com/napochaan_vrc2" target="_blank" rel="noopener noreferrer">
								@napochaan_vrc2
							</Link>
							が運営している、おてぃる公認の非公式ファングループがあります。
							おてぃるのキャスト日の告知やキャスト情報などをまとめているので、ぜひ入ってみてください。
							おてぃるのことをたくさんの人に知ってもらって、たくさんの人が入っている巨大グループにしましょう！
						</p>
					</div>
				</section>
			</div>

			<div className={styles.screen}>
				<section className={styles.section}>
					<div className={styles.contents}>
						<Heading level={2}>さいご</Heading>
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
