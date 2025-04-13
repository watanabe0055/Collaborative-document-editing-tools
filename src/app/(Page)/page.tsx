"use server";

import { LoginForm } from "@/components/LoginForm/LoginForm";
import { LogoutButton } from "../../components/LogoutButton/LogoutButton";
import { SignupForm } from "@/components/SignUpForm/SignupForm";

export default async function Home() {
  return (
    <>
      <LogoutButton />
      {/* <LoginForm /> */}
      {/* <SignupForm /> */}
    </>
  );
}
