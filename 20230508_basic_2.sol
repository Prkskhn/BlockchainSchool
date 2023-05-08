// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.18;

contract Address{
    //address = 20bytes
    address a;
    function getAddress()public view returns(address){
        return address(this);
    }

    function getMyAddress()public view returns(address){
        return address(msg.sender);
    }

    function getMyBalance()public  view returns(uint){
        return address(msg.sender).balance;
    }
    function getContractBalance()public  view returns(uint){
        return address(this).balance;
    }



    function setA(address _a)public{
        a=_a;
    }
    function setA2(bytes20 _a)public{
        a=address(_a);
    }

    function getA()public view returns(address){
        return a;
    }
    function getA2()public view returns(bytes20){
        return bytes20(a);
    }

    // uint b;

    // function changB()public{
    //     b=b+5;
    // }
    // function add(uint _a,uint _b)public pure returns(uint){
    //     return _a+_b;
    // }
    //멍청하게 가스 낭비하는 짓거리
    // function add2(uint _a,uint _b)public  returns(uint){
    //     return _a+_b;
    // }
}

contract Mapping{
    mapping(uint =>uint) a;
    mapping(uint => string) b;
    mapping(string => address) c;

    mapping(uint =>mapping(string=>uint)) score;

    mapping(string=>uint) height;

    function setHeight(string memory _name,uint _h)public{
        height[_name]=_h;
    }

    function getHeight(string memory _name)public view returns(uint){
        return height[_name];
    }

    function deleteHeight(string memory _name)public{
        delete height[_name];
    }
}
