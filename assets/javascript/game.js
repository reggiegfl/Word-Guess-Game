
// -- Computer chooses a letter array

var computerLetter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var alreadyGuessed =[];

var guess = null;
var randomIndex = Math.floor(Math.random() * computerLetter.length);
console.log(randomIndex);
var letter = computerLetter[randomIndex];
console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + alreadyGuessed + " Computer picked: " + letter);

document.onkeyup = function(event) {
    var guess = String.fromCharCode(event.keyCode).toLowerCase();
    document.getElementById("guessed").textContent = alreadyGuessed;
    console.log(guess);

    // greater than 0 means it's a valid guess (not a puncruation mark or something)
    if (alreadyGuessed.indexOf(guess) < 0) { 
        
        //win condition
        if (guess == letter) { 
            alert("You won!");
            wins++;
            document.getElementById("win").textContent = wins;
            console.log("Wins: " + wins);
        } 
    // Doesn't match reduce guesses remaining
    // Counts down one on each wrong guess
        else (guess != letter) 
            alert("Guess again");
            guessesLeft-1;
            document.getElementById("remaining").textContent = guessesLeft;
            console.log("remaining: " + guessesLeft);

        

    // Counter reaches zero, game result is a loss
        if (guessesLeft == 0)
            alert("Game over");
            losses++;
            document.getElementById("lose").textContent = losses;    
            console.log("lose: " + losses)
        }

        // display letters already guessed

        //verify game is still going (ie. there are guesses left) 
        
        computerLetter[computerLetter.length]=guess;
		// if it is a new letter then decrease remaining guesses by 1
		guessesLeft--;
    }


