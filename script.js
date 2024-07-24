console.log("Hello World!")

// Rock Paper Scissors
let computerChoice;
let userChoiceString;
let userChoice;
let result;
let computerChoiceString;
let wins = 0;
let losses = 0;
let i;

//Prompt user to choose between rock, paper, and scissors
//Assign value to user's choice. Rock is 1, paper is 2, scissors is 3


  //gets user's choice and subtracts random computer choice value between 1-3
  function start() {
  userChoiceString = prompt("Choose rock, paper, or scissors!") 
  }
  function takeInput() {
    if(userChoiceString == "rock" || userChoiceString == "paper" || userChoiceString == "scissors") {
        userChoiceString == "rock" ? userChoice = 1 : userChoiceString == "paper"? userChoice = 2 : userChoiceString == "scissors" ? userChoice = 3 : userChoice = 0
    } else if (userChoiceString == "wins") {
        console.log(wins) 
    } else if (userChoiceString == "losses") {
     console.log(losses) 
    } else {
    console.log("Please try again. Type rock, paper, or scissors.")
    }
    return userChoice
  }

  
//If 1, computer chooses rock. If 2, computer chooses paper. If 3, computer chooses scissors
//randomly choose between integers 1-3. 
function random1to3() {
    computerChoice = Math.floor(Math.random() * 3 + 1)
   return computerChoice
}

function stringify() {
    computerChoice == 1 ? computerChoiceString = "rock" : computerChoice == 2 ? computerChoiceString = "paper" : computerChoice == 3 ? computerChoiceString = "scissors" : computerChoiceString = shoes;

    return computerChoiceString
}

function calculate() {
    if (userChoice > 0) {
        result = userChoice - computerChoice
    }
    else {
    start ()
    i = 101
    }
    return result
}
//value 0 means tie, values 1 and -2 mean win, and values -1 and 2 mean loss
//add up losses and wins as they happen

function winLose() {
    if (result === 0) {
        console.log(`It's a tie! we both chose ${computerChoiceString}`)
    } else if (result === 1 || result === -2) {
        console.log(`You win! I chose ${computerChoiceString}`)
        wins ++
    } else if (result === -1 || result === 2) {
        console.log(`You lose! I chose ${computerChoiceString}`)
        losses ++
     } else if (result ==3) {
        i = 101
    } else {
        console.log(`idk what you did, but you screwed up.`)
    }
}

//now loop it

for (i = 0; i < 100; i++) {
    start();
takeInput();
random1to3();
stringify();
calculate();
winLose();
console.log(wins)

  }

//if win values, say, "you win! again?" and add 1 to wins if loss values say, "you lose! again?" and add one to losses
//call function score with command "score" 
//Show wins and losses as "wins: num losses: num"
//
//
//
//
//
