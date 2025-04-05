import { LoginForm } from "@/components/LoginForm";
import { LogoutButton } from "../components/LogoutButton";

export default function Home() {
  return (
    <>
      <LogoutButton />
      <LoginForm />
    </>
  );
}
