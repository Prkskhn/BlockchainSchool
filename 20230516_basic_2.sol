// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.18;

contract DAD {
    uint a;
    uint public wallet=100;
    uint internal crypto=1000;
    uint private emergency=10000;



    function password() private  pure returns(uint) {
        return 1234;
    }

    function getMsgSender()public view returns(address){
        return msg.sender;
    }
}

contract MOM {
    DAD husband = new DAD();
    function who() virtual public view returns(address) {
        return husband.getMsgSender();
    }

}

contract CHILD is DAD {

    function dadGetMsgSender()public view returns(address){
        return DAD.getMsgSender();
    }

    DAD daddy = new DAD();
    DAD daddy2 = new DAD();

    function daddyGetMsgSender()public view returns(address){
        return daddy.getMsgSender();
    }
    function daddy2GetMsgSender()public view returns(address){
        return daddy2.getMsgSender();
    }

}