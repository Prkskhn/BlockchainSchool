import axios from "axios";
import { useEffect, useState } from "react";
import NftCard from "./NftCard";

const Nft = ({ totalNft, mintedNft }) => {
  const [selectedPage, setSelectedPage] = useState(1);
  const [nft, setNft] = useState();

  const getNft = async (p) => {
    try {
      let nftArray = [];
      setNft();
      for (let i = 0; i < 10; i++) {
        const tokenId = i + 1 + (p - 1) * 10;
        let response = await axios.get(
          `${process.env.REACT_APP_JSON_URL}/${tokenId}.json`
        );
        nftArray.push({ tokenId, metadata: response.data });
      }
      setNft(nftArray);
    } catch (error) {
      console.error(error);
    }
  };

  const onClickPage = (p) => () => {
    setSelectedPage(p);
    getNft(p);
  };

  const pageComp = () => {
    const page = parseInt((parseInt(totalNft) - 1) / 10) + 1;
    let pages = [];
    for (let i = 0; i < page; i++) {
      pages.push(
        <button
          key={i}
          className={`m-2 ${
            i + 1 === selectedPage ? "bg-gray-900" : "bg-gray-500"
          } text-white font-bold p-2 rounded-full`}
          onClick={onClickPage(i + 1)}
        >
          {i + 1}page
        </button>
      );
    }

    return pages;
  };

  useEffect(() => {
    getNft(1);
  }, []);
  useEffect(() => {
    console.log(nft);
  }, [nft]);

  return (
    <>
      <div className="bg-blue-300">{pageComp()}</div>
      <div className="mt-8 grid grid-cols-1 xl:grid-cols-2 justify-items-center gap-8">
        {nft ? (
          nft.map((v, i) => {
            return (
              <NftCard
                key={i}
                mintedNft={mintedNft}
                tokenId={v.tokenId}
                metadata={v.metadata}
              />
            );
          })
        ) : (
          <div>로딩중입니다</div>
        )}
      </div>
    </>
  );
};
export default Nft;
