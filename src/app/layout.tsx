import { Noto_Sans_JP } from "next/font/google";

import { ThemeProvider } from "@themes/provider";
import { clsx } from "@utils/clsx";

import * as styles from "./layout.css";

import type { Metadata } from "next";
import type { ReactNode } from "react";

import "@adapters/date";
import "@acab/reset.css";

const notosansjp = Noto_Sans_JP({
	weight: ["500", "700"],
	subsets: ["latin"],
	variable: "--noto-sans-jp",
});

export const metadata: Metadata = {
	metadataBase: new URL("https://ristill.club"),
	title: {
		template: "%s | おてぃるふぁんくらぶ！",
		default: "おてぃるふぁんくらぶ！",
	},
	description: "",
	openGraph: {
		title: {
			template: "%s | おてぃるふぁんくらぶ！",
			default: "おてぃるふぁんくらぶ！",
		},
		description: "",
		url: "https://ristill.club",
		type: "website",
		siteName: "おてぃるふぁんくらぶ！",
		images: [
			{
				url: "https://ristill.club/ogp.png",
				width: 1200,
				height: 630,
				alt: "おてぃるふぁんくらぶ！のOGP画像",
			},
		],
	},
	twitter: {
		title: {
			template: "%s | おてぃるふぁんくらぶ！",
			default: "おてぃるふぁんくらぶ！",
		},
		description: "",
		creatorId: "@napochaan_vrc2",
		creator: "napochaan",
		card: "summary_large_image",
	},
	authors: [
		{
			name: "naporitan",
			url: "https://napochaan.com",
		},
	],
	category: "website",
	creator: "naporitan",
	keywords: ["ristill_vr", "おてぃるふぁんくらぶ", "おてぃる", "りすてぃる", "リスティル", "VRChat"],
};

type Props = {
	children: ReactNode;
};

const Layout = ({ children }: Props) => {
	return (
		<html lang="ja" className={styles.html}>
			<ThemeProvider asChild>
				<body className={clsx(styles.body, notosansjp.variable)}>{children}</body>
			</ThemeProvider>
		</html>
	);
};

export default Layout;
