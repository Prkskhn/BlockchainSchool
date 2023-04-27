import { Link } from "react-router-dom";

const NftCard = ({ tokenId, metadata, mintedNft }) => {
  return (
    <div className="my-10">
      <div className="relative">
        <img src={`${metadata.image}`} alt="" />
        <Link to={`/${tokenId}`}>
          <button
            disabled={parseInt(mintedNft) < tokenId}
            className="absolute bottom-0 right-0 m-4 bg-white px-4 py-2 rounded-full"
          >
            Detail
          </button>
        </Link>
      </div>
      <div>{tokenId}</div>
      <div>{metadata.name}</div>
      {tokenId > parseInt(mintedNft) && <div>Not Minted</div>}
    </div>
  );
};
export default NftCard;
