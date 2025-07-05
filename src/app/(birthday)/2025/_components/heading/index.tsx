import { clsx } from "@utils/clsx";

import * as styles from "./styles.css";

import type { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"h1" | "h2" | "h3" | "h4" | "h5" | "h6"> & {
	level: 1 | 2 | 3 | 4 | 5 | 6;
};

export const Heading = ({ level, ...props }: Props) => {
	const Tag = `h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

	return <Tag {...props} className={clsx(styles.root, props.className)} data-heading-level={level} />;
};
