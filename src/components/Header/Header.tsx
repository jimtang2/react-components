import React from "react";
import { Button } from "../Button/Button";

type User = {
	name: string;
};

export interface HeaderProps {
	user?: User;
	onLogin?: () => void;
	onLogout?: () => void;
	onCreateAccount?: () => void;
}

export const Header = ({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => (
	<header>
		<div className="storybook-header">
			<div>
				<h1>Acme</h1>
			</div>
			<div>
				{user ? (
					<>
						<span className="welcome">
							Welcome, <b>{user.name}</b>!
						</span>
						<Button size="sm" onClick={onLogout} label="Log out" />
					</>
				) : (
					<>
						<Button size="sm" onClick={onLogin} label="Log in" />
						<Button primary size="sm" onClick={onCreateAccount} label="Sign up" />
					</>
				)}
			</div>
		</div>
	</header>
);
