"use server";

import ChanelComponent from "@/components/Parts/ChanelComponent/ChanelComponent";
import LogoutButton from "../../components/LogoutButton/LogoutButton";
// import { createClient } from "@/app/utils/supabase/server";

/**
 *
 * TODO: formSubmitの移動
 */
export default async function Home() {
  // const supabase = await createClient();
  // const {
  //   data: { session },
  //   error,
  // } = await supabase.auth.getSession();
  // const user = session?.user;

  return (
    <>
      <LogoutButton />
      <ChanelComponent />
    </>
  );
}
