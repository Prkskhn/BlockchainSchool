import SuperGrandChild from "./SuperGrandChild";

const GrandChild = ({ gift, setGift }) => {
  return (
    <div>
      <div className="w-40 h-40 bg-blue-300">GrandChild: {gift}</div>
      <SuperGrandChild gift={gift} setGift={setGift} />
    </div>
  );
};
export default GrandChild;
