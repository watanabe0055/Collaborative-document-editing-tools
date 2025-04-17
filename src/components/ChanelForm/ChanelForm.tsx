import { createClient } from "@/app/utils/supabase/server";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import clsx from "clsx";
import { formSubmit } from "./action";
import { Button } from "../ui/button";

const ChanelForm = async () => {
  const supabase = await createClient();
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();
  const user = session?.user;

  return (
    <form action={formSubmit} className={clsx("max-w-md mx-auto")}>
      <Label htmlFor="title">チャンネル名</Label>
      <Input id="title" name="title" type="text" required />
      <Label htmlFor="explanation">説明</Label>
      <Input id="explanation" name="explanation" type="text" required />
      <Button type="submit">作成</Button>
    </form>
  );
};

export default ChanelForm;
