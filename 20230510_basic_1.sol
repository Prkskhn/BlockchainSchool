// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.18;

contract hello{
    struct Student{
        string name;
        uint number;
        string[] classes;
    }

    mapping(string=>Student[]) Teacher_Student;

    function setTeacher_Student(string memory _teacher, string memory _name,uint _number,string[] memory _classes)public {
        Teacher_Student[_teacher].push(Student(_name,_number,_classes));
    }

    function set(string memory _teacher,uint _n, uint _number)public{
        Teacher_Student[_teacher][_n].number=_number;
    }

    function getTeacher_Student(string memory _teacher)public view returns(Student[] memory){
        return Teacher_Student[_teacher];
    }
}
contract IF{
    // 점수가 50점이상이면 P, 아니면 F
   function setGrade11(uint _score) public pure returns(string memory) {
      if(_score >=50) { /*if(조건문), <- 이번 경우는 _score가 50보다 높을 때*/
         return "P";
      } else {
         return "F";
      }
   }

   // 점수가 70점이상이면 A, 50점 이상이면 B, 아니면 C반
   function setGrade22(uint _score) public pure returns(string memory) {
      if(_score >=70) {
         return "A";
      } else if(_score >=50) {
         return "B";
      } else {
         return "C";
      }
   }

   // 짝수면 even array에, 홀수면 odd array에 넣기
   uint[] even;
   uint[] odd;

   function evenOrOdd(uint _n) public {
      if(_n%2==0) {
         even.push(_n); 
      }else{
          odd.push(_n);
      }
    }       


    function getEvenOrOdd()public view returns(uint[] memory,uint[] memory){
        return (even,odd);
    }

    uint[] A;
    uint[] B;
    uint[] C;

    function ternary(uint _n)public {
        if(_n%3==1){
            A.push(_n);
        }else if(_n%3==2){
            B.push(_n);
        }else{
            C.push(_n);
        }
    }
}