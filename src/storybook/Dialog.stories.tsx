import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { DialogCloseButton } from "../app/components/Dialog/Dialog";

const meta: Meta<typeof DialogCloseButton> = {
  title: "Components/Dialog",
  component: DialogCloseButton,
};

export default meta;

type Story = StoryFn<typeof DialogCloseButton>;

export const Default: Story = (args) => (
  <DialogCloseButton {...args}>ダイアログの中身</DialogCloseButton>
);

Default.args = {
  title: "ダイアログのタイトル",
  dialogTriggerText: "ダイアログを開く",
  description: "ダイアログの説明",
  isShowHeader: true,
};
