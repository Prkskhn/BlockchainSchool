// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.18;

contract hello {
    struct student{
        string name;
        uint number;
        uint birth;
    }
    struct class{
        string title;
        uint number;
        uint date;
    }

    student s;
    class c;

    function setS(string memory _name, uint _number, uint _birth)public{
        s=student(_name,_number,_birth);
    }
    function setC(string memory _title,uint _number,uint _date)public{
        c=class(_title,_number,_date);
    }

    function getS()public view returns(student memory){
        return s;
    }
    function getC()public view returns(class memory){
        return c;
    }

    student[] students;
    class[] classes;

    function pushStudent(string memory _name,uint _number,uint _birth)public {
        students.push(student(_name,_number,_birth));
    }

    function pushClass(string memory _title,uint _number,uint _date)public{
        classes.push(class(_title,_number,_date));
    }
}

contract hello2{
    /* 숫자형 변수 a, 문자형 변수 b, bytes2형 변수 c를 담은 구조체 D를 선언하세요. */

    struct D {
        uint a;
        string b;
        bytes2 c;
    }

    // D형 변수 dd를 선언하세요.

    D dd;

    // dd에 값을 부여하는 setDD함수를 구현하세요.

    function setDD(uint _a, string memory _b, bytes2 _c) public {
        dd = D(_a, _b, _c);
    }
    
    // D형 변수들이 들어가는 array Ds를 선언하세요.

    D[] Ds;

    // Ds에 새로운 D형 변수를 넣는 pushD 함수를 구현하세요.

    function pushD(uint _a, string memory _b, bytes2 _c) public {
        Ds.push(D(_a, _b, _c));
    }

}

contract hello3{
    struct member{
        uint number;
        string name;
        bytes2 password;
    }

    member Michael;

    function setM(uint _number, string memory _name,bytes2 _password)public{
        Michael=member(_number,_name,_password);
    }

    member[] members;
    function pushMember(uint _number,string memory _name,bytes2 _password)public{
        members.push(member(_number,_name,_password));
    }
}

contract hello4{
    /* 숫자형 변수 a, 문자형 변수 b, bytes2형 변수 c를 담은 구조체 D를 선언하세요. */
    struct D {
        uint a;
        string b;
        bytes2 c;
    }

    // D형 변수 dd를 선언하세요.
    D dd;

    // dd에 값을 부여하는 setDD함수를 구현하세요.
    function setDD(uint _a, string memory _b, bytes2 _c) public {
        dd = D(_a, _b, _c);
    }
    
    function getDD()public view returns(D memory){
        return dd;
    }

    


    // D형 변수들이 들어가는 array Ds를 선언하세요.
    D[] Ds;

    // Ds에 새로운 D형 변수를 넣는 pushD 함수를 구현하세요.
    function pushD(uint _a, string memory _b, bytes2 _c) public {
        Ds.push(D(_a, _b, _c));
    }

    function pushD2()public{
        Ds.push(dd);
    }

    function getN(uint _n)public view returns(D memory){
        return Ds[_n-1];
    }


}

contract hello5{
    struct Student{
        string name;
        uint birthday;
        uint number;
    }

    Student[] students;

    function pushStudent(string memory _name, uint _birthday,uint _number)public {
        students.push(Student(_name,_birthday,_number));
    }
    function getStudent(uint _n)public view returns(Student memory){
        return students[_n-1];
    }
    function getBirthdat(uint _n)public view returns(uint){
        return students[_n-1].birthday;
    }

}