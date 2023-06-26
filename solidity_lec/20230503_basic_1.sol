// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.18;

contract REVIEW1{
    uint a;
    string b;

    function getA()public view returns(uint){
        return a;
    }
    function setA() public {
        a=5;
    }
    function newA(uint _a)public{
        a=_a;
    }
    function getB()public view returns(string memory){
        return b;
    }
    function setB()public {
        b="qwe";
    }
    function newB(string memory _b)public {
        b=_b;
    }
}