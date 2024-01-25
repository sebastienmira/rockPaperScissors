    const items =["rock", "paper", "scissors"]

    function getComputerChoice(){
      return items[Math.floor(Math.random()*3)]
    }

    function round(playerSelection=false, computerSelection=false){
      if (playerSelection==false){
        playerSelection=prompt("Enter your weapon:")
      }
      playerSelection=playerSelection.toLowerCase();

      if (computerSelection==false){
        computerSelection=getComputerChoice()
      };

      console.log(`You played: ${playerSelection}`)
      console.log(`The computer played: ${computerSelection}`)

      let value=(items.indexOf(playerSelection)-items.indexOf(computerSelection));// checks subracts the position in the list, if -1 or +2 = defeat, if +1 or -2 win

      if (value===1 || value===-2){
        return [`You win this round! ${playerSelection} beats ${computerSelection}`, "win"]
      }
      else if (value===-1 || value===2){
        return [`You loose this round! ${computerSelection} beats ${playerSelection}`,"loss"]
      }
      else if (value===0){
        return [`Withdrawal! You both played ${playerSelection}`,"withdrawal"]
      } 
    }


    function game(maxWins){
      let numberOfWins= 0
      let numberOfLosses=0
      while (numberOfWins<maxWins&&numberOfLosses<maxWins){
        let thisRound=round()
        thisRound
        if (thisRound[1]=="win"){
          numberofWins=++numberOfWins
          console.log(thisRound[0], `Your Score: ${numberOfWins}; Computer Score: ${numberOfLosses}`)
        }
        else if (thisRound[1]=="loss"){
          numberOfLosses=++numberOfLosses
          console.log(thisRound[0], `Your Score: ${numberOfWins}; Computer Score: ${numberOfLosses}`)
        }
        else if (thisRound[1]=="withdrawal"){
          console.log(thisRound[0],`Your Score: ${numberOfWins}; Computer Score: ${numberOfLosses}`)
        }
        else{
          console.log("Something went wrong")
        }
        if (numberOfWins==maxWins){
          return "You won the game! Congratulations!"
        }
        if (numberOfLosses==maxWins){
          return "You lost the game! Better luck next time."
        }
      }
        
      
    }



    const selectRock = document.querySelector('.rock')
    const selectPaper=document.querySelector('.paper')
    const selectScissors=document.querySelector('.scissors')
    let numberOfLosses=0
    let numberOfWins=0
    const score=document.querySelector('#score')
    score.textContent= `${numberOfWins}-${numberOfLosses}`

    function scoreUpdate(playerSelection){
      let thisRound=round(playerSelection)
      thisRound

      if (thisRound[1]=="win"){
        numberOfWins=++numberOfWins
      }
      else if (thisRound[1]=="loss"){
        numberOfLosses=++numberOfLosses
      }
      else if (thisRound[1]=="withdrawal"){
      }  
    }

    selectRock.addEventListener('click', () =>{
      scoreUpdate("rock")
    })

    selectPaper.addEventListener('click', scoreUpdate("paper"))

    selectScissors.addEventListener('click', scoreUpdate("scissors"))

