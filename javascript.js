// let computerSelection = getComputerChoice();
// let playerSelection = getPlayerChoice();
// function getComputerChoice() {
//       let options = ["rock", "scissors", "paper"];
//       return  options[Math.floor(Math.random() * options.length)];   
// }

// function getPlayerChoice() {
//      return prompt("Please enter your desired choice ");
      
// }


let playerSelection = function() {
      
  return prompt("Choose your weapon - Rock, Paper or Scissors?");
};
let computerSelection = function computerPlay() {
      let options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random()*options.length)];
};


// function playRound(playerSelection, computerSelection) {
//       // your code here!
//       if (playerSelection.toLowerCase() == "rock") {
//             if (computerSelection == "rock") {
//               console.log( "You draw!  You both chose \"Rock\"!" );
//               return;
//             } else {
//               if (computerSelection == "paper") {
//                 console.log( "You lose!  \"Paper\" beats \"Rock\"!" );
//                 return false;
//               } else {
//                 if (computerSelection == "scissors") {
//                   console.log( "You win!  \"Rock\" beats \"Scissors\"!" );
//                   return true;
//                 }
//               }
//             }
//           }
//           if (playerSelection.toLowerCase() == "paper") {
//             if (computerSelection == "paper") {
//               console.log( "You draw!  You both chose \"Paper\"!" );
//               return;
//             } else {
//               if (computerSelection == "rock") {
//                 console.log( "You win!  \"Paper\" beats \"Rock\"!" );
//                 return true;
//               } else {
//                 if (computerSelection == "scissors") {
//                   console.log( "You lose!  \"Scissors\" beats \"Paper\"!" );
//                   return false;
//                 }
//               }
//             }
//           }
//           if (playerSelection.toLowerCase() == "scissors") {
//             if (computerSelection == "scissors") {
//               console.log( "You draw!  You both chose \"Scissors\"!" );
//               return;
//             } else {
//               if (computerSelection == "rock") {
//                 console.log( "You lose!  \"Rock\" beats \"Scissors\"!" );
//                 return false;
//               } else {
//                 if (computerSelection == "paper") {
//                   console.log( "You win!  \"Scissors\" beats \"Paper\"!" );
//                   return true;
//                 }
//               }
//             }
//           } else {
//             if (playerSelection.toLowerCase() != "rock" || "paper" || "scissors") {
//               console.log( "This is not a choice.  Choose \"Rock\", \"Paper\" or \"Scissors\"!" );
//             }
//           }

      
//     }


function playRound(playerSelection, computerSelection) {

      if (playerSelection.toLowerCase() == "rock") {
        if (computerSelection == "rock") {
          console.log( "You draw!  You both chose \"Rock\"!" );
          return;
        } else {
          if (computerSelection == "paper") {
            console.log( "You lose!  \"Paper\" beats \"Rock\"!" );
            return false;
          } else {
            if (computerSelection == "scissors") {
              console.log( "You win!  \"Rock\" beats \"Scissors\"!" );
              return true;
            }
          }
        }
      }
      if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection == "paper") {
          console.log( "You draw!  You both chose \"Paper\"!" );
          return;
        } else {
          if (computerSelection == "rock") {
            console.log( "You win!  \"Paper\" beats \"Rock\"!" );
            return true;
          } else {
            if (computerSelection == "scissors") {
              console.log( "You lose!  \"Scissors\" beats \"Paper\"!" );
              return false;
            }
          }
        }
      }
      if (playerSelection.toLowerCase() == "scissors") {
        if (computerSelection == "scissors") {
          console.log( "You draw!  You both chose \"Scissors\"!" );
          return;
        } else {
          if (computerSelection == "rock") {
            console.log( "You lose!  \"Rock\" beats \"Scissors\"!" );
            return false;
          } else {
            if (computerSelection == "paper") {
              console.log( "You win!  \"Scissors\" beats \"Paper\"!" );
              return true;
            }
          }
        }
      } else {
        if (playerSelection.toLowerCase() != "rock" || "paper" || "scissors") {
          console.log( "This is not a choice.  Choose \"Rock\", \"Paper\" or \"Scissors\"!" );
        }
      }
    }

     function game() {      
      let playerWins = 0;
      let computerWins = 0;
      let playRoundReturn = 0;
      let tieWins=0;
        for (let round = 0; round <= 4; round++) {
            // your code here!
            playRoundReturn = playRound(playerSelection(), computerSelection());
            if ( playRoundReturn === true ) {
            playerWins++;
            } else {
            if ( playRoundReturn === false ) {
            computerWins++;
            }
            else
            tieWins++
            }
      }
      if ( playerWins < computerWins ) {
      console.log( "You lose! The Computer has beaten you at the game.");
      } else {
      if ( playerWins > computerWins) {
            console.log( "You win! You have beaten the computer at the game.");
      }
      else
         console.log("You draw! you have ended the match on a tie")
            }
      console.log( "Your final score is " +playerWins +" wins " +computerWins +" loses and " +tieWins +" draws.\n -------");

      Wins= playerWins+computerWins+tieWins;
      
      console.log("You played this game " + Wins +" times.\n -------\nGame over."); 
     }
     
  game();

// function game() {
//       let round = 1;
//       let playerWins = 0;
//       let computerWins = 0;
//       let playRoundReturn = 0;
    
//       while ( round <= 5 ) {
    
//         playRoundReturn = playRound(playerSelection(), computerSelection());
//         if ( playRoundReturn === true ) {
//           playerWins++;
//         } else {
//           if ( playRoundReturn === false ) {
//             computerWins++;
//           }
//         }
//         round++;
//       }
//       if ( playerWins < computerWins ) {
//         console.log( "You lose! The Computer has beaten you at the game.");
//       } else {
//         if ( playerWins > computerWins) {
//           console.log( "You win! You have beaten the computer at the game.");
//         }
//       }
//     }
    
//     game();
    

