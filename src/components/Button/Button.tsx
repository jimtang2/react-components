import { useEffect, useRef, useState } from "react";

export interface ButtonProps {
	label: string;
	primary?: boolean;
	secondary?: boolean;
	className?: string;
	size?: "sm" | "md" | "lg";
	disabled?: boolean;
	onClick?: () => void;
}

export const Button = ({
	onClick = () => {},
	label,
	primary = false,
	secondary = false,
	disabled = false,
	className = "",
	size = "md",
}: ButtonProps) => {
	const [pointerDown, setPointerDown] = useState(false);
	const [clicked, setClicked] = useState(false);
	const buttonRef = useRef<HTMLButtonElement>(null);

	const handleClick = () => {
		setClicked(true);
		onClick();
		window.setTimeout(() => {
			setClicked(false);
		}, 80);
	};

	useEffect(() => {
		if (buttonRef == null) {
			return;
		}
		const b = buttonRef.current;
		const handlePointerDown = () => setPointerDown(true);
		const handlePointerUp = () => setPointerDown(false);
		const handlePointerCancel = () => setPointerDown(false);
		b?.addEventListener("pointerdown", handlePointerDown);
		b?.addEventListener("pointerup", handlePointerUp);
		b?.addEventListener("pointercancel", handlePointerCancel);
		return () => {
			b?.removeEventListener("pointerdown", handlePointerDown);
			b?.removeEventListener("pointerup", handlePointerUp);
			b?.removeEventListener("pointercancel", handlePointerCancel);
		};
	}, []);

	const mode = `button--${(primary && "primary") || (secondary && "secondary") || "tertiary"}`;
	const pointerStatus = pointerDown ? "button--pressed" : "";
	const clickStatus = clicked ? "button--clicked" : "";

	return (
		<button
			ref={buttonRef}
			type="button"
			disabled={disabled}
			className={["button", `button--${size}`, mode, pointerStatus, clickStatus, className].join(" ")}
			onClick={handleClick}>
			{label}
		</button>
	);
};
