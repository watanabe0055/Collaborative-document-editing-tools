"use client";

import { Label } from "../ui/label";
import { Input } from "../ui/input";
import clsx from "clsx";
import { Button } from "../ui/button";
import { useActionState } from "react";
import ErrorCard from "../ErrorCard/ErrorCard";
import type { ChannelFormState } from "@/types/Form";

const initialState: ChannelFormState = {
  errors: undefined,
  success: undefined,
};

const ChannelForm = ({
  formSubmit,
}: {
  formSubmit: (formData: FormData) => Promise<ChannelFormState>;
}) => {
  const [state, formAction, isPending] = useActionState(
    async (_prevState: ChannelFormState, formData: FormData) => {
      // サーバーアクションを呼び出し、状態を返す
      return await formSubmit(formData);
    },
    initialState
  );
  console.log(state);

  return (
    <form action={formAction} className={clsx("flex", "flex-col", "space-y-6")}>
      <ErrorCard errors={state.errors} />
      <div>
        <Label
          htmlFor="title"
          className={clsx(state.errors?.title && "text-red-500")}
        >
          チャンネル名
        </Label>
        <Input
          id="title"
          name="title"
          type="text"
          className={clsx("w-full")}
          defaultValue={state.data?.title}
          required
          placeholder="チャンネル名"
        />
      </div>
      <div>
        <Label
          htmlFor="explanation"
          className={clsx(state.errors?.explanation && "text-red-500")}
        >
          説明
        </Label>
        <Input
          id="explanation"
          name="explanation"
          type="text"
          className={clsx("w-full")}
          defaultValue={state.data?.explanation}
          required
          placeholder="説明"
        />
      </div>
      <Button type="submit">{isPending ? "作成中..." : "作成"}</Button>
    </form>
  );
};

export default ChannelForm;
