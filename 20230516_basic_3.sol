// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.18;

contract DAD {
    uint a;

    address public b;

    uint public wallet=100;
    uint internal crypto=1000;
    uint private emergency=10000;

    function password() private  pure returns(uint) {
        return 1234;
    }
    function changeWallet(uint _n)internal  {
        wallet = _n;
    }

}

contract MOM {
    DAD husband = new DAD();
    DAD realHusband;
    
    constructor(address _a){
        realHusband = DAD(_a);
    }

    function getWallet()public view returns(uint){
        return husband.wallet();
    }
    function getRealWallet()public view returns(uint){
        return realHusband.wallet();
    }
    // function changeWallet(uint _a)public {
    //     realHusband.changeWallet(_a);
    // }


}

contract CHILD is DAD {


}