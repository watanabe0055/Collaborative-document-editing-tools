"use server";

import { LoginForm } from "@/components/LoginForm/LoginForm";
import { SignupForm } from "@/components/SignUpForm/SignupForm";

export default async function Home() {
  return (
    <>
      {/* <LogoutButton /> */}
      {/* <LoginForm /> */}
      <SignupForm />
    </>
  );
}
