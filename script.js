console.log("Hello World!")

// Rock Paper Scissors
let computerChoice;
let userChoice;
let result;
let computerChoiceString;
let wins;
let losses;

//Prompt user to choose between rock, paper, and scissors
//Assign value to user's choice. Rock is 1, paper is 2, scissors is 3
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });


  //gets user's choice and subtracts random computer choice value between 1-3
  readline.question('Choose rock, paper, or scissors.', name => {
    name = rock ? userChoice = 1 : name = paper? userChoice = 2 : name = scissors ? userChoice = 3 : console.log("please try again. Type rock, paper, or scissors")
    readline.close();
    computerChoice = random1to3()
    result = userChoice - computerChoice;
    return result;
  });

//If 1, computer chooses rock. If 2, computer chooses paper. If 3, computer chooses scissors
//randomly choose between integers 1-3. 
function random1to3() {
    computerChoice = Math.floor(Math.random() * 3 + 1)
    stringify()
}
    return computerChoice

function stringify() {
    computerChoice = 1 ? computerChoiceString = "rock" : computerChoice = 2 ? computerChoiceString = "paper" : computerChoice = 3 ? computerChoiceString = "scissors" : computerChoiceString = shoes;

    return computerChoiceString
}

//value 0 means tie, values 1 and -2 mean win, and values -1 and 2 mean loss


function winLose() {
    if (result === 0) {
        console.log(`It's a tie! we both chose ${computerChoiceString}`)
    } else if (result === 1 || result === -2) {
        console.log(`You win! I chose $(computerChoiceString)`)
    } else if (result === -1 || result === 2) {
        console.log(`You lose! I chose $(computerChoiceString)`)
    } else {
        console.log(`idk what you did, but you screwed up.`)
    }

}



//if possible, set the if statement such that values of difference are grouped into "win" and "lose" conditions
//if win values, say, "you win! again?" and add 1 to wins if loss values say, "you lose! again?" and add one to losses
//call function score with command "score" 
//Show wins and losses as "wins: num losses: num"
//
//
//
//
//
