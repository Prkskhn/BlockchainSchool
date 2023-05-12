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
    mapping(string => bytes32) ID_PW;

    function logIn(string memory _ID,string memory _PW)public view returns(bool){
        return ID_PW[_ID]==keccak256(abi.encodePacked(_ID,_PW));
    }

    function logIn2(string memory _ID)public view returns(bytes32){
        return ID_PW[_ID];
    }
    
    function signIn(string memory _ID,string memory _PW)public {
        
        ID_PW[_ID]=keccak256(abi.encodePacked(_ID,_PW));
    }


}

contract test2{
    // 아이디와 비밀번호는 서로 쌍으로 관리됩니다. 
    mapping(string=>bytes32) ID_PW;

    // * 로그인 기능 - ID, PW를 넣으면 로그인 여부를 알려주는 기능
    function logIn(string memory _id,string memory _password)public view returns(bool){
        if(ID_PW[_id]==keccak256(abi.encodePacked(_id,_password))){
            return true;
        }else{
            return false;
        }
    }

    // * 회원가입 기능 - 새롭게 회원가입할 수 있는 기능
    function signIn(string memory _id,string memory _password)public {
        ID_PW[_id]=keccak256(abi.encodePacked(_id,_password));
        customers.push(Customer(_id,keccak256(abi.encodePacked(_id,_password))));
    }

    // * 회원가입시 이미 존재한 아이디 체크 여부 기능 - 이미 있는 아이디라면 회원가입 중지
    struct Customer{
        string ID;
        bytes32 PASSWORD;
    }

    Customer[] customers;

    function alreadyExistID(string memory _id)public view returns(string memory){
        
        for(uint i=0;i<customers.length;i++){
            if(keccak256(abi.encodePacked(customers[i].ID)) == keccak256(abi.encodePacked(_id))){
                return "already exist ID";
            }            
        }
        return "It's Okay";
    }
    // * 비밀번호 5회 이상 오류시 경고 메세지 기능 - 비밀번호 시도 회수가 5회되면 경고 메세지 반환
    uint count;
    function logIn2(string memory _id,string memory _password)public  returns(string memory){
        
        if(ID_PW[_id]==keccak256(abi.encodePacked(_id,_password))){
            count=0;
            return "true";
        }else{
            count++;
            if(count>=5){
                return "5 times over";
            }
            return "false";
        }
    }

    // * 회원탈퇴 기능 - 회원이 자신의 ID와 PW를 넣고 회원탈퇴 기능을 실행하면 관련 정보 삭제 

    function deleteCustomer(string memory _id,string memory _password)public {
        if(ID_PW[_id] == keccak256(abi.encodePacked(_id,_password))){
            delete ID_PW[_id];
            for(uint i=0;i<customers.length;i++){
                if(keccak256(abi.encodePacked(customers[i].ID)) == keccak256(abi.encodePacked(_id))){
                    
                    customers.push(customers[i]);
                    customers[i]=customers[customers.length-1];                   
                    customers.pop();
                    customers.pop();
                }
                
            
            }
        }
    }

    function getID_PW(string memory _ID)public view returns(bytes32 ){
        return ID_PW[_ID];
    }
    function getCustomers()public view returns(Customer[] memory ){
        return customers;
    }
}