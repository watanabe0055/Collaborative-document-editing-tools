import { loginScheme, type LoginScheme } from "@/app/zod/scheme";

const useAction = () => {
  const formSubmit = async (formData: FormData) => {
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
      console.error(validationResult.error.message);
      return;
    }

    const validatedData: LoginScheme = validationResult.data;
    // ログイン処理を続行
  };

  return { formSubmit };
};

export default useAction;
