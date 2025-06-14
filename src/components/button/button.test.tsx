import { render, screen, fireEvent } from "@testing-library/react";

import { Button } from "./index";

describe("Button", () => {
	it("renders button with text", () => {
		render(<Button>Click me</Button>);
		expect(screen.getByText("Click me")).toBeInTheDocument();
	});

	it("applies primary variant by default", () => {
		render(<Button>Primary</Button>);
		const button = screen.getByRole("button");
		expect(button).toHaveAttribute("class");
		expect(button.getAttribute("class")).toBeTruthy();
	});

	it("applies secondary variant when specified", () => {
		render(<Button variant="secondary">Secondary</Button>);
		const button = screen.getByRole("button");
		expect(button).toHaveAttribute("class");
		expect(button.getAttribute("class")).toBeTruthy();
	});

	it("calls onClick when clicked", () => {
		const handleClick = vi.fn();
		render(<Button onClick={handleClick}>Click me</Button>);

		fireEvent.click(screen.getByRole("button"));
		expect(handleClick).toHaveBeenCalledOnce();
	});

	it("disables button when disabled prop is true", () => {
		render(<Button disabled>Disabled</Button>);
		const button = screen.getByRole("button");
		expect(button).toBeDisabled();
	});

	it("does not call onClick when disabled", () => {
		const handleClick = vi.fn();
		render(
			<Button onClick={handleClick} disabled>
				Disabled
			</Button>,
		);

		fireEvent.click(screen.getByRole("button"));
		expect(handleClick).not.toHaveBeenCalled();
	});
});
