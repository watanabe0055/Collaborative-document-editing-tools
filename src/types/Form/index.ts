/**
 * チャンネルフォームの状態型
 */
export type ChanelFormState = {
  errors?: { title?: string[]; explanation?: string[] };
  success?: boolean;
  data?: { title: string; explanation: string };
};
