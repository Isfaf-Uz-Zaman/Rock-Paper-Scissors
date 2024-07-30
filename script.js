var humanScore = 0;
var computerScore = 0;

let humanChoice = 0;


const all_buttons = document.querySelectorAll('.circleButtonRock');




all_buttons.forEach(bt => {
    bt.addEventListener('click', (e) => {
        humanChoice = e.target.innerHTML;

        let randomNumber = (Math.random());

        if (randomNumber <= 0.3) {
            if (humanChoice === "Rock") {
                humanScore = humanScore;
                computerScore = computerScore;

                document.getElementsByTagName("h1")[0].innerHTML = `Both chose Rock Its a Tie`;

                document.getElementsByTagName("p")[0].innerHTML = `Player Score Is:${humanScore}`;
                document.getElementsByTagName("p")[1].innerHTML = `Computer Score Is:${computerScore}`;

            }
            if (humanChoice === "Paper") {
                humanScore = humanScore + 1;
                computerScore = computerScore;

                document.getElementsByTagName("h1")[0].innerHTML = `You Won this round`;

                document.getElementsByTagName("p")[0].innerHTML = `Player Score Is:${humanScore}`;
                document.getElementsByTagName("p")[1].innerHTML = `Computer Score Is:${computerScore}`;
            }
            if (humanChoice === "Scissors") {
                humanScore = humanScore;
                computerScore = computerScore + 1;

                document.getElementsByTagName("h1")[0].innerHTML = `Computer Won this round`;
                document.getElementsByTagName("p")[0].innerHTML = `Player Score Is:${humanScore}`;
                document.getElementsByTagName("p")[1].innerHTML = `Computer Score Is:${computerScore}`;
            }
        }

        if (randomNumber >= 0.6) {
            if (humanChoice === "Rock") {
                humanScore = humanScore;
                computerScore = computerScore + 1;

                document.getElementsByTagName("h1")[0].innerHTML = `Computer Won this round`;

                document.getElementsByTagName("p")[0].innerHTML = `Player Score Is:${humanScore}`;
                document.getElementsByTagName("p")[1].innerHTML = `Computer Score Is:${computerScore}`;
            }
            if (humanChoice === "Paper") {
                humanScore = humanScore;
                computerScore = computerScore;

                document.getElementsByTagName("h1")[0].innerHTML = `Both chose Paper Its a Tie`;

                document.getElementsByTagName("p")[0].innerHTML = `Player Score Is:${humanScore}`;
                document.getElementsByTagName("p")[1].innerHTML = `Computer Score Is:${computerScore}`;
            }
            if (humanChoice === "Scissors") {
                humanScore = humanScore + 1;
                computerScore = computerScore;

                document.getElementsByTagName("h1")[0].innerHTML = `You Won this round`;

                document.getElementsByTagName("p")[0].innerHTML = `Player Score Is:${humanScore}`;
                document.getElementsByTagName("p")[1].innerHTML = `Computer Score Is:${computerScore}`;
            }
        }

        if (randomNumber < 0.6 && randomNumber > 0.3) {

            if (humanChoice === "Rock") {
                humanScore = humanScore + 1;
                computerScore = computerScore;

                document.getElementsByTagName("h1")[0].innerHTML = `You Won this round`;

                document.getElementsByTagName("p")[0].innerHTML = `Player Score Is:${humanScore}`;
                document.getElementsByTagName("p")[1].innerHTML = `Computer Score Is:${computerScore}`;
            }
            if (humanChoice === "Paper") {
                humanScore = humanScore;
                computerScore = computerScore + 1;

                document.getElementsByTagName("h1")[0].innerHTML = `Computer Won this round`;

                document.getElementsByTagName("p")[0].innerHTML = `Player Score Is:${humanScore}`;
                document.getElementsByTagName("p")[1].innerHTML = `Computer Score Is:${computerScore}`;
            }
            if (humanChoice === "Scissors") {
                humanScore = humanScore;
                computerScore = computerScore;

                document.getElementsByTagName("h1")[0].innerHTML = `Both chose Scissor Its a Tie`;

                document.getElementsByTagName("p")[0].innerHTML = `Player Score Is:${humanScore}`;
                document.getElementsByTagName("p")[1].innerHTML = `Computer Score Is:${computerScore}`;
            }





        }
        //checking who ever got 5 points first, and announcing whether the player won or lost
        if (humanScore === 5) {

            document.getElementsByTagName("h1")[0].innerHTML = `You Won!!!!`;
            humanScore = 0;
            computerScore = 0;

            document.getElementsByTagName("p")[0].innerHTML = `Player Score Is:${humanScore}`;
            document.getElementsByTagName("p")[1].innerHTML = `Computer Score Is:${computerScore}`;

        }
        else if (computerScore === 5) {
            document.getElementsByTagName("h1")[0].innerHTML = `Sorry You Lost the Game`;
            humanScore = 0;
            computerScore = 0;

            document.getElementsByTagName("p")[0].innerHTML = `Player Score Is:${humanScore}`;
            document.getElementsByTagName("p")[1].innerHTML = `Computer Score Is:${computerScore}`;
        }
    })

})




// .innerHTML = `Player Score Is:${humanScore}`







