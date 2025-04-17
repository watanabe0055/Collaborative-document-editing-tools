"use server";

import ChanelIndex from "@/components/ChanelIndex/ChanelIndex";
import LogoutButton from "../../components/LogoutButton/LogoutButton";
import ChanelForm from "@/components/ChanelForm/ChanelForm";
import { formSubmit } from "@/components/ChanelForm/action";
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
      <ChanelIndex />
      <ChanelForm formSubmit={formSubmit} />
    </>
  );
}
