import type { Meta, StoryObj } from "@storybook/react";
import LoginForm from "@/components/LoginForm/LoginForm";

const meta: Meta<typeof LoginForm> = {
  title: "Components/LoginForm",
  component: LoginForm,
  argTypes: {
    // You can define argTypes here to customize the controls in Storybook
  },
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
  args: {
    // You can pass initial values for props here
  },
};
