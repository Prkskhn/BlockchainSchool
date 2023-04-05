import UltraSuperGrandChild from "./UltraSuperGrandChild";

const SuperGrandChild = ({ gift, setGift }) => {
  return (
    <div>
      <div className="w-40 h-40 bg-yellow-300">SuperGrandChild: {gift}</div>
      <UltraSuperGrandChild gift={gift} setGift={setGift} />
    </div>
  );
};
export default SuperGrandChild;
