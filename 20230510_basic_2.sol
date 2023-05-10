// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

contract IF1 {
   


    struct student {
      uint number;
      string name;
      uint score;
      string credit;
   }

   student a;
   student b;
   student c;
   /*
   1. 1, Alice, 90 -> setA()
   2. 2, Bob, 75 -> setB()
   3. 3. Charlie, 85 -> setC()
   */
    student[] Students;
   // 학생 정보 중 번호, 이름, 점수만 입력하면 학점은 자동 계산해 주는 함수
   // 점수가 90점 이상이면 A, 80점 이상이면 B, 70점 이상이면 C, 나머지는 F
   function setA(uint _number, string memory _name, uint _score) public {
      string memory _credit;
      if(_score>=90) {
         _credit = 'A';
      } else if(_score >=80) {
         _credit = 'B';
      } else if(_score >=70) {
         _credit = 'C';
      } else {
         _credit = 'F';
      }

      a = student(_number, _name, _score, _credit);
   }

   function setB(uint _number, string memory _name, uint _score) public {
      string memory _credit;
      if(_score>=90) {
         _credit = 'A';
      } else if(_score >=80) {
         _credit = 'B';
      } else if(_score >=70) {
         _credit = 'C';
      } else {
         _credit = 'F';
      }

      b = student(_number, _name, _score, _credit);
   }

   function setC(uint _number, string memory _name, uint _score) public {
      string memory _credit;
      if(_score>=90) {
         _credit = 'A';
      } else if(_score >=80) {
         _credit = 'B';
      } else if(_score >=70) {
         _credit = 'C';
      } else {
         _credit = 'F';
      }

      c = student(_number, _name, _score, _credit);
   }

  function getStudentsABC() public view returns(student memory, student memory, student memory) {
      return (a, b, c);
   }

   function pushStudent(uint _number, string memory _name, uint _score) public {
      string memory _credit;
      if(_score>=90) {
         _credit = 'A';
      } else if(_score >=80) {
         _credit = 'B';
      } else if(_score >=70) {
         _credit = 'C';
      } else {
         _credit = 'F';
      }
      Students.push(student(_number, _name, _score, _credit));
   }

   function getStudents() public view returns(student[] memory) {
      return Students;
   }

   function pushStudent2(uint _number,string memory _name,uint _score)public{
       Students.push(student(_number,_name,_score,setGrade(_score)));
   }

   function setGrade(uint _score) public pure returns(string memory) {
      if(_score>=90) {
         return 'A';
      } else if(_score >=80) {
         return 'B';
      } else if(_score >=70) {
         return 'C';
      } else {
         return 'F';
      }
   }

}

contract IF2{
   function setNumber(uint _n) public pure returns(string memory){
      if(_n>=70 || _n<=10){
         return "A";
      }else if(_n>=50 && _n%3==0){
         return "B";
      }else{
         return "C";
      }
   }
}

contract ENUM{
   enum Food { //enum 변수명 {변수1, 변수2, 변수3, 변수4}
      Chicken, //0
      Suish, //1
      Bread, //2
      Coconut //3
   }

   Food a; // Food형 변수 a
   Food b; // Food형 변수 b
   Food c;

   function setA() public {
      a = Food.Chicken;
   }

   function setB() public {
      b = Food.Suish;
   }

   function setC() public {
      c = Food.Bread;
   }

   function getABC() public view returns(Food, Food, Food) {
      return (a,b,c);
   }
   function getABC2() public view returns(uint8, uint8, uint8) {
      return (uint8(a),uint8(b),uint8(c));
   }
}

contract ENUM2{
   enum color{
      red,yellow,green,blue,purple,rainbow
   }

   color c;

   function setC()public {
      c = color.red;
   }

   function setC2(uint _n)public {
      c = color(_n);
   }

   function getC()public  view returns(color){
      return c;
   }
}

contract ENUM3{
   enum Status{
      neutral,
      high,
      low
   }

   Status st;

   uint a=5;

   function higher() public{
      a++;
      setA();
   }
   function lower() public{
      a--;
      setA();
   }

   function setA()public {
      if(a >= 7) {
         st = Status.high;
      }else if(a<= 3) {
         st = Status.low;
      }else {
         st = Status.neutral;
      }
   }

   function getA()public view returns(uint){
      return a;
   }
   function getST()public view returns(Status){
      return st;
   }
}

contract BOOL{
   bool isFun;

   function getVar() public view returns(bool){
      return isFun;
   }

   function notFun() public {
      isFun=false;
   }

   function notFun2() public {
      isFun=!isFun;
   }

   function Fun() public {
      isFun=true;
   }
   function Fun2(bool _a) public {
      isFun=_a;
   }
}