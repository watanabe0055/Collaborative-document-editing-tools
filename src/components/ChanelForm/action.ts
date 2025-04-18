import { createClient } from "@/app/utils/supabase/server";
import { chanelSchema } from "@/app/zod/scheme";

/**
 * チャンネル作成フォームのサブミット処理
 * @param {FormData} formData - フォームデータ
 * @returns {Promise<{ errors?: { title?: string[], explanation?: string[] }, success?: boolean }>}
 */
export const formSubmit = async (formData: FormData) => {
  "use server";
  const supabase = await createClient();

  // フォーム値取得
  const title = formData.get("title")?.toString() ?? "";
  const explanation = formData.get("explanation")?.toString() ?? "";

  // バリデーション実行
  const validation = chanelSchema.safeParse({ title, explanation });
  if (!validation.success) {
    return {
      data: { title, explanation },
      errors: validation.error.flatten().fieldErrors,
    };
  }

  // ユーザーID取得
  const { data: userData, error: userError } = await supabase.auth.getUser();
  if (userError || !userData?.user) {
    return {
      data: { title, explanation },
      errors: { title: ["ユーザー情報の取得に失敗しました"] },
    };
  }
  const userId = userData.user.id;

  // チャンネル作成
  const { data: channelData, error: channelError } = await supabase
    .from("channel_room")
    .insert({ title, explanation })
    .select("id")
    .single();

  if (channelError || !channelData?.id) {
    return {
      data: { title, explanation },
      errors: { title: ["チャンネルの作成に失敗しました"] },
    };
  }
  const channelId = channelData.id;

  // user_chanelテーブルに登録
  const { error: userChanelError } = await supabase
    .from("user_chanel")
    .insert({ user_id: userId, chanel_id: channelId });

  if (userChanelError) {
    return {
      data: { title, explanation },
      errors: { title: ["ユーザーとチャンネルの紐付けに失敗しました"] },
    };
  }

  // 正常終了
  return { success: true };
};
