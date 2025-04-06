"use server";

import { loginScheme } from "@/app/zod/scheme";

export type LoginFormState = {
  errors?: {
    email?: string[];
    password?: string[];
  };
  message?: string;
};

export const formSubmit = async (
  formData: FormData
): Promise<LoginFormState> => {
  const email = formData.get("email");
  const password = formData.get("password");

  const validationResult = loginScheme.safeParse({ email, password });
  if (!validationResult.success) {
    const errors = validationResult.error.flatten().fieldErrors;

    return {
      errors: {
        email: errors.email,
        password: errors.password,
      },
    };
  }

  return {};
};
