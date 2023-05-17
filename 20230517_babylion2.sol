// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.18;
/*
Quiz 01 PrizeDistribution

여러 사람이 참여하는 게임에서 승리한 플레이어에게 상금을 분배해야 합니다.

1번 지갑은 주최자입니다. 주최자는 게임 시작 시 (deploy할 때) 1eth를 상금으로 겁니다.

참가자는 이름, 점수를 필수로 가집니다.
참가자는 0.01eth를 지불해야 게임에 참여할 수 있습니다.
지불한 금액은 총 상금에 포함됩니다.

주최자는 참가자들의 점수를 설정합니다. (주최자만 가능해야 합니다.)

가장 높은 점수를 가진 사람들이 상금을 나눠가집니다. (1/n)
가장 높은 점수를 가진 사람은 여러 명 일 수 있습니다.

테스트 케이스
2번 0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2 alice 100점
3번 0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db bob 80점
4번 0x78731D3Ca6b7E34aC0F824c42a7cC18A495cabaB josh 100점
5번 0x617F2E2fD72FD9D5503197092aC168c91465E7f2 kate 50점

총 상금 1.04 eth
alice, josh 가 0.52eth 씩 상금 나눠갖게 됨. 
*/

contract test1{
    struct Player{
        string name;
        uint score;
    }

    constructor()payable {
        require(msg.value==1 ether,"Input 1 Ether");
        
    }

    mapping(string=>Player) players;
    Player[] playerArr;

    uint count=0;

    function setPlayer(string memory _name)public payable {

        require(msg.value==0.01 ether,"Input 0.01 Ether");
        players[_name]=Player(_name,0);
        playerArr.push(Player(_name,0));
        

    }

    function getPlayers(string memory _name)public view returns(Player memory){
        return players[_name];
    }

    // function setPlayerScore(string memory _name,uint _score)public {
    //     require(msg.sender==0x5B38Da6a701c568545dCfcB03FcB875f56beddC4);
    //     players[_name].score=_score;     
    //     for(uint i=0;i<playerArr.length;i++){
    //         if(playerArr[i].name==_name){
    //             playerArr[i].score=_score;
    //         }
    //     }
    // }
    
}

contract test2{
    struct Player{
        string name;
        uint score;
    }

    address owner;
    uint totalPrize;

    constructor()payable {
        owner = msg.sender;
        totalPrize=msg.value;
    }

    modifier onlyOwner(){
        require(msg.sender==owner,"Only owner can do this fn");
        _;
    }

    mapping(address=>Player) public players;
    address[] allPlayers;
    address[] highPlayer;

    function participate(string memory _name)public payable {
        require(msg.value == 0.01 ether,"input 0.01 ether");
        
        players[msg.sender]=Player(_name,0);
        allPlayers.push(msg.sender);
        totalPrize += 0.01 ether;
    }

    function setScore(address _player, uint _score)public onlyOwner{
        require(players[_player].score==0,"Score already exist");
        players[_player].score = _score;
    }

    function determineWinners()public {
        uint highestScore = 0;
        for(uint i=0;i<allPlayers.length;i++){
            address addr = allPlayers[i];
            uint playerScore = players[addr].score;
            if(playerScore > highestScore){
                highestScore=playerScore;
            }
        }
        for(uint i=0;i<allPlayers.length;i++){
            address addr=allPlayers[i];
            if(players[addr].score==highestScore){
                highPlayer.push(addr);
            }
        }
    }
}