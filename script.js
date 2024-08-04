//Rock Paper Scissors
console.log("Hello World!")

//Create function getComputerChoice
//Randomly returns "rock", "paper", or "scissors"
//console.log(the return value)

function random1to3() {
    let random = Math.floor(Math.random() * 3 + 1)
   return random
}

function randomComputer() {
    random()
    let computerChoice = random

    return computerChoice
}

function stringify(choice) {
    choice == 1 ? choiceString = "rock" : choice == 2 ? choiceString = "paper" : choice == 3 ? choiceString = "scissors" : computerChoiceString = shoes;
    return choiceString
}

function getComputerChoice() {
    random1to3()
    let computerChoiceString = stringify(computerChoice)
    console.log(`Computer chooses $(computerChoiceString)`)
    return computerChoiceString
}

//Create a function called getHumanChoice
//Always returns valid choice of rock, paper, or scissors. 
function getHumanChoice() {
    let humanChoiceString = prompt("Choose rock, paper, or scissors.")
    humanChoiceString = humanChoiceString.toLowerCase()
    if(humanChoiceString == "rock" || humanChoiceString == "paper" || humanChoiceString == "scissors") {
        console.log(`you chose $(humanChoiceString)`) 
    } else {
        random()
        let humanChoice = random
        stringify(humanChoice)
        humanChoiceString = choiceString
        console.log(`You did not enter a valid value. I'm choosing for you. You chose $(humanChoiceString)`)
        
    }
    return humanChoiceString
}

//Create variables humanScore and computerScore
let humanScore = 0
let computerScore = 0

//Create new function playRound with parameters humanChoice and computerChoice
//Except I've already plotted all the potential scenarios, so I don't want to do that.

function humanChoiceNum() {
    if(humanChoiceString == "rock" || humanChoiceString == "paper" || humanChoiceString == "scissors") {
        humanChoiceString == "rock" ? humanChoice = 1 : humanChoiceString == "paper"? humanChoice = 2 : humanChoiceString == "scissors" ? humanChoice = 3 : humanChoice = 0
    } else {
    console.log("error")
    return humanChoice
  }

function calculate() {
    let result = userChoice - computerChoice
    return result
    }

function winLose() {
    if (result === 0) {
        console.log(`It's a tie! we both chose ${computerChoiceString}`)
    } else if (result === 1 || result === -2) {
        console.log(`You win! I chose ${computerChoiceString}`)
        humanScore ++
    } else if (result === -1 || result === 2) {
        console.log(`You lose! I chose ${computerChoiceString}`)
        computerScore ++
    } else {
        console.log(`idk what you did, but you screwed up.`)
    }
}

function playRound (computerChoiceString, humanChoiceString) {
    getComputerChoice()
    getHumanChoice()
    calculate()
    winLose()
}


// Rock Paper Scissors
let computerChoice;
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

f
    else {
    start ()
    i = 101
    }
    return result
}
//value 0 means tie, values 1 and -2 mean win, and values -1 and 2 mean loss
//add up losses and wins as they happen



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
