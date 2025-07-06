import Image from "@components/image";
import { clsx } from "@utils/clsx";

import * as styles from "./styles.css";

import type { ComponentPropsWithoutRef } from "react";

type Props = Omit<ComponentPropsWithoutRef<typeof Image>, "className"> & {
	caption: string;
	className?: Partial<{ root: string; image: string; caption: string }>;
};

export const Figure = ({ caption, className, ...props }: Props) => {
	return (
		<figure className={clsx(className?.root, styles.root)}>
			<Image {...props} alt={props.alt} className={clsx(className?.image, styles.image)} />
			<figcaption className={clsx(className?.caption, styles.caption)}>{caption}</figcaption>
		</figure>
	);
};
