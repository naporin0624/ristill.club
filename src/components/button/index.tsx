import { buttonStyles } from "./styles.css";

import type { ReactNode } from "react";

type ButtonProps = {
	children: ReactNode;
	variant?: "primary" | "secondary";
	onClick?: () => void;
	disabled?: boolean;
};

export const Button = ({ children, variant = "primary", onClick, disabled = false }: ButtonProps) => {
	return (
		<button className={buttonStyles({ variant })} onClick={onClick} disabled={disabled}>
			{children}
		</button>
	);
};
