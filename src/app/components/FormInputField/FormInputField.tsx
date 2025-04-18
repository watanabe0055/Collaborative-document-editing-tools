import type { JSX } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

/**
 * フォーム用の共通インプットフィールドコンポーネント
 *
 * @param {FormInputFieldProps} props - インプットフィールドのプロパティ
 * @returns {JSX.Element} インプットフィールド
 */
const FormInputField = ({
  id,
  name,
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
  autoComplete,
  error,
}: FormInputFieldProps): JSX.Element => (
  <div className="space-y-2">
    <Label htmlFor={id}>{label}</Label>
    <Input
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      autoComplete={autoComplete}
    />
    {error && <p className="text-red-500 text-xs">{error}</p>}
  </div>
);

export default FormInputField;

/**
 * フォームインプットフィールドのプロパティ型
 */
export type FormInputFieldProps = {
  /** input要素のid属性 */
  readonly id: string;
  /** input要素のname属性 */
  readonly name: string;
  /** ラベルとして表示するテキスト */
  readonly label: string;
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
