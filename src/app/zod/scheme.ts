import { z } from "zod";

/**
 * パスワードのバリデーション要件を定義するZodスキーマ
 *
 * @description 以下の要件を満たすパスワードを検証します：
 * - 8文字以上
 * - 大文字を1文字以上含む
 * - 数字を1文字以上含む
 * - 特殊文字を1文字以上含む
 */
export const passwordSchema = z
  .string()
  .min(8, { message: "8文字以上のパスワードが必要です" })
  .refine((value) => /[A-Z]/.test(value), {
    message: "大文字を1文字以上含める必要があります",
  })
  .refine((value) => /[0-9]/.test(value), {
    message: "数字を1文字以上含める必要があります",
  })
  .refine((value) => /[^A-Za-z0-9]/.test(value), {
    message: "特殊文字を1文字以上含める必要があります",
  });

/**
 * サインアップのバリデーション要件を定義するZodスキーマ
 *
 * @description 以下の要件を満たすデータを検証します：
 * - ユーザーネーム: 3文字以上30文字以下
 * - メールアドレス: 有効なメールアドレス
 * - パスワード: 8文字以上
 * - パスワード（確認）: 8文字以上
 * - パスワードとパスワード（確認）が一致する
 */
export const signupScheme = z
  .object({
    username: z
      .string()
      .min(3, { message: "3文字以上のユーザー名が必要です" })
      .max(30, { message: "30文字以下のユーザー名が必要です" }),
    email: z
      .string()
      .email({ message: "メールアドレスの形式が正しくありません" }),
    password: passwordSchema,
    passwordConfirm: passwordSchema,
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "パスワードが一致しません",
    path: ["passwordConfirm"],
  });
/**
 * サインアップのバリデーション要件を満たすデータの型
 *
 * @description サインアップスキーマの型推論結果
 */
export type SignupScheme = z.infer<typeof signupScheme>;

/**
 * ログインのバリデーション要件を定義するZodスキーマ
 *
 * @description 以下の要件を満たすデータを検証します：
 * - メールアドレス: 有効なメールアドレス
 * - パスワード: 8文字以上
 */
export const loginScheme = z.object({
  email: z
    .string()
    .email({ message: "メールアドレスの形式が正しくありません" }),
  password: passwordSchema,
});

/**
 * ログインのバリデーション要件を満たすデータの型
 *
 * @description ログインスキーマの型推論結果
 */
export type LoginScheme = z.infer<typeof loginScheme>;

/**
 * パスワード一致チェック専用のスキーマ
 *
 * @description 以下の要件を満たすデータを検証します：
 * - パスワード: 8文字以上
 * - パスワード（確認）: 8文字以上
 * - パスワードとパスワード（確認）が一致する
 */
export const passwordMatchSchema = z
  .object({
    password: passwordSchema,
    passwordConfirm: passwordSchema,
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "パスワードが一致しません",
    path: ["passwordConfirm"],
  });

// バリデーションスキーマ
export const chanelSchema = z.object({
  title: z.string().min(1, "タイトルは1文字以上で入力してください"),
  explanation: z.string().min(1, "説明は1文字以上で入力してください"),
});
