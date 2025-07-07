"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";

type Props = {
	prevId?: string;
	nextId?: string;
};

export const KeyboardNavigation = ({ prevId, nextId }: Props) => {
	const router = useRouter();

	const handleKeyDown = useCallback(
		(event: KeyboardEvent) => {
			switch (event.key) {
				case "ArrowLeft":
					if (prevId != null) {
						event.preventDefault();
						router.push(`/2025/materials/${prevId}`);
					}
					break;
				case "ArrowRight":
					if (nextId != null) {
						event.preventDefault();
						router.push(`/2025/materials/${nextId}`);
					}
					break;
				case "Escape":
					event.preventDefault();
					router.push("/2025/materials");
					break;
			}
		},
		[router, prevId, nextId],
	);

	useEffect(() => {
		document.addEventListener("keydown", handleKeyDown);

		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [handleKeyDown]);

	return null;
};
