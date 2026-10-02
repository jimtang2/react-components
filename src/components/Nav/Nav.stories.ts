import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/test";

import { Nav } from "./Nav";

const meta = {
	title: "Components/Nav",
	component: Nav,
	tags: ["autodocs"],
	parameters: {
		layout: "fullscreen",
	},
	args: {
		onLogin: fn(),
		onLogout: fn(),
		onCreateAccount: fn(),
	},
} satisfies Meta<typeof Nav>;

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
