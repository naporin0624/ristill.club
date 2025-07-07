import dayjs from "dayjs";
import Script from "next/script";
import { Link } from "next-view-transitions";

import * as styles from "../../layout.css";
import { Loading } from "../_components/loading";

import type { ReactNode } from "react";

type Props = {
	children: ReactNode;
};

const getCopyrightYear = () => {
	const currentYear = dayjs().year();

	return currentYear === 2025 ? "2025" : `2025 - ${currentYear}`;
};

const Layout = async ({ children }: Props) => {
	return (
		<>
			<Script src="/2025/font.js" strategy="afterInteractive" />
			<Loading />

			<main className={styles.main}>{children}</main>
			<footer className={styles.footer}>
				<Link
					href="https://twitter.com/napochaan_vrc2"
					target="_blank"
					rel="noopener noreferrer"
					className={styles.copyright}
				>
					©napochaan {getCopyrightYear()}
				</Link>
			</footer>
		</>
	);
};

export default Layout;
