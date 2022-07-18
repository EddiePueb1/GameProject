const playerOne ='x';
const playerTwo ='o';

const possibleWins =[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]

var draw = 0;

const startButton = document.getElementById('startButton');
const board = document.getElementById('board');
const boxes = document.querySelectorAll('[boxes]');
const player = document.querySelectorAll('player')
let P2_Turn = false;


const startGame = () => {
  P2_Turn = false;
  boxes.forEach((box => {
    box.classList.remove(playerTwo);
    box.classList.remove(playerOne);
    box.addEventListener('click', handleClicks, {once : true})
  }))
  console.log('started')

  draw = 0;


   
}

const handleClicks = (e) => {
  const box = e.target;
  var currentPlayer = P2_Turn ? playerTwo : playerOne;

  play(box, currentPlayer);

  console.log(box)
  if (checkWin(currentPlayer)) {
    console.log(`${currentPlayer} wins`);
    stopInput();
  } else if (checkDraw()) {
    console.log('draw')
    stopInput();
  } 
  changePlayer();
  

}

const stopInput = () => {
  boxes.forEach(box => {
    box.removeEventListener('click', handleClicks);
  })
}

const play = (box, currentPlayer ) => {

  box.classList.add(currentPlayer);
  var player = document.createElement('div');
  player.classList.add('player')
  player.classList.add(currentPlayer)
  box.appendChild(player)

  draw++;
}

const changePlayer = () => {
  P2_Turn = !P2_Turn;
}

const checkWin  = (currentPlayer) => {
  return possibleWins.some(combination => {
    return combination.every(index => {
      return boxes[index].classList.contains(currentPlayer);
    })
  })
}

const checkDraw = () => {
  return (draw ===  9) ? true : false;
}

const displayText = () => {
  
}

startButton.addEventListener('click', startGame);