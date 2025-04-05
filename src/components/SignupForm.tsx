"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, Check, X } from "lucide-react";
import Link from "next/link";

export function SignupForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const passwordRequirements = [
    { text: "8文字以上", test: (p: string) => p.length >= 8 },
    { text: "大文字を1文字以上", test: (p: string) => /[A-Z]/.test(p) },
    { text: "数字を1文字以上", test: (p: string) => /[0-9]/.test(p) },
    {
      text: "特殊文字を1文字以上",
      test: (p: string) => /[^A-Za-z0-9]/.test(p),
    },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const username = formData.get("username") as string;
    const email = formData.get("email") as string;

    // Validate password match
    if (password !== passwordConfirm) {
      setError("パスワードが一致しません");
      setIsLoading(false);
      return;
    }

    // Validate password requirements
    const allRequirementsMet = passwordRequirements.every((req) =>
      req.test(password)
    );
    if (!allRequirementsMet) {
      setError("パスワードがすべての要件を満たしていません");
      setIsLoading(false);
      return;
    }

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // In a real app, you would call your registration API here
      // const response = await signUp(username, email, password)

      // Simulate successful signup
      console.log("Signed up with:", username, email, password);

      // Redirect to login or dashboard
      // router.push("/login")
    } catch (err) {
      setError("アカウントの作成に失敗しました。もう一度お試しください。");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">アカウント作成</CardTitle>
        <CardDescription>
          新しいアカウントを作成するために詳細を入力してください
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
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
            <div className="space-y-1 mt-2">
              {passwordRequirements.map((req, index) => (
                <div key={index} className="flex items-center text-sm">
                  {req.test(password) ? (
                    <Check className="h-4 w-4 mr-2 text-green-500" />
                  ) : (
                    <X className="h-4 w-4 mr-2 text-gray-400" />
                  )}
                  <span
                    className={
                      req.test(password) ? "text-green-500" : "text-gray-500"
                    }
                  >
                    {req.text}
                  </span>
                </div>
              ))}
            </div>
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
            {password && passwordConfirm && (
              <div className="flex items-center text-sm mt-2">
                {password === passwordConfirm ? (
                  <>
                    <Check className="h-4 w-4 mr-2 text-green-500" />
                    <span className="text-green-500">
                      パスワードが一致しています
                    </span>
                  </>
                ) : (
                  <>
                    <X className="h-4 w-4 mr-2 text-red-500" />
                    <span className="text-red-500">
                      パスワードが一致していません
                    </span>
                  </>
                )}
              </div>
            )}
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "アカウント作成中..." : "アカウントを作成"}
          </Button>
        </form>
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
