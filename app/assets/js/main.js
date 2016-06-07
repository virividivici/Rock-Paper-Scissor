var Game = {

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
    
} 



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
