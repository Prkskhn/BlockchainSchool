import Web3 from "web3";
import Intro from "../components/Intro";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../web3.config";
import { useEffect, useState } from "react";
import Nft from "../components/Nft";

const Main = ({ account }) => {
  const web3 = new Web3(window.ethereum);
  const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
  console.log(contract);

  const [totalNft, setTotalNft] = useState(0);
  const [mintedNft, setMintedNft] = useState(0);
  const [myNft, setMyNft] = useState(0);

  const getTotalNft = async () => {
    try {
      const response = await contract.methods.totalNft().call();
      setTotalNft(response);
    } catch (error) {
      console.error(error);
    }
  };

  const getMintedNft = async () => {
    try {
      const response = await contract.methods.totalSupply().call();
      setMintedNft(response);
    } catch (error) {
      console.error(error);
    }
  };

  const getMyNft = async () => {
    try {
      if (!account) return;
      const response = await contract.methods.balanceOf(account).call();
      setMyNft(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTotalNft();
    getMintedNft();
  }, []);
  useEffect(() => {
    getMyNft();
  }, [account]);

  return (
    <div className="max-w-screen-xl mx-auto bg-gray-900  ">
      <Intro totalNft={totalNft} mintedNft={mintedNft} myNft={myNft} />
      <Nft totalNft={totalNft} mintedNft={mintedNft} />
    </div>
  );
};
export default Main;
