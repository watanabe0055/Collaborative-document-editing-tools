"use server";

import ChanelIndex from "@/components/ChanelIndex/ChanelIndex";
import LogoutButton from "../../components/LogoutButton/LogoutButton";

export default async function Home() {
  return (
    <>
      <LogoutButton />
      {/* <LoginForm /> */}
      {/* <SignupForm /> */}
      <ChanelIndex />
    </>
  );
}
