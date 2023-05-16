// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.18;

contract VISIBILITY{
    function add(uint a,uint b)public pure returns(uint){
        return a+b;
    }
    function privateF()private pure returns (string memory){
        return "private";
    }
    function testPrivateF()public  pure returns (string memory){
        return privateF();
    }
    function testPrivateF2()internal   pure returns (string memory){
        return privateF();
    }
    function internalF()internal  pure returns (string memory){
        return "internal";
    }
    function testinternalF()public  pure returns (string memory){
        return internalF();
    }
    function publicF()public pure returns (string memory){
        return "public";
    }
    function externalF()external  pure returns (string memory){
        return "external";
    }
}


contract Child is VISIBILITY{

    function testPrivateF_1()public  pure returns (string memory){
        return testPrivateF();
    }
    function testPrivateF_2()public  pure returns (string memory){
        return testPrivateF2();
    }


    function testInternal2() public pure returns (string memory) {
        return internalF();
    }
    function testPublic() public pure returns (string memory) {
        return publicF();
    }
    
}

contract Outsider{
    VISIBILITY vs= new VISIBILITY();
    function getExternalFromVs()public view returns(string memory){
        return vs.externalF();
    }
    function getPublicFromVS()public view returns(string memory){
        return vs.publicF();
    }
}

contract DAD {
    uint a;
    uint public wallet=100;
    uint internal crypto=1000;
    uint private emergency=10000;


    function who() virtual public pure returns(string memory) {
        return "dad from DAD";
    }
    function who2()  public pure returns(string memory) {
        return who();
    }

    function name()internal pure returns(string memory) {
        return "David";
    }

    function password() private  pure returns(uint) {
        return 1234;
    }
    function character() external   pure returns(string memory) {
        return "Not good";
    }
    function getAddress()public view returns(address){
        return address(this);
    }
}

contract MOM {
    DAD husband = new DAD();
    function who() virtual public pure returns(string memory) {
        return "mom from MOM";
    }
    function getHusbandCharacter() virtual public view returns(string memory) {
        return husband.character();
    }
    
    function getWallet()public view returns (uint){
        return husband.wallet();
    }
    function husbandAddress()public view returns(address){
        return address(husband);
    }

    function husbandAddress2()public view returns(address){
        return husband.getAddress();
    }
    /*
    function getCrypto()public view returns (uint){
        return husband.crypto();
    }
    function getEmergency()public view returns (uint){
        return husband.emergency();
    }
    */
}

contract CHILD is DAD {
    function who() override public pure returns(string memory) {
        return super.who();
        // return "child from CHILD";
    }

    function fathersName() public pure returns(string memory) {
        return super.name();
    }
    function fathersWallet() public view returns(uint) {
        return DAD.wallet;
    }
    function fathersCrypto() public view returns(uint) {
        return DAD.crypto;
    }
    function fathersAddress() public view returns(address) {
        return DAD.getAddress();
    }

    function fathersAddress2() public view returns(address) {
        return super.getAddress();
    }
    

    DAD daddy = new DAD();
    DAD daddy2 = new DAD();
    function getDaddyAddress() public view returns(address) {
        return address(daddy);
    }
    function getDaddyAddress2() public view returns(address) {
        return daddy.getAddress();
    }
    function getDaddy2Address() public view returns(address) {
        return address(daddy2);
    }
    function getDaddy2Address2() public view returns(address) {
        return daddy2.getAddress();
    }

    /*
    function fathersWallet2() public view returns(uint) {
        return daddy.wallet;
    }
    function fathersCrypto2() public view returns(uint) {
        return daddy.crypto;
    }
    */

    /*
    function fathersChar() public pure returns(string memory) {
        return super.character();
    }

    function password_Dad() public pure returns(uint) {
        return super.password();
    }
    */
}

contract CHILD2 is DAD, MOM {
    function who() virtual override(DAD, MOM) public pure returns(string memory) {
        return super.who();
        // return "child from CHILD";
    }
}

contract CHILD2_2 is MOM, DAD {
    function who() virtual override(MOM, DAD) public pure returns(string memory) {
        return super.who();
        // return "child from CHILD";
    }
}

contract CHILD3 is DAD {
    function who()override public pure returns(string memory) {
        return "child from CHILD";
    }

    function who(uint a) public pure returns(string memory, uint) {
        return ("dad from CHILD", a);
    }
}

// DAD, MOM, CHILD2의 함수들도 접근 가능
contract GRANDCHILD is CHILD2 {
    function who()override public pure returns(string memory) {
        return "grandChild";
    }
}