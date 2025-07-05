import Link from "next/link";

import * as styles from "./layout.css";

import type { ReactNode } from "react";

type Props = {
	children: ReactNode;
};

const Layout = async ({ children }: Props) => {
	return (
		<>
			<main className={styles.main}>{children}</main>
			<footer className={styles.footer}>
				<Link
					href="https://twitter.com/napochaan_vrc2"
					target="_blank"
					rel="noopener noreferrer"
					className={styles.copyright}
				>
					©napochaan
				</Link>
			</footer>
		</>
	);
};

export default Layout;
