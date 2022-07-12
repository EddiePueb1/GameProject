const marvinOne ='x';
const marvinTwo ='o';



const startButton = document.getElementById('startButton');
const board = document.getElementById('board');
const boxes = document.querySelectorAll('[boxes]');
let P2_Turn = false;


const startGame = () => {
  P2_Turn = false;
  boxes.forEach((box => {
    box.classList.remove(marvinTwo);
    box.classList.remove(marvinOne);
    box.addEventListener('click', handleClick, {once : true})
  }))
  console.log('started')

   
}

const handleClick = (e) => {
  const box = e.target;
  var currentPlayer = P2_Turn ? marvinTwo : marvinOne;
  

  play(box, currentPlayer);
  changePlayer();
  

}

const play = (box, currentPlayer ) => {
  box.classList.add(currentPlayer);
}

const changePlayer = () => {
  P2_Turn = !P2_Turn;
}

startButton.addEventListener('click', startGame);