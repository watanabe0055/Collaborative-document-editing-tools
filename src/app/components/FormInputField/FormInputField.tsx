import type { JSX } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import type { FormInputFieldProps } from "@/types/Form";

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
