"use client";

import Link from "next/link";
import { useActionState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { formSubmit } from "@/components/LoginForm/action";

const initialState = {
  errors: undefined,
  message: undefined,
};

const Form = () => {
  const [state, formAction, isPending] = useActionState(
    async (prevState, formData) => {
      return await formSubmit(formData);
    },
    initialState
  );

  return (
    <form action={formAction} className="space-y-4">
      {state.errors && (
        <div>
          {state.errors.email && <p>{state.errors.email}</p>}
          {state.errors.password && <p>{state.errors.password}</p>}
        </div>
      )}
      <div className="space-y-2">
        <Label htmlFor="email">メールアドレス</Label>
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
          <Label htmlFor="password">パスワード</Label>
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
