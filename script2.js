//Rock Paper Scissors
console.log("Hello World!")

//Create function getComputerChoice
//Randomly returns "rock", "paper", or "scissors"
//console.log(the return value)
let humanChoiceString
let computerChoiceString
let numberOfRounds = 0

function random1to3() {
    let random = Math.floor(Math.random() * 3 + 1)
   return random
}

function randomComputer() {
    let computerChoice = random1to3()
    return computerChoice
}

function stringify(choice) {
    choice == 1 ? choiceString = "rock" : choice == 2 ? choiceString = "paper" : choice == 3 ? choiceString = "scissors" : computerChoiceString = shoes;
    return choiceString
}

function numify(stringyChoice) {
    stringyChoice == "rock" ? nummyChoice = 1 : stringyChoice == "paper" ? nummyChoice = 2 : stringyChoice == "scissors"? nummyChoice = 3 : nummyChoice = "error";
    return nummyChoice
}


function getComputerChoice() {
    let computerChoice = randomComputer()
    computerChoiceString = stringify(computerChoice)
    console.log(`Computer chooses ${computerChoiceString}`)
    return computerChoiceString
}

//Create a function called getHumanChoice
//Always returns valid choice of rock, paper, or scissors. 
/*function getHumanChoice() {
    humanChoiceString = prompt("Choose rock, paper, or scissors.")
    humanChoiceString = humanChoiceString.toLowerCase()
    if(humanChoiceString == "rock" || humanChoiceString == "paper" || humanChoiceString == "scissors") {
        console.log(`you chose ${humanChoiceString}`) 
    } else {
        let humanChoice = random1to3()
        humanChoiceString = stringify(humanChoice)
        console.log(`You did not enter a valid value. I'm choosing for you. You chose ${humanChoiceString}`)
        
    }
    return humanChoiceString 
}   
    */

function winLose(humanChoiceNum, computerChoiceNum) {
    const result = humanChoiceNum - computerChoiceNum
    if (result === 0) {
        resultsDiv.textContent = `It's a tie! we both chose ${computerChoiceString}`
    } else if (result === 1 || result === -2) {
        resultsDiv.textContent = `You win! ${humanChoiceString} beats ${computerChoiceString}`
        humanScore ++
    } else if (result === -1 || result === 2) {
        resultsDiv.textContent = `You lose! ${computerChoiceString} beats ${humanChoiceString}`
        computerScore ++
    } else {
        resultsDiv.textContent = `idk what you did, but you screwed up.`
    }
}

//Create variables humanScore and computerScore
let humanScore = 0
let computerScore = 0

//Create new function playRound with parameters humanChoice and computerChoice
//Except I've already plotted all the potential scenarios, so I don't want to do that.

function playRound(humanSelection) {
    if (humanScore < 5 && computerScore < 5){
    humanChoiceString = humanSelection
    const computerSelection = getComputerChoice()
    const computerChoiceNum = numify(computerSelection)
    const humanChoiceNum = numify(humanSelection)
    winLose(humanChoiceNum, computerChoiceNum)
    numberOfRounds ++
    scoreDiv.textContent = `Round ${numberOfRounds} The score is Human:${humanScore} Computer: ${computerScore}`
    } else if (humanScore >=5 || computerScore >=5) {
        if (humanScore > computerScore) {
            endGame.textContent = `You win best out of 5!`
        } else if (humanScore == computerScore) {
            endGame.textContent = `It's a tie!`
        } else {
            endGame.textContent = `Computer wins best out of 5!`
        }
    }

    }
    
    function playGame() {
        for (i=0; i<5; i++)
            playRound()
        }

const rockBtn = document.querySelector('.rockBtn')
rockBtn.addEventListener("click", () => playRound("rock"))

const paperBtn = document.querySelector('.paperBtn')
paperBtn.addEventListener("click", () => playRound("paper"))

const scissorsBtn = document.querySelector('.scissorsBtn')
scissorsBtn.addEventListener("click", () => playRound("scissors"))

const resultsDiv = document.querySelector('.results')
const scoreDiv = document.querySelector('.score')
const endGame = document.querySelector('.endGame')


/*const rockBtn = document.getElementById("#rockBtn")
const paperBtn = document.querySelector(".paper")
const scissorsBtn = document.querySelector(".scissors")

rockBtn.style.backgroundColor = "blue"
rockBtn.addEventListener("click", playRound("rock"))*/
/*playGame()*/
