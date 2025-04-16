import type { Meta, StoryObj } from "@storybook/react";
import SignupForm from "@/components/SignUpForm/SignupForm";

const meta: Meta<typeof SignupForm> = {
  title: "Components/SignupForm",
  component: SignupForm,
  argTypes: {
    // You can define argTypes here to customize the controls in Storybook
  },
};

export default meta;
type Story = StoryObj<typeof SignupForm>;

export const Primary: Story = {
  args: {
    // You can pass initial values for props here
  },
};
