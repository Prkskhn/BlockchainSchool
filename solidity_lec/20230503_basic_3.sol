// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.18;

contract POWER{
    function square(uint _a)public pure returns(uint){
        return _a**2;
    }
    function cubic(uint _a)public pure returns(uint){
        return _a**3;
    }
    function power(uint _a, uint _b)public pure returns(uint){
        return _a**_b;
    }
}