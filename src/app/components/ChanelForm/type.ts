/**
 * チャンネル作成フォームのサブミット時のレスポンス型
 */
export type FormSubmitResponse = {
  readonly data?: {
    readonly title: string;
    readonly explanation: string;
  };
  readonly errors?: {
    readonly title?: string[];
    readonly explanation?: string[];
  };
  readonly success?: boolean;
};
