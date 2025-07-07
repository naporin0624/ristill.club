import { BubbleAnimation } from "@components/bubble";

import * as styles from "./layout.css";

import type { ReactNode } from "react";

type Props = {
	children: ReactNode;
};

const Layout = ({ children }: Props) => {
	return (
		<>
			<BubbleAnimation className={styles.bubbleRoot} />
			{children}
		</>
	);
};

export default Layout;
