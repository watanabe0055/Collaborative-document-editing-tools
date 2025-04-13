"use server";

import { SignupForm } from "@/components/SignUpForm/SignupForm";

export default async function Home() {
  return (
    <>
      {/* <LoginForm /> */}
      <SignupForm />
    </>
  );
}
