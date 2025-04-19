"use client";

import { Button } from "@/app/components/ui/button";
import { LogOut } from "lucide-react";
import { LogoutSubmit } from "./action";
import { useTransition } from "react";

interface LogoutButtonProps {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
}

export default function LogoutButton({
  variant = "ghost",
  size = "default",
  className = "",
}: LogoutButtonProps) {
  const [isPending, startTransition] = useTransition();
  async function formAction() {
    startTransition(async () => {
      // サーバーアクションを呼び出すか、fetchを使った非同期処理
      await LogoutSubmit();
    });
  }
  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      onClick={formAction}
      disabled={isPending}
    >
      {size === "icon" ? (
        <LogOut className="h-4 w-4" />
      ) : (
        <>
          <LogOut className="h-4 w-4 mr-2" />
          {isPending ? "ログアウト中..." : "ログアウト"}
        </>
      )}
    </Button>
  );
}
