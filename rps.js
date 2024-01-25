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

const selectRock = document.querySelector('#rock')
const selectPaper= document.querySelector('#paper')
const selectScissors= document.querySelector('#scissors')
const score=document.querySelector('#score')
const display=document.querySelector('#display')
let numberOfWins=0
let numberOfLosses=0
let maxWins=5
score.textContent= `${numberOfWins}-${numberOfLosses}`
display.textContent=' '
function updateScore(playerSelection){
  let thisRound=round(playerSelection)
  if (thisRound[1]=="win"){
    numberOfWins=++numberOfWins

  }
  else if (thisRound[1]=="loss"){
    numberOfLosses=++numberOfLosses
  }
  score.textContent= `${numberOfWins}-${numberOfLosses}`
  display.textContent=`${thisRound[0]}`

    if (numberOfWins>=maxWins){
      const winpanel=document.createElement('div')
      winpanel.textContent="You won the game! Congratulations!"
      display.appendChild(winpanel)
      const replay=document.createElement('button')
      replay.textContent='Replay'
      winpanel.appendChild(replay)
      replay.addEventListener('click',()=>{
        display.textContent=" "
        numberOfWins=0
        numberOfLosses=0
        score.textContent= `${numberOfWins}-${numberOfLosses}`
        winpanel.remove()
      })
    }
    else if (numberOfLosses>=maxWins){
      const losspanel=document.createElement('div')
      losspanel.textContent="You lost the game! Better luck next time."
      display.appendChild(losspanel)
      const replay=document.createElement('button')
      replay.textContent='Replay'
      losspanel.appendChild(replay)
      replay.addEventListener('click',()=>{
        display.textContent=" "
        numberOfWins=0
        numberOfLosses=0
        score.textContent= `${numberOfWins}-${numberOfLosses}`
        winpanel.remove()
      })
    }
}

selectRock.addEventListener('click', ()=>{
  updateScore('rock')
})
selectPaper.addEventListener('click', ()=>{
  updateScore('paper')
})
selectScissors.addEventListener('click', ()=>{
  updateScore('scissors')
})