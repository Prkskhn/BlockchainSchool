import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NftCard = ({ tokenId, metadata, mintedNft }) => {
  return (
    <div>
      <div className="relative">
        {tokenId > parseInt(mintedNft) && (
          <div className="absolute bg-gray-900 bg-opacity-80 text-white w-40 h-40 flex justify-center items-center">
            Not Minted
          </div>
        )}
        <img
          className="rounded-[10px] w-40 h-40"
          src={`${metadata.image}`}
          alt=""
        />
        <Link to={`/${tokenId}`}>
          {tokenId > parseInt(mintedNft) ? (
            <button
              disabled={parseInt(mintedNft) < tokenId}
              className="absolute bottom-0 right-0 m-1 bg-gray-900 bg-opacity-80 px-3 py-1 rounded-[10px] text-sm text-gray-500"
            >
              No Detail
            </button>
          ) : (
            <button
              disabled={parseInt(mintedNft) < tokenId}
              className="absolute bottom-0 right-0 m-1 bg-white px-3 py-1 rounded-[10px] text-sm"
            >
              Detail
            </button>
          )}
        </Link>
      </div>
      <div className="text-white">{tokenId}</div>
      <div className="text-white">{metadata.name}</div>
    </div>
  );
};
export default NftCard;
