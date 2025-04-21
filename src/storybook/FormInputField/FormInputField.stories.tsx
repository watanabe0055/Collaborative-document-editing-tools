import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import FormInputField from "../../app/components/FormInputField/FormInputField";

const meta: Meta<typeof FormInputField> = {
  title: "Components/FormInputField",
  component: FormInputField,
};

export default meta;

type Story = StoryFn<typeof FormInputField>;

export const Default: Story = (args) => <FormInputField {...args} />;

Default.args = {
  id: "name",
  name: "name",
  label: "Name",
  type: "text",
  placeholder: "Enter your name",
  required: true,
  autoComplete: "name",
  error: "This field is required",
  value: "",
  onChange: () => {},
};
