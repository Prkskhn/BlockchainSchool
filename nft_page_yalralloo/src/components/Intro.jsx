const Intro = ({ totalNft, mintedNft, myNft }) => {
  const ranNum = Math.floor(Math.random() * 27 + 1);
  const imgSrc = `${process.env.REACT_APP_IMAGE_URL}/${ranNum}.png`;

  return (
    <div className="max-w-screen-xl mx-auto bg-gray-900 flex  justify-center items-center ">
      <div className="mr-16">
        <img
          src={imgSrc}
          alt=""
          className="w-[200px] h-[200px] rounded-full border-[5px]  border-gray-300"
        />
      </div>
      <div className="flex flex-col justify-center items-center m-2 text-white">
        <div className="font-bold">총 NFT</div>
        <div>{totalNft}</div>
      </div>
      <div className="flex flex-col justify-center items-center m-2 text-white">
        <div className="font-bold">발행된 NFT</div>
        <div>{mintedNft}</div>
      </div>
      <div className="flex flex-col justify-center items-center m-2 text-white">
        <div className="font-bold">나의 NFT</div>
        <div>{myNft}</div>
      </div>
    </div>
  );
};
export default Intro;
