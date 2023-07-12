// SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract MintNft is ERC721Enumerable {
    string metadataUri;
    // mapping(uint => string) metadataUris;

    uint maxAmount;

    constructor(string memory _name, string memory _symbol, string memory _metadataUri, uint _maxAmount) ERC721(_name, _symbol) {
        metadataUri = _metadataUri;
        maxAmount = _maxAmount;
    }

    // string _metadataUri
    function mintNft() public {
        require(totalSupply() < maxAmount, "No more mint.");

        uint tokenId = totalSupply() + 1;

        _mint(msg.sender, tokenId);

        // metadataUris[tokenId] = _metadataUri;
    }

    function tokenURI(uint _tokenId) public override view returns(string memory) {
        return string(abi.encodePacked(metadataUri, '/', Strings.toString(_tokenId), '.json'));

        // return metadataUris[_tokenId];
    }

    function getLatestNft(address _nftOwner) public view returns(uint) {
        uint nftLength = balanceOf(_nftOwner);
        uint latestNft = tokenOfOwnerByIndex(_nftOwner, nftLength - 1);
        
        return latestNft;
    }

    function getAllNft(address _nftOwner) public view returns(uint[] memory) {
        uint nftLength = balanceOf(_nftOwner);

        uint[] memory allNft = new uint[](nftLength);

        for(uint i; i < nftLength; i++) {
            allNft[i] = tokenOfOwnerByIndex(_nftOwner, i);
        }

        return allNft;
    }
}