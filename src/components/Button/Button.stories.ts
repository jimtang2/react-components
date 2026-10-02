import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";

const meta = {
	title: "Components/Button",
	component: Button,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
	args: {
		onClick: () => console.log("storybook: button click"),
	},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
	args: {
		label: "Click Me",
		size: "md",
	},
};

export const Primary: Story = {
	args: {
		label: "Click Me",
		primary: true,
		size: "md",
	},
};

export const Secondary: Story = {
	args: {
		label: "Click Me",
		secondary: true,
		size: "md",
	},
};

export const Disabled: Story = {
	args: {
		label: "I Am Disabled",
		size: "md",
		disabled: true,
	},
};
