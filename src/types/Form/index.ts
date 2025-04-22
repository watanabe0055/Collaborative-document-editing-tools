/**
 * チャンネルフォームの状態型
 */
export type ChannelFormState = {
  errors?: { title?: string[]; explanation?: string[] };
  success?: boolean;
  data?: { title: string; explanation: string };
};

/**
 * フォームインプットフィールドのプロパティ型
 */
export type FormInputFieldProps = {
  /** input要素のid属性 */
  readonly id: string;
  /** input要素のname属性 */
  readonly name: string;
  /** ラベルとして表示するテキスト */
  readonly label: string | React.ReactNode;
  /** input要素のtype属性 */
  readonly type?: string;
  /** input要素の値 */
  readonly value?: string;
  /** 値が変化したときのコールバック */
  readonly onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** プレースホルダー */
  readonly placeholder?: string;
  /** 必須フィールドかどうか */
  readonly required?: boolean;
  /** オートコンプリート属性 */
  readonly autoComplete?: string;
  /** バリデーションエラー時のメッセージ */
  readonly error?: string;
};
