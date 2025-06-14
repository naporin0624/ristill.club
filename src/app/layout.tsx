import { Inter } from "next/font/google";
import React from "react";

import { globalStyles } from "./layout.css";

import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "RISTILL ANNIVERSARY 2025",
	description: "RISTILL ANNIVERSARY 2025 Event Site",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang="ja" className={globalStyles}>
			<body className={inter.className}>{children}</body>
		</html>
	);
};

export default RootLayout;
