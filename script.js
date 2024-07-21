console.log("Hello World!")

// Rock Paper Scissors

//Prompt user to choose between rock, paper, and scissors
console.log("Choose rock(), paper(), or scissors()")

//new step: if user inputs "rock", "paper", or "scissors"...
//actually, should these be three separate functions? Since it's being played in the console instead of with a selector.
//separate function way

//If 1, computer chooses rock. If 2, computer chooses paper. If 3, computer chooses scissors
//randomly choose between integers 1-3. But it favors 1 and 3 over 2, it seems
function random1to3() {
    let computerChoice = Math.floor(Math.random() * 3 + 1)
    return computerChoice
}
//but now I have a new issue. It's not super sleek to call functions with empty parentheses.
//it would look cuter if it was play(rock) or play(paper) or play(scissors)
//in terms of a game. Or else I should just make a selector with buttons. 

//generates a score to determine winning or losing. 
function rock() {
    const userChoiceRock = 1
    let computerChoiceRock = random1to3()
    let decider = computerChoiceRock - userChoiceRock
}

//I don't like this as separate functions. 





//plot on paper which scenarios result in computer winning and which scenarios result in user winning
//subtract values of computer from user and determine if there's a way to plot each difference to one outcome
//if possible, set the if statement such that values of difference are grouped into "win" and "lose" conditions
//if win values, say, "you win! again?" and add 1 to wins if loss values say, "you lose! again?" and add one to losses
//call function score with command "score" 
//Show wins and losses as "wins: num losses: num"
//
//
//
//
//
