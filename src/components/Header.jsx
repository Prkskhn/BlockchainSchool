import { AiFillBug } from "react-icons/ai";
import { RiWallet2Fill } from "react-icons/ri";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = ({ account, setAccount }) => {
  const onClickAccount = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <header className="max-w-screen-xl mx-auto p-4 flex justify-between items-center font-bold ">
      <Link to={"/"}>
        <div className="flex justify-center items-center text-main">
          <AiFillBug size={28} />
          <div className="ml-1 text-xl">Ble-chess</div>
        </div>
      </Link>
      <div>
        {account ? (
          <div className="flex items-center p-2 bg-gray-800 rounded-full">
            <div className="bg-main w-6 h-6 rounded-full flex justify-center items-center">
              <BsCheckCircleFill />
            </div>
            <div className="ml-1">
              {account.substring(0, 4)}...
              {account.substring(account.length - 4)}
            </div>
          </div>
        ) : (
          <button
            onClick={onClickAccount}
            className="flex items-center p-2 bg-gray-800 rounded-full"
          >
            <div className="bg-main w-6 h-6 rounded-full flex justify-center items-center">
              <RiWallet2Fill />
            </div>
            <div className="ml-1">Connect</div>
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
