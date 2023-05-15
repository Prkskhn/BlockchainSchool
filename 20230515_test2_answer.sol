// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.18;

// 여러분은 검색 엔진 사이트에서 근무하고 있습니다.
// 고객들의 ID와 비밀번호를 안전하게 관리할 의무가 있습니다.
// 따라서 비밀번호를 rawdata(있는 그대로) 형태로 관리하면 안됩니다.
// 비밀번호를 안전하게 관리하고 로그인을 정확하게 할 수 있는 기능을 구현하세요.

// 아이디와 비밀번호는 서로 쌍으로 관리됩니다. 
// 비밀번호는 rawdata가 아닌 암호화 데이터로 관리되어야 합니다.
// (string => bytes32)인 mapping으로 관리

// value인 bytes32는 ID와 PW를 같이 넣은 후 나온 결과값으로 설정하기
// abi.encodePacked() 사용하기

// * 로그인 기능 - ID, PW를 넣으면 로그인 여부를 알려주는 기능
// * 회원가입 기능 - 새롭게 회원가입할 수 있는 기능
// ---------------------------------------------------------------------------
// * 회원가입시 이미 존재한 아이디 체크 여부 기능 - 이미 있는 아이디라면 회원가입 중지
// * 비밀번호 5회 이상 오류시 경고 메세지 기능 - 비밀번호 시도 회수가 5회되면 경고 메세지 반환
// * 회원탈퇴 기능 - 회원이 자신의 ID와 PW를 넣고 회원탈퇴 기능을 실행하면 관련 정보 삭제 

contract test2_answer{

    struct User{
        bytes32 hash;
        uint attempts;
    }

    mapping(string => User) ID_PW;

    function getHash(string memory _ID,string memory _PW)public  pure returns(bytes32){
        return keccak256(abi.encodePacked(_ID,_PW));
    }

    function userInfo(string memory _ID)public view returns(string memory,User memory){
        return (_ID,ID_PW[_ID]);
    }

    // * 로그인 기능 - ID, PW를 넣으면 로그인 여부를 알려주는 기능
    function logIn(string memory _ID,string memory _PW)public  returns(bool){
        // * 비밀번호 5회 이상 오류시 경고 메세지 기능 - 비밀번호 시도 회수가 5회되면 경고 메세지 반환
        require(ID_PW[_ID].attempts<5, "Too much attemps");
        if(ID_PW[_ID].hash==getHash(_ID,_PW)){
            ID_PW[_ID].attempts=0;
            return true;
        }else{
            ID_PW[_ID].attempts++;
            return false;
        }
    }

    function logIn2(string memory _ID)public view returns(bytes32){
        return ID_PW[_ID].hash;
    }

    // * 회원가입 기능 - 새롭게 회원가입할 수 있는 기능
    function signIn(string memory _ID,string memory _PW)public {
        // * 회원가입시 이미 존재한 아이디 체크 여부 기능 - 이미 있는 아이디라면 회원가입 중지
        require(ID_PW[_ID].hash==0x0000000000000000000000000000000000000000000000000000000000000000,"Provided IDis already being used");                        
        ID_PW[_ID].hash=getHash(_ID,_PW);
    }
    function signIn2(string memory _ID,string memory _PW)public {
        // * 회원가입시 이미 존재한 아이디 체크 여부 기능 - 이미 있는 아이디라면 회원가입 중지
        require(ID_PW[_ID].hash=="","Provided IDis already being used");                        
        ID_PW[_ID].hash=getHash(_ID,_PW);
    }

    // * 회원탈퇴 기능 - 회원이 자신의 ID와 PW를 넣고 회원탈퇴 기능을 실행하면 관련 정보 삭제 
    function signOut(string memory _ID,string memory _PW)public{
        // require( ID_PW[_ID]==keccak256(abi.encodePacked(_ID,_PW)));
        require(logIn(_ID,_PW)==true);
        delete ID_PW[_ID];
    }

    


}

contract REQUIRE{
    function Require(uint _n)public pure returns(uint){
        require(_n<10, "Input should be lower than 10");
        return _n*3;
    }

    function getName(string memory _name) public pure returns(bytes32) {
        return keccak256(abi.encodePacked(_name));
    }

    function onlyAlice(string memory _name)public  pure returns(bool){
        require(getName(_name)==0x9c0257114eb9399a2985f8e75dad7600c5d89fe3824ffa99ec1c3eb8bf3b0501);
        return true;
    }

}

contract REQUIRE2 {
    function getBool() public pure returns(bool) {
        bool _a;
        return _a;
    }

    function Require1() public pure returns(uint) {
        uint _a=1;
        bool b;
        require(b, "Error"); // 통과못함
        return _a;
    }

    function Require2() public pure returns(uint) {
        uint _a=1;
        // bool b;
        return _a;
        // require(b, "Error"); // Unrecheable code
    }

    uint a = 1;

    function getA() public view returns(uint) {
        return a;
    }

    function Require3() public {
        bool c;
        a = 5;
        require(c, "error"); // a를 5로 바꾼 것도 전부다 다시 revert (원래 상태로 복구) 시킴.
    }

    function Require3_2() public {
        bool c;
        a = 5;
        require(!c, "error"); // a를 5로 바꾼 것도 전부다 다시 revert (원래 상태로 복구) 시킴.
    }

    function setAasFive() public {
        a =5;
    }

    // require 타 함수 호출
    function Require4() public {
        bool c;
        setAasFive(); // a의 값을 5로 설정하는 외부 함수
        require(c, "error"); // 외부함수도 모두 revert
    }

    // require 조건 2개
    function Require5(uint _n) public pure returns(bool) {
        require(_n%5==0 && _n>10, "Nope");
        return true;
    }

    // if문 안의 require
    function Require6(uint _a) public pure returns(uint) {
        if(_a%3==0) {
            require(_a%3!=0, "nope"); 
            return _a;
        } else if(_a%3==1) {
            return _a%3;
        } else {
            return _a%3;
        }
    }
}

