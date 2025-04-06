import { z } from "zod";
/**
 * サインアップのバリデーション要件を定義するZodスキーマ
 *
 * @description 以下の要件を満たすデータを検証します：
 * - ユーザーネーム: 3文字以上30文字以下
 * - メールアドレス: 有効なメールアドレス
 * - パスワード: 8文字以上
 * - パスワード（確認）: 8文字以上
 */
export const signupScheme = z.object({
  username: z.string().min(3).max(30),
  email: z.string().email(),
  password: z.string().min(8),
  passwordConfirm: z.string().min(8),
});

/**
 * サインアップのバリデーション要件を満たすデータの型
 *
 * @description サインアップスキーマの型推論結果
 */
export type SignupScheme = z.infer<typeof signupScheme>;

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
 * ログインのバリデーション要件を定義するZodスキーマ
 *
 * @description 以下の要件を満たすデータを検証します：
 * - メールアドレス: 有効なメールアドレス
 * - パスワード: 8文字以上
 */
export const loginScheme = z.object({
  email: z.string().email(),
  password: passwordSchema,
});

/**
 * ログインのバリデーション要件を満たすデータの型
 *
 * @description ログインスキーマの型推論結果
 */
export type LoginScheme = z.infer<typeof loginScheme>;
