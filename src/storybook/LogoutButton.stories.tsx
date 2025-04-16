import type { Meta, StoryObj } from "@storybook/react";
import LogoutButton from "@/components/LogoutButton/LogoutButton";

const meta: Meta<typeof LogoutButton> = {
  title: "Components/LogoutButton",
  component: LogoutButton,
  argTypes: {
    // You can define argTypes here to customize the controls in Storybook
  },
};

export default meta;
type Story = StoryObj<typeof LogoutButton>;

export const Primary: Story = {
  args: {
    // You can pass initial values for props here
  },
};
