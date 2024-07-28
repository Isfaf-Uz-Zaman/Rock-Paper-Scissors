var humanScore = 0;
var computerScore = 0;


function playGame() {

    for (let i = 0; i <= 5; i++) {
        let UserValue = prompt("Please enter your choice 1= Rock ,2 = Paper, 3 = Scissors");
        function playRound(humanChoice, computerChoice) {
            if (humanChoice == computerChoice) {
        
                humanScore = humanScore;
                computerScore = computerScore;
        
        
            }
        
            // Paper VS Rock
            else if (humanChoice == "Rock" && computerChoice == "Paper") {
        
                computerScore = computerScore + 1;
            }
            else if (humanChoice == "Paper" && computerChoice == "Rock") {
        
                humanScore = humanScore + 1;
            }
        
            // Scissors VS Rock
        
            else if (humanChoice == "Scissors" && computerChoice == "Rock") {
        
                computerScore = computerScore + 1;
            }
            else if (humanChoice == "Rock" && computerChoice == "Scissors") {
        
                humanScore = humanScore + 1;
            }
        
            // Scissors VS Paper
            else if (humanChoice == "Paper" && computerChoice == "Scissors") {
        
                computerScore = computerScore + 1;
            }
            else if (humanChoice == "Scissors" && computerChoice == "Paper") {
        
                humanScore = humanScore + 1;
            }
        }
        
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        // This part gives What is chosen by computer
        function getComputerChoice() {
            let computerValue = Math.floor(Math.random() * 10);

            //  MAke a logical rule  0--4 = Rock
            // 5-7= Paper 
            // 8-10= Scissors

            if (0 <= computerValue && computerValue <= 4) {
                return "Rock";
            } else if (5 <= computerValue && computerValue <= 7) {
                return "Paper";
            }
            else {
                return "Scissors";
            }


        }




        var computerValue1 = getComputerChoice()


        


        function getHumanChoice() {

            if (UserValue == 1) {
                return "Rock";
            } else if (UserValue == 2) {
                return "Paper";
            }
            else if (UserValue == 3) {
                return "Scissors";
            }
        }
        let HumanValue1 = getHumanChoice()

        playRound(HumanValue1, computerValue1);


    }
}
playGame();


console.log("THe score of Human is",humanScore);

console.log("THe score of Computer is " ,computerScore);

