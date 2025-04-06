"use client";

import Link from "next/link";
import { useActionState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { LoginFormState } from "@/components/LoginForm/action";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, Asterisk } from "lucide-react";

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
      {state.errors && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            {state.errors.email && <p>{state.errors.email}</p>}
            {state.errors.password && Array.isArray(state.errors.password)
              ? state.errors.password.map((error) => <p key={error}>{error}</p>)
              : state.errors.password && <p>{state.errors.password}</p>}
          </AlertDescription>
        </Alert>
      )}
      <div className="space-y-2">
        <Label htmlFor="email" className="gap-0.5">
          <Asterisk />
          メールアドレス
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="name@example.com"
          required
          autoComplete="email"
        />
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="password" className="gap-0.5">
            <Asterisk />
            パスワード
          </Label>
          <Link
            href="/forgot-password"
            className="text-sm text-primary hover:underline"
          >
            パスワードをお忘れですか？
          </Link>
        </div>
        <Input
          id="password"
          name="password"
          type="password"
          required
          autoComplete="current-password"
        />
      </div>
      <Button type="submit" className="w-full" disabled={isPending}>
        {isPending ? "送信中..." : "ログイン"}
      </Button>
    </form>
  );
};

export default Form;
