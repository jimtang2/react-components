import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Button } from './Button';

const meta = {
  title: 'Core/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
// More on argTypes: https://storybook.js.org/docs/api/arg-types
// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
