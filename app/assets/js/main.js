/***var Game = {

    round : 0,
    player1: new player( document.getElementById('player1').value, document.getElementById('playerType1').value), 
    player2: new player( document.getElementById('player2').value, document.getElementById('playerType2').value),
 //   var userChoice = prompt("Do you choose rock, paper or scissors?");
    resetPlayer1 : function(value) {
      this.player1 = new player( document.getElementById('player1').value, document.getElementById('playerType1').value);
    },
    resetPlayer2 : function(value) {
        this.player2 = new player( document.getElementById('player2').value, document.getElementById('playerType2').value);
      
    },
    compare : function(choice1, choice2) {
        if(choice1 === choice2) {
          alert("The result is a tie!");
        }
        if(choice1 === "rock") {
            if(choice2 === "scissors") {
                alert("rock wins");
            } else {
                alert("paper wins");
            }
        }
        if(choice1 === "paper") {
            if(choice2 === "rock") {
                alert("paper wins");
            } else {
                if(choice2 === "scissors") {
                    alert("scissors wins");
                }
            }
        }
        
        if(choice1 === "scissors") {
            if(choice2 === "rock") {
                alert("rock wins");
            } else {
                if(choice2 === "paper") {
                   alert("scissors wins");
                }
            }
        }
    },

    play : function(player1, player2) {
        round++;
        compare(player1.choice , player2.choice);
    }
    
} **/



//RPS
//Compare
var compare = function (choice1, choice2) {
    if (choice1 === choice2) {
        return "Tie!";
    }
    if (choice1 === "rock" && choice2 === "scissors" || choice1 === "paper" && choice2 === "rock" || choice1 === "scissors" && choice2 === "paper") {
        return "Player 1 Wins!";
    }else if(choice2 === "rock" && choice1 === "scissors" || choice2 === "paper" && choice1 === "rock" || choice2 === "scissors" && choice1 === "paper"){
        return "Player 2 Wins!";
    }else{
        return("Invalid Input");
    }
};

//Retry
var retry = function(){
    var replay = prompt("Play Again?  y,n");
    if(replay === "y"&&single){
        singlePlayer();
    }else if(replay === "y"&&multicpu){
        multiCpu();
    }else if(replay === "y"&&multi){
        multiPlayer();
    }else if(replay === "n"){
        rps();
    }else{
        alert("Invalid Input");
        retry();
    }
};

//Single Player
var singlePlayer = function(){

        //Players
        var user1 = prompt("Player 1: rock, paper, or scissors");
        var computerAnswer = Math.random();

        //com AI
        if (computerAnswer <= 0.33) {
            computerAnswer = "rock";
        } else if (computerAnswer <= 0.66) {
            computerAnswer = "paper";
        } else {
            computerAnswer = "scissors";
        }

        alert(compare(user1, computerAnswer));
        retry();
};

//Game Base
var rps = function () {
    //Menu
    var menu = prompt("1.Single Player / 2.Multiplayer / 3.MultiCpu / 4.Exit");
    if(menu === "4"){
    }else if (menu === "3") {
        mulitcpu = true;
        multi = false;
        single = false;
        multiCpu();
    }else if (menu === "2") {
        mulitcpu = false;
        multi = true;
        single = false;
        multiPlayer();
    }else if (menu === "1") {
       mulitcpu = false;
       single = true;
       multi = false;
       singlePlayer();
    }
};

//Multiplayer
var multiPlayer = function(){

    //Players
    var user1 = prompt("Player 1: rock, paper, or scissors?");
    var user2 = prompt("Player 2: rock, paper, or scissors?");

    alert(compare(user1, user2));
    retry();
};

//MultiCpu
var multiCpu = function(){
    //Players
    var computerAnswer1 = Math.random();
    var computerAnswer2 = Math.random();

    //com AI
    if (computerAnswer1 <= 0.33) {
        computerAnswer1 = "rock";
    } else if (computerAnswer1 <= 0.66) {
        computerAnswer1 = "paper";
    } else {
        computerAnswer1 = "scissors";
    }

    //com AI
    if (computerAnswer2 <= 0.33) {
        computerAnswer2 = "rock";
    } else if (computerAnswer2 <= 0.66) {
        computerAnswer2 = "paper";
    } else {
        computerAnswer2 = "scissors";
    }

    alert(compare(computerAnswer1, computerAnswer2));
    retry();
};
rps();
function player(name, type) {
    this.name = name;
    this.type = type;
    this.lastChoice = '';
    this.score = 0;
   
    this.computerChoice = function(num) {
        
        if (num < 0.34) {
            this.lastChoice = "rock";
        } else if(num <= 0.67) {
            this.lastChoice = "paper";
        } else {
            this.lastChoice = "scissors";
        }
    }

    this.play = function(option) {
        if(option) {
            this.lastChoice = option;
        } else {
            
            this.computerChoice(Math.random());
        }

    }


}
