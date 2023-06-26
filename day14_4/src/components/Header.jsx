const Header = () => {
  return (
    <header className="bg-blue-100 h-12 md:h-20">
      <div className="max-w-screen-xl mx-auto h-full flex justify-between items-center">
        <div>Yalralloo's Portfolio</div>
        {/* <div>
            <img className="w-12" src={nftLogo} alt="nft" />
          </div> */}
        <ul className="flex gap-2 md:gap-8 text-xs sm:text-sm md:text-base">
          <li className="bg-indigo-800 btn-style">Introduce</li>
          <li className="bg-purple-800 btn-style">Portfolio</li>
          <li className="bg-green-800 btn-style">Contact Me</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
