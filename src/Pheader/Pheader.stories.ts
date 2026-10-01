import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/test";

import { Pheader } from "./Pheader";

const meta = {
	title: "Core/Pheader",
	component: Pheader,
	tags: ["autodocs"],
	parameters: {
		layout: "fullscreen",
	},
	args: {
		onLogin: fn(),
		onLogout: fn(),
		onCreateAccount: fn(),
	},
} satisfies Meta<typeof Pheader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
	args: {
		user: {
			name: "Jane Doe",
		},
	},
};

export const LoggedOut: Story = {};
