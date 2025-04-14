"use server";

import { createClient } from "@/app/utils/supabase/server";
import { loginScheme } from "@/app/zod/scheme";
import { redirect } from "next/navigation";

export type LoginFormState = {
  errors?: {
    email?: string[];
    password?: string[];
  };
  message?: string;
};

export const formSubmit = async (
  formData: FormData
): Promise<LoginFormState | never> => {
  const supabase = await createClient();

  const email = formData.get("email");
  const password = formData.get("password");

  const validationResult = loginScheme.safeParse({ email, password });
  if (!validationResult.success) {
    const errors = validationResult.error.flatten().fieldErrors;
    console.log(errors);

    return {
      errors: {
        email: errors.email,
        password: errors.password,
      },
    };
  }

  const { error } = await supabase.auth.signInWithPassword({
    email: email?.toString() ?? "",
    password: password?.toString() ?? "",
  });
  if (error) {
    console.error(error);
    return {
      message: error.message,
    };
  }

  // このコードは実行されませんが、型チェックを満たす
  const response = {} as LoginFormState;
  redirect("/");
  return response;
};
