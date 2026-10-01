import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Pbutton } from "./Pbutton";

const meta = {
	title: "Core/Pbutton",
	component: Pbutton,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		backgroundColor: { control: "color" },
	},
	args: { onClick: fn() },
} satisfies Meta<typeof Pbutton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
	args: {
		label: "Button",
	},
};
