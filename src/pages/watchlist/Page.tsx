import React from "react";

import { Header } from "../../components/Header/Header";

type User = {
	name: string;
};

export const Page: React.FC = () => {
	const [user, setUser] = React.useState<User>();

	return (
		<article>
			<Header
				user={user}
				onLogin={() => setUser({ name: "Jane Doe" })}
				onLogout={() => setUser(undefined)}
				onCreateAccount={() => setUser({ name: "Jane Doe" })}
			/>
		</article>
	);
};
