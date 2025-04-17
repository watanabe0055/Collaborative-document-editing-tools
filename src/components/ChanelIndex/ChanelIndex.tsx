"use server";
import { createClient } from "@/app/utils/supabase/server";

/**
 * チャンネル一覧を表示するコンポーネント
 * @returns {JSX.Element}
 */
const ChanelIndex = async () => {
  const supabase = createClient();
  const { data, error } = await (await supabase)
    .from("channel_room")
    .select("*");
  console.log("data:", data);
  console.log("error:", error);
  return <div>ChanelIndex</div>;
};

export default ChanelIndex;
