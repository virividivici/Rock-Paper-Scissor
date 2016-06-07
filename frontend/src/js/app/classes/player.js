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