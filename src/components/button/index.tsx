import * as styles from "./styles.css";

import type { ReactNode } from "react";

type ButtonProps = {
	children: ReactNode;
	variant?: "primary" | "secondary";
	onClick?: () => void;
	disabled?: boolean;
};

export const Button = ({ children, variant = "primary", onClick, disabled = false }: ButtonProps) => {
	const className = variant === "primary" ? styles.primary : styles.secondary;

	return (
		<button className={className} onClick={onClick} disabled={disabled}>
			{children}
		</button>
	);
};
