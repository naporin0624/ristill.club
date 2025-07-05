import { Slot } from "@radix-ui/react-slot";

import type { ReactNode } from "react";

import "@acab/reset.css";
import "./global.css";

type Props = {
	children: ReactNode;
	asChild?: boolean;
};
export const ThemeProvider = ({ children, asChild = false }: Props) => {
	const Comp = asChild ? Slot : "div";

	return <Comp>{children}</Comp>;
};
