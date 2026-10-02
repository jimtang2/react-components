import React from "react";

export interface InputProps {
	className?: string;
	size?: "sm" | "md" | "lg";
	type: "text" | "password" | "date";
	placeholder: string;
	onClick?: () => void;
}

export const Input = ({ className = "", size = "md", type, placeholder, ...props }: InputProps) => {
	return (
		<input
			type={type}
			className={["input", `input--${size}`, className].join(" ")}
			placeholder={placeholder}
			{...props}
		/>
	);
};
