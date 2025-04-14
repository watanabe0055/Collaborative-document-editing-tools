import { createClient } from "@/app/utils/supabase/client";
import { redirect } from "next/navigation";

export const LogoutSubmit = async () => {
  const supabase = await createClient();

  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error(error);
  }
  return redirect("/login");
};
