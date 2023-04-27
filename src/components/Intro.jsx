const Intro = ({ totalNft, mintedNft, myNft }) => {
  const ranNum = Math.floor(Math.random() * 27 + 1);
  const imgSrc = `${process.env.REACT_APP_IMAGE_URL}/${ranNum}.png`;

  return (
    <div className="max-w-screen-xl mx-auto bg-blue-100 flex  items-center ">
      <div>
        <img src={imgSrc} alt="" className="w-20 h-20" />
      </div>
      <div className="flex flex-col justify-center items-center m-2">
        <div>총 NFT</div>
        <div>{totalNft}</div>
      </div>
      <div className="flex flex-col justify-center items-center m-2">
        <div>발행된 NFT</div>
        <div>{mintedNft}</div>
      </div>
      <div className="flex flex-col justify-center items-center m-2">
        <div>나의 NFT</div>
        <div>{myNft}</div>
      </div>
    </div>
  );
};
export default Intro;
