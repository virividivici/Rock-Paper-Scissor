/***function player(name, type) {
    this.name = name;
    this.type = type;
    this.choice = ''; 
    this.score = 0;
   
    this.computerChoice = function(num) {
        
        if (num < 0.34) {
            this.choice = "rock";
        } else if(num <= 0.67) {
            this.choice = "paper";
        } else {
            this.choice = "scissors";
        }
    }

    this.play = function(option) {
        if(option) {
            this.choice = option;
        } else {

            this.computerChoice(Math.random());
        }
        console.log(this.name, this.choice);
    }

    this.setType = function(type) {
        console.log(type);
        this.type = type;
    }

    this.setName = function(name) {
        console.log(name);
        this.name = name;
    }

    this.setChoice = function(choice) {
        console.log(choice);
        this.choice = choice;
    }
}**/