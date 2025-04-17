import { createClient } from "@/app/utils/supabase/server";
import ChanelForm from "../ChanelForm/ChanelForm";

/**
 * チャンネル一覧を表示するコンポーネント
 * @returns {JSX.Element}
 */
const ChanelIndex = async () => {
  const supabase = await createClient();
  // セッション情報を取得
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  // ユーザー情報を取得
  const user = session?.user;
  const { data } = await supabase
    .from("user_chanel")
    .select(
      `
    chanel_id,
    channel_room (
      title,explanation,deleted_flag
    )
  `
    )
    .eq("user_id", user?.id || "");

  return (
    <>
      {data?.map((item) => (
        <div key={item.chanel_id}>{item.channel_room.title}</div>
      ))}
      <ChanelForm />
    </>
  );
};

export default ChanelIndex;
