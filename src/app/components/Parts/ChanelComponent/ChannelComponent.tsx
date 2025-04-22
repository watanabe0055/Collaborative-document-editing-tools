import { formSubmit } from "@/app/components/ChannelForm/action";
import ChannelForm from "@/app/components/ChannelForm/ChannelForm";
import ChannelIndex from "@/app/components/ChannelIndex/ChannelIndex";
import { DialogCloseButton } from "../../Dialog/Dialog";

const ChannelComponent = () => {
  return (
    <>
      <ChannelIndex />
      <DialogCloseButton
        dialogTriggerText="チャンネル作成"
        title="チャンネル作成"
        description="新しいチャンネルを作成してください"
      >
        <ChannelForm formSubmit={formSubmit} />
      </DialogCloseButton>
    </>
  );
};

export default ChannelComponent;
