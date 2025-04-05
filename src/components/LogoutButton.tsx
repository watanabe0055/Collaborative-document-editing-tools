"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

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

export function LogoutButton({
  variant = "ghost",
  size = "default",
  className = "",
}: LogoutButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = async () => {
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // In a real app, you would call your logout API here
      // await signOut()

      // Redirect to login page
      // router.push("/login")

      console.log("User logged out");
    } catch (error) {
      console.error("Logout failed", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      onClick={handleLogout}
      disabled={isLoading}
    >
      {size === "icon" ? (
        <LogOut className="h-4 w-4" />
      ) : (
        <>
          <LogOut className="h-4 w-4 mr-2" />
          {isLoading ? "ログアウト中..." : "ログアウト"}
        </>
      )}
    </Button>
  );
}
