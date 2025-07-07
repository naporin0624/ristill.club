import { Link } from "next-view-transitions";

import Image from "@components/image";
import { formatBlurURL } from "@components/image/helper";
import { clsx } from "@utils/clsx";

import * as styles from "./styles.css";

type MaterialData = {
	id: string;
	displayName: string;
	size: number;
	url: string;
	modTime: string;
	originalName: string;
	width: number;
	height: number;
};

type Props = {
	material: MaterialData;
	className?: string;
};

export const MaterialItem = ({ material, className }: Props) => {
	const { id, displayName, url, width, height } = material;

	return (
		<Link
			href={`/2025/materials/${id}`}
			className={clsx(styles.root, className)}
			aria-label={`${displayName}を拡大表示`}
		>
			<div className={styles.imageContainer} aria-hidden="true">
				<Image
					src={url}
					alt=""
					width={width}
					height={height}
					className={styles.image}
					sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
					placeholder="blur"
					blurDataURL={formatBlurURL(url, { blur: 10 })}
					style={{
						viewTransitionName: `material-image-${id}`,
					}}
				/>
			</div>
			<div className={styles.metadata}>
				<div className={styles.name}>{displayName}</div>
				<div className={styles.viewHint} aria-hidden="true">
					クリックして拡大表示
				</div>
			</div>
		</Link>
	);
};
