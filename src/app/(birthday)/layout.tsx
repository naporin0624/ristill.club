import Link from "next/link";
import Script from "next/script";

import * as styles from "./layout.css";

import type { ReactNode } from "react";

type Props = {
	children: ReactNode;
};

const Layout = async ({ children }: Props) => {
	return (
		<>
			<Script src="/2025/font.js" strategy="afterInteractive" />
			<main className={styles.main}>{children}</main>
			<footer className={styles.footer}>
				<Link
					href="https://twitter.com/napochaan_vrc2"
					target="_blank"
					rel="noopener noreferrer"
					className={styles.copyright}
				>
					©napochaan 2025{new Date().getFullYear() === 2025 ? "" : ` - ${new Date().getFullYear()}`}
				</Link>
			</footer>
		</>
	);
};

export default Layout;
