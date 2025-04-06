"use server";

import { loginScheme } from "@/app/zod/scheme";

export const formSubmit = async (formData: FormData) => {
  const email = formData.get("email");
  const password = formData.get("password");

  if (typeof email !== "string" || typeof password !== "string") {
    // エラーを処理する（例：エラーステートを設定）
    console.error("メールアドレスとパスワードは文字列である必要があります");
    return;
  }

  const validationResult = loginScheme.safeParse({ email, password });
  if (!validationResult.success) {
    // エラーを処理する（例：エラーステートを設定）
    console.error(validationResult.error.flatten().fieldErrors);
    return;
  }

  return;
};
