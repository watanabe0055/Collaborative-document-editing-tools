"use server";

import { createClient } from "@/app/utils/supabase/server";
import { signupScheme } from "@/app/zod/scheme";

export type SignUpFormState = {
  errors?: {
    username?: string[];
    email?: string[];
    password?: string[];
    passwordConfirm?: string[];
  };
  message?: string;
};

export const formSubmit = async (
  formData: FormData
): Promise<SignUpFormState> => {
  const supabase = await createClient();

  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");
  const passwordConfirm = formData.get("passwordConfirm");

  const validationResult = signupScheme.safeParse({
    username,
    email,
    password,
    passwordConfirm,
  });
  if (!validationResult.success) {
    const errors = validationResult.error.flatten().fieldErrors;
    console.log(errors);

    return {
      errors: {
        username: errors.username,
        email: errors.email,
        password: errors.password,
        passwordConfirm: errors.passwordConfirm,
      },
    };
  }

  const { error } = await supabase.auth.signUp({
    email: email?.toString() ?? "",
    password: password?.toString() ?? "",
  });
  console.log(error);
  if (error) {
    console.error(error);
  }
  return {};
};
