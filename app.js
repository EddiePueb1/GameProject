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



const startButton = document.getElementById('startButton');
const board = document.getElementById('board');
const boxes = document.querySelectorAll('[boxes]');
let P2_Turn = false;


const startGame = () => {
  P2_Turn = false;
  boxes.forEach((box => {
    box.classList.remove(playerTwo);
    box.classList.remove(playerOne);
    box.addEventListener('click', handleClick, {once : true})
  }))
  console.log('started')

   
}

const handleClick = (e) => {
  const box = e.target;
  var currentPlayer = P2_Turn ? playerTwo : playerOne;

  play(box, currentPlayer);



  changePlayer();
  

}

const play = (box, currentPlayer ) => {
  box.classList.add(currentPlayer);
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

startButton.addEventListener('click', startGame);