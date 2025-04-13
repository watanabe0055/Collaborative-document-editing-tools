"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, X } from "lucide-react";
import { useActionState, useMemo, useState } from "react";
import type { SignUpFormState } from "../action";
import { passwordMatchSchema } from "@/app/zod/scheme";

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
      {state.errors && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            {state.errors.username && <p>{state.errors.username}</p>}
            {state.errors.email && <p>{state.errors.email}</p>}
            {state.errors.password && Array.isArray(state.errors.password)
              ? state.errors.password.map((error) => <p key={error}>{error}</p>)
              : state.errors.password && <p>{state.errors.password}</p>}
          </AlertDescription>
        </Alert>
      )}
      <div className="space-y-2">
        <Label htmlFor="username">ユーザー名</Label>
        <Input
          id="username"
          name="username"
          placeholder="johndoe"
          required
          autoComplete="username"
        />
      </div>
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
        <Label htmlFor="password">パスワード</Label>
        <Input
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="new-password"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="passwordConfirm">パスワード（確認）</Label>
        <Input
          id="passwordConfirm"
          name="passwordConfirm"
          type="password"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          required
          autoComplete="new-password"
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
