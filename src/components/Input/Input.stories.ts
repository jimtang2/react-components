import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./Input";

const meta = {
	title: "Components/Input",
	component: Input,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
	args: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
	args: {
		type: "text",
		placeholder: "Placeholder Text...",
	},
};

export const Password: Story = {
	args: {
		type: "password",
		placeholder: "Password Placeholder...",
	},
};

export const Date: Story = {
	args: {
		type: "date",
		placeholder: "01/01/2001",
	},
};
