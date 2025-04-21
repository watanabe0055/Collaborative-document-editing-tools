import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import ChanelForm from "../../app/components/ChanelForm/ChanelForm";

const meta: Meta<typeof ChanelForm> = {
  title: "Components/ChanelForm",
  component: ChanelForm,
};

export default meta;

type Story = StoryFn<typeof ChanelForm>;

const sleep = (msec: number) =>
  new Promise((resolve) => setTimeout(resolve, msec));

export const Default: Story = (args) => <ChanelForm {...args} />;

Default.args = {
  formSubmit: async (formData: FormData) => {
    await sleep(1000);
    const title = formData.get("title")?.toString();
    const explanation = formData.get("explanation")?.toString();
    if (title === "error") {
      return {
        errors: {
          title: ["Title is error"],
          explanation: ["Explanation is error"],
        },
      };
    }
    return {
      data: {
        title: title ?? "",
        explanation: explanation ?? "",
      },
      success: true,
    };
  },
};
