// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.18;

contract PAYABLE{
    //어카운트에서 컨트랙트에게 자유로운 금액 입력해서 보내기1
    function depositToContract()public payable{}

    
    //컨트랙트에게 정해진 금액 보내기
    //컨트랙트로 특정 금액을 보내기 위해선 사용자가 msg.value를 입력해주고 require로 특정금액 설정을 해줘야함.
    //함수만 실행해서는 컨트랙트로 돈보낼수없고 직접 얼마보낼지 value입력해줘야함.
    function depositToContract2() public payable {
        require(msg.value == 1,"input ether");
    }


    //컨트랙트 배포할 때 컨트랙트에 돈 보내기
    constructor() payable {
        require(msg.value==12 ether,"nope");
        /*
        컨트랙트에 금액을 입력해서 보내는 밑의 기능은 생성자 안에서 밖에 안먹히는것같다.
        (위의 depositToContract2함수에선 먹히지 않는다.)
        그리고 this도 address로 감싸줘야 실행이 된다.
        */
        payable(address(this)).transfer(msg.value);



    }

    
}


//컨트랙트에서 컨트랙트로 돈 보내기

contract PAYABLE1{
    //컨트랙트에서 컨트랙트로 돈 보내기(2)
    //1.컨트랙트 (타입이랑 비슷하다 생각하고) 변수 선언
    //2.해당 컨트랙트 변수에 돈을 받아야 하는 곳의컨트랙트 주소 넣어준다.

    PAYABLE2 public py;

    constructor(address payable  _a)payable {
        require(msg.value==10 ether);
        py = PAYABLE2(_a);
    }

    function contractToContract()public {
        payable(py).transfer(1 ether);
    }

}


//컨트랙트에서 컨트랙트로 돈 보내기(1)
//외부 컨트랙트로부터 돈 받을 때, receive 함수사용
contract PAYABLE2{
    receive() external payable {}


}


contract PAYABLE3{
    //컨트랙트에서 컨트랙트로 돈 주고받기(2)
    //1.컨트랙트 (타입이랑 비슷하다 생각하고) 변수 선언
    //2.해당 컨트랙트 변수에 돈을 받아야 하는 곳의 컨트랙트 주소 넣어준다.

    PAYABLE4 public py4;
    receive() external payable {}
    constructor(address payable  _a)payable {
        require(msg.value==10 ether);
        py4 = PAYABLE4(_a);
    }

    function contractToContract()public {
        payable(py4).transfer(1 ether);
    }

}


//컨트랙트에서 컨트랙트로 돈 주고받기(1)
//외부 컨트랙트로부터 돈 받을 때, receive 함수사용
contract PAYABLE4{
    receive() external payable {}

    PAYABLE3 public py3;

    function toPayable3(address payable _a)public{
        py3 = PAYABLE3(_a);
        payable(address(py3)).transfer(1 ether);
    }


}


