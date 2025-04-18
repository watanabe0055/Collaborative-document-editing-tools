import { formSubmit } from "@/components/ChanelForm/action";
import ChanelForm from "@/components/ChanelForm/ChanelForm";
import ChanelIndex from "@/components/ChanelIndex/ChanelIndex";

const ChanelComponent = () => {
  return (
    <>
      <ChanelIndex />
      <ChanelForm formSubmit={formSubmit} />
    </>
  );
};

export default ChanelComponent;
