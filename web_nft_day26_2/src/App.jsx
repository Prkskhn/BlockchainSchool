import { useState } from "react";
import Web3 from "web3";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "./web3.config";

const web3 = new Web3(window.ethereum);
const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

function App() {
  const [account, setAccount] = useState();

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

  const onClickMint = async () => {
    try {
      const mintNft = await contract.methods.mintNft().send({ from: account });
      // console.log(contract)
      console.log(mintNft);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-red-100 min-h-screen flex justify-center items-center">
      {account ? (
        <div>
          {account.substring(0, 4)}...{account.substring(account.length - 4)}
          <button className="btn-style ml-4" onClick={onClickMint}>
            민팅
          </button>
        </div>
      ) : (
        <button className="btn-style" onClick={onClickAccount}>
          지갑로그인
        </button>
      )}
    </div>
  );
}

export default App;
