import React from "react";
import { Button } from "../Button/Button";

type User = {
	name: string;
};

export interface NavProps {
	user?: User;
	onLogin?: () => void;
	onLogout?: () => void;
	onCreateAccount?: () => void;
}

export const Nav = ({ user, onLogin, onLogout, onCreateAccount }: NavProps) => (
	<header>
		<div className="storybook-header">
			<div>
				<h1>Acme</h1>
			</div>
			<div></div>
		</div>
	</header>
);
