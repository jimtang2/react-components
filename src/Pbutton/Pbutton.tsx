import React from "react";

export interface PbuttonProps {
	primary?: boolean;
	backgroundColor?: string;
	size?: "small" | "medium" | "large";
	label: string;
	onClick?: () => void;
}

export const Pbutton = ({ primary = false, size = "medium", backgroundColor, label, ...props }: PbuttonProps) => {
	const mode = primary ? "storybook-button--primary" : "storybook-button--secondary";
	return (
		<button
			type="button"
			className={["storybook-button", `storybook-button--${size}`, mode].join(" ")}
			style={{ backgroundColor }}
			{...props}>
			{label}
		</button>
	);
};
