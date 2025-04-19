import { formSubmit } from "@/app/components/ChanelForm/action";
import ChanelForm from "@/app/components/ChanelForm/ChanelForm";
import ChanelIndex from "@/app/components/ChanelIndex/ChanelIndex";

const ChanelComponent = () => {
  return (
    <>
      <ChanelIndex />
      <ChanelForm formSubmit={formSubmit} />
    </>
  );
};

export default ChanelComponent;
