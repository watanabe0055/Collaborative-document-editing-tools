import { formSubmit } from "@/app/components/ChanelForm/action";
import ChanelForm from "@/app/components/ChanelForm/ChanelForm";
import ChanelIndex from "@/app/components/ChanelIndex/ChanelIndex";
import { DialogCloseButton } from "../../Dialog/Dialog";

const ChanelComponent = () => {
  return (
    <>
      <ChanelIndex />
      <DialogCloseButton
        dialogTriggerText="チャンネル作成"
        title="チャンネル作成"
        description="新しいチャンネルを作成してください"
      >
        <ChanelForm formSubmit={formSubmit} />
      </DialogCloseButton>
    </>
  );
};

export default ChanelComponent;
