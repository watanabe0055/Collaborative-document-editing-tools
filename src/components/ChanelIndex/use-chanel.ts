/**
 * @fileoverview
 * Supabaseからユーザーに紐づくチャンネル一覧を取得し、リアルタイムで監視するカスタムフック
 *
 * - DB: user_chanel → channel_room
 * - セッション取得・ユーザーID取得も内部で実施
 * - イミュータブル・型安全・命名規則遵守
 */

import { useEffect, useState } from "react";
import { createClient } from "@/app/utils/supabase/client";
import type { Database } from "@/supabase/generated-schema";

/**
 * チャンネル情報の型
 */
export type ChannelRoom = Readonly<
  Database["public"]["Tables"]["channel_room"]["Row"]
>;

/**
 * user_chanelテーブルの型
 */
type UserChanel = {
  readonly chanel_id: number;
  readonly channel_room: ChannelRoom;
};

/**
 * ユーザーのチャンネル一覧をリアルタイムで取得するカスタムフック
 * @returns {UserChanel[] | null} チャンネル一覧
 */
export const useChanelIndex = (): UserChanel[] | null => {
  const [channels, setChannels] = useState<UserChanel[] | null>(null);

  useEffect(() => {
    const supabase = createClient();

    let subscription: ReturnType<typeof supabase.channel> | null = null;

    /**
     * DBからチャンネル一覧を取得
     */
    const fetchChannels = async () => {
      // セッション取得
      const {
        data: { session },
      } = await supabase.auth.getSession();
      const user = session?.user;
      if (!user?.id) {
        setChannels([]);
        return;
      }

      // チャンネル一覧取得
      const { data, error } = await supabase
        .from("user_chanel")
        .select(
          `
          chanel_id,
          channel_room (
            id, title, explanation, deleted_flag, created_at, updated_at
          )
        `
        )
        .eq("user_id", user.id);

      if (error) {
        // エラー時は空配列
        setChannels([]);
        return;
      }

      // イミュータブルなデータに変換
      const immutableData: UserChanel[] = (data ?? []).map((item) => ({
        chanel_id: item.chanel_id,
        channel_room: {
          id: item.channel_room.id,
          title: item.channel_room.title,
          explanation: item.channel_room.explanation,
          deleted_flag: item.channel_room.deleted_flag,
          created_at: item.channel_room.created_at,
          updated_at: item.channel_room.updated_at,
        },
      }));
      setChannels(immutableData);
    };

    // 初回取得
    fetchChannels();

    // リアルタイム購読
    subscription = supabase
      .channel("user_chanel_realtime")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "user_chanel",
        },
        () => {
          fetchChannels();
        }
      )
      .subscribe();

    // クリーンアップ
    return () => {
      if (subscription) {
        supabase.removeChannel(subscription);
      }
    };
  }, []);

  return channels;
};
