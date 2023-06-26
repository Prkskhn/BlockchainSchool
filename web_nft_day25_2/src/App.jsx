import { useState } from "react";
import Web3 from "web3";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "./web3.config";

const web3 = new Web3(window.ethereum);

const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

function App() {
  const [account, setAccount] = useState("");
  const [balance, setBalance] = useState();

  const onClickLogo = async () => {
    try {
      const metaAccount = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(metaAccount[0]);
    } catch (error) {
      console.error(error);
    }
  };
  const onClickLogOut = () => {
    setAccount("");
  };

  const onClickBalance = async () => {
    try {
      if (!account || !contract) return;
      const myBalance = await contract.methods.balanceOf(account).call();
      setBalance(web3.utils.fromWei(myBalance));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-red-100 min-h-screen flex flex-col justify-center items-center ">
      {account ? (
        <>
          <div className="flex  justify-center items-center">
            <div>{account}</div>
            <button onClick={onClickLogOut} className="btn-style ml-4">
              로그아웃
            </button>
          </div>
          <div className="flex  justify-center items-center mt-4">
            {balance && <div>{balance} tMatic</div>}
            <button onClick={onClickBalance} className="btn-style ml-4">
              잔액조회
            </button>
          </div>
        </>
      ) : (
        <div className="bg-white border-2 border-main p-4 rounded-lg hover:bg-main">
          <img
            onClick={onClickLogo}
            className="w-20 "
            src={`${process.env.PUBLIC_URL}/images/metamask.png`}
            alt="metamasklogo"
          />
        </div>
      )}
    </div>
  );
}

export default App;
