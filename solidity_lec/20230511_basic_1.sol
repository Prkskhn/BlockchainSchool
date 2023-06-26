// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.18;

contract hello{
    mapping(uint=>uint) mapNum;
    mapping(string=>uint) mapString;

    struct Wallet{
        string name;
        uint number;
        address wallet;
    }

    mapping(string=>Wallet) mapWallet;

    Wallet[] wallets;

    function setWallets(string memory _name,uint _number,address _wallet)public{
        wallets.push(Wallet(_name,_number,_wallet));
    }

    function getWallet(uint _n)public view returns(Wallet memory){
        return wallets[_n-1];
    } 

    function getWalletAddress(uint _n)public view returns(address ){
        return wallets[_n-1].wallet;
    }

    function getAllWallet()public view returns(Wallet[] memory){
        return wallets;
    }
}

contract hello2{
    uint[10] a;
    uint[] b;

    uint count;

    function pushA(uint _n)public {
        a[count++]=_n;
    }
    function pushB(uint _n)public {
        b.push(_n);
    }

    function setB(uint _n, uint _num)public{
        b[_n-1]=_num;
    }

    function plusAllA()public view returns(uint){
        uint sum;
        for (uint i=0;i<a.length;i++){
            sum=sum+a[i];
        }
    return sum;
    }
}

contract STRING_Compare{
    function keccak1(string memory s1)public pure returns(bytes32){
        return keccak256(abi.encodePacked(s1));
    }
    function keccak2(string memory s1)public pure returns(bytes32){
        return keccak256(bytes(s1));
    }
    function compare1(string memory s1,string memory s2)public pure returns(bool){
        return keccak256(bytes(s1))==keccak256(bytes(s2));
    }
    function compare2(string memory s1)public pure returns(bytes memory,bytes memory){
        return (abi.encodePacked(s1),bytes(s1));
    }
}