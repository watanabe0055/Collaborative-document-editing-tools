"use client";

import React from "react";
import { Channel } from "@/types/Form";
// import { useChanelIndex } from "./use-chanel";

/**
 * チャンネル一覧を表示するコンポーネント
 * @returns {JSX.Element}
 */
const ChanelIndex = ({ channels }: { channels: Channel[] }) => {
  // const channels = useChanelIndex();

  if (!channels) return <div>読み込み中...</div>;
  if (channels.length === 0) return <div>チャンネルがありません</div>;

  return (
    <div>
      {channels.map((item) => (
        <div key={item.chanel_id}>{item.channel_room.title}</div>
      ))}
    </div>
  );
};

export default ChanelIndex;
