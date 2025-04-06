"use server";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Link from "next/link";
import Form from "../Form/Form";
import { formSubmit } from "./action";

export async function LoginForm() {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">ログイン</CardTitle>
        <CardDescription>
          メールアドレスとパスワードを入力してアカウントにアクセスしてください
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form formSubmit={formSubmit} />
      </CardContent>
      <CardFooter className="flex justify-center">
        <p className="text-sm text-muted-foreground">
          アカウントをお持ちでないですか？{" "}
          <Link href="/signup" className="text-primary hover:underline">
            新規登録
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}
