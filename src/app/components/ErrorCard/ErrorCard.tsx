import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "../ui/alert";

/**
 * バリデーションエラーやAPIエラーなどを汎用的に表示するカードコンポーネント
 * @param {object} props
 * @param {Record<string, string | string[] | undefined> | undefined} props.errors - エラーオブジェクト。キーは任意、値はstringまたはstring[]。
 * @returns {JSX.Element | null} エラーがなければnullを返す
 */
const ErrorCard = ({
  errors,
}: {
  errors?: Record<string, string | string[] | undefined>;
}) => {
  if (!errors) return null;

  // エラーが1つもなければ何も表示しない
  const errorEntries = Object.entries(errors).filter(
    ([, value]) =>
      value !== undefined &&
      (typeof value === "string" ? value.length > 0 : value.length > 0)
  );
  if (errorEntries.length === 0) return null;

  return (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertDescription>
        {errorEntries.map(([key, value]) =>
          Array.isArray(value) ? (
            value.map((msg) => <p key={`${key}-${msg}`}>{msg}</p>)
          ) : (
            <p key={key}>{value}</p>
          )
        )}
      </AlertDescription>
    </Alert>
  );
};

export default ErrorCard;
