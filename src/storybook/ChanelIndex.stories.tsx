import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import ChanelIndex from "../app/components/ChanelIndex/ChanelIndex";
import { Channel } from "@/types/Form";

const meta: Meta<typeof ChanelIndex> = {
  title: "Components/ChanelIndex",
  component: ChanelIndex,
};

export default meta;

type Story = StoryFn<typeof ChanelIndex>;

export const Default: Story = (args) => (
  <ChanelIndex {...args} channels={dummyChannels} />
);

Default.args = {};

// ダミーデータ
const dummyChannels: Channel[] = [
  { chanel_id: 1, channel_room: { title: "チャンネル1" } },
  { chanel_id: 2, channel_room: { title: "チャンネル2" } },
  { chanel_id: 3, channel_room: { title: "チャンネル3" } },
];
