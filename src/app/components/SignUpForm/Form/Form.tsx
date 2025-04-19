"use client";

import { Button } from "@/app/components/ui/button";
import { X } from "lucide-react";
import { useActionState, useMemo, useState } from "react";
import type { SignUpFormState } from "../action";
import { passwordMatchSchema } from "@/app/zod/scheme";
import ErrorCard from "@/app/components/ErrorCard/ErrorCard";
import FormInputField from "../../FormInputField/FormInputField";

const initialState: SignUpFormState = {
  errors: undefined,
  message: undefined,
};

const Form = ({
  formSubmit,
}: {
  formSubmit: (formData: FormData) => Promise<SignUpFormState>;
}) => {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const passwordValidationErrors = useMemo(() => {
    if (password && passwordConfirm) {
      const matchValidation = passwordMatchSchema.safeParse({
        password,
        passwordConfirm,
      });

      if (!matchValidation.success) {
        const errors = matchValidation.error.flatten().fieldErrors;
        return errors;
      }
    }
    return null;
  }, [password, passwordConfirm]);

  const [state, formAction, isPending] = useActionState(
    async (prevState: SignUpFormState, formData: FormData) => {
      return await formSubmit(formData);
    },
    initialState
  );

  return (
    <form action={formAction} className="space-y-4">
      <ErrorCard errors={state.errors} />
      <div className="space-y-2">
        <FormInputField
          id="username"
          name="username"
          placeholder="johndoe"
          required
          autoComplete="username"
          label={"ユーザー名"}
        />
      </div>
      <div className="space-y-2">
        <FormInputField
          id="email"
          name="email"
          type="email"
          placeholder="name@example.com"
          required
          autoComplete="email"
          label={"メールアドレス"}
        />
      </div>
      <div className="space-y-2">
        <FormInputField
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="new-password"
          label={"パスワード"}
        />
      </div>
      <div className="space-y-2">
        <FormInputField
          id="passwordConfirm"
          name="passwordConfirm"
          type="password"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          required
          autoComplete="new-password"
          label={"パスワード（確認）"}
        />

        {passwordValidationErrors?.passwordConfirm?.map((error) => (
          <div key={error} className="flex items-center text-sm mt-2">
            <X className="h-4 w-4 mr-2 text-red-500" />
            <span className="text-red-500">{error}</span>
          </div>
        ))}
      </div>
      <Button type="submit" className="w-full" disabled={isPending}>
        {isPending ? "アカウント作成中..." : "アカウントを作成"}
      </Button>
    </form>
  );
};

export default Form;
