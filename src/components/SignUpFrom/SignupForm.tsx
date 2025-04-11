"use client";

import type React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Link from "next/link";
import Form from "./Form/Form";
import { formSubmit } from "./action";

export function SignupForm() {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">アカウント作成</CardTitle>
        <CardDescription>
          新しいアカウントを作成するために詳細を入力してください
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form formSubmit={formSubmit} />
      </CardContent>
      <CardFooter className="flex justify-center">
        <p className="text-sm text-muted-foreground">
          すでにアカウントをお持ちですか？{" "}
          <Link href="/login" className="text-primary hover:underline">
            ログイン
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}
