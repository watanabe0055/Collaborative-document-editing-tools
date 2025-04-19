"use client";

import { Label } from "../ui/label";
import { Input } from "../ui/input";
import clsx from "clsx";
import { Button } from "../ui/button";
import { useActionState } from "react";
import ErrorCard from "../ErrorCard/ErrorCard";
import type { ChanelFormState } from "@/types/Form";

const initialState: ChanelFormState = {
  errors: undefined,
  success: undefined,
};

const ChanelForm = ({
  formSubmit,
}: {
  formSubmit: (formData: FormData) => Promise<ChanelFormState>;
}) => {
  const [state, formAction, isPending] = useActionState(
    async (_prevState: ChanelFormState, formData: FormData) => {
      // サーバーアクションを呼び出し、状態を返す
      return await formSubmit(formData);
    },
    initialState
  );
  console.log(state);

  return (
    <form action={formAction} className={clsx("max-w-md mx-auto")}>
      <ErrorCard errors={state.errors} />
      <Label htmlFor="title">チャンネル名</Label>
      <Input
        id="title"
        name="title"
        type="text"
        defaultValue={state.data?.title}
      />
      <Label htmlFor="explanation">説明</Label>
      <Input
        id="explanation"
        name="explanation"
        type="text"
        defaultValue={state.data?.explanation}
      />
      <Button type="submit">{isPending ? "作成中..." : "作成"}</Button>
    </form>
  );
};

export default ChanelForm;
