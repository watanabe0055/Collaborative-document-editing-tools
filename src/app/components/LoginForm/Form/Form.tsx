"use client";

import Link from "next/link";
import { useActionState } from "react";

import { Button } from "@/app/components/ui/button";
import type { LoginFormState } from "@/app/components/LoginForm/action";
import { Asterisk } from "lucide-react";
import ErrorCard from "@/app/components/ErrorCard/ErrorCard";
import FormInputField from "../../FormInputField/FormInputField";

/**
 * フォームの初期状態
 * @type {FormState}
 */
const initialState: LoginFormState = {
  errors: undefined,
  message: undefined,
};

/**
 * フォームコンポーネント
 * @param param0
 * @param param0.formSubmit - フォーム送信時の処理
 */
const Form = ({
  formSubmit,
}: {
  formSubmit: (formData: FormData) => Promise<LoginFormState>;
}) => {
  const [state, formAction, isPending] = useActionState(
    async (prevState: LoginFormState, formData: FormData) => {
      return await formSubmit(formData);
    },
    initialState
  );

  return (
    <form action={formAction} className="space-y-4">
      <ErrorCard errors={state.errors} />
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
          required
          autoComplete="current-password"
          label={"パスワード"}
        />
        <div className="flex items-center justify-between">
          <Link
            href="/forgot-password"
            className="text-sm text-primary hover:underline"
          >
            パスワードをお忘れですか？
          </Link>
        </div>
      </div>
      <Button type="submit" className="w-full" disabled={isPending}>
        {isPending ? "送信中..." : "ログイン"}
      </Button>
    </form>
  );
};

export default Form;
