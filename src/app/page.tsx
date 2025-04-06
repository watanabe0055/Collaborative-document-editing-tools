"use server";

import { LoginForm } from "@/components/LoginForm/LoginForm";
import { LogoutButton } from "../components/LogoutButton";
import { SignupForm } from "@/components/SignupForm";

export default async function Home() {
  return (
    <>
      {/* <LogoutButton /> */}
      <LoginForm />
      {/* <SignupForm /> */}
    </>
  );
}
