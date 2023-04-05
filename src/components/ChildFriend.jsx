import { useContext } from "react";
import { AppContext } from "../App";

const ChildFriend = () => {
  const { gift } = useContext(AppContext);

  return <div className="w-40 h-40 bg-green-300">ChildFriend:{gift}</div>;
};
export default ChildFriend;
