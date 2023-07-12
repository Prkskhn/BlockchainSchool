// SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;

import "./230628_nextjs.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract SaleNft is Ownable{
    MintNft mintNftContract;

    constructor(address _mintNftAddress){
        mintNftContract = MintNft(_mintNftAddress);
    }

    mapping (uint =>uint) tokenPrices;
    uint[] public onSaleNft;

    

    function setSaleNft(uint _tokenId,uint _price)public {
        address nftOwner = mintNftContract.ownerOf(_tokenId);
        require(nftOwner==msg.sender);
        require(mintNftContract.isApprovedForAll(nftOwner,address(this)));
        require(_price>0);
        require(tokenPrices[_tokenId]==0);

        tokenPrices[_tokenId]=_price;
        onSaleNft.push(_tokenId);
    }

    function purchaseNft(uint _tokenId) public payable {
        address nftOwner = mintNftContract.ownerOf(_tokenId);
        uint nftPrice = tokenPrices[_tokenId];

        require(nftOwner!=msg.sender);
        require(nftPrice >0);
        require(nftPrice<=msg.value);

        uint tradeFee = msg.value/20;
        payable(nftOwner).transfer(msg.value-tradeFee);
        payable(owner()).transfer(tradeFee);
        mintNftContract.safeTransferFrom(nftOwner,msg.sender, _tokenId);

        tokenPrices[_tokenId]=0;

        for(uint i=0;i<onSaleNft.length;i++){
            if(tokenPrices[onSaleNft[i]]==0){
                onSaleNft[i]=onSaleNft[onSaleNft.length-1];
                onSaleNft.pop();
            }
        }
    }
    function getNftPrice(uint _tokenId) public view returns(uint) {
        return tokenPrices[_tokenId];
    }

    function getOnSaleNft() public view returns(uint[] memory) {
        return onSaleNft;
    }
}