import { render, screen } from "@testing-library/react";
import React from "react";

import { HeroSection } from "./index";

// Button コンポーネントをモック
vi.mock("@components/button", () => ({
	Button: ({ children, variant }: { children: React.ReactNode; variant?: string }) => (
		<button data-testid={`button-${variant ?? "primary"}`}>{children}</button>
	),
}));

describe("HeroSection", () => {
	it("renders hero section with title and subtitle", () => {
		render(<HeroSection />);

		expect(screen.getByText("RISTILL ANNIVERSARY 2025")).toBeInTheDocument();
		expect(screen.getByText("最高のイベント体験をお届けします")).toBeInTheDocument();
	});

	it("renders two buttons with correct text", () => {
		render(<HeroSection />);

		expect(screen.getByText("イベント詳細")).toBeInTheDocument();
		expect(screen.getByText("チケット予約")).toBeInTheDocument();
	});

	it("renders buttons with correct variants", () => {
		render(<HeroSection />);

		expect(screen.getByTestId("button-primary")).toBeInTheDocument();
		expect(screen.getByTestId("button-secondary")).toBeInTheDocument();
	});
});
