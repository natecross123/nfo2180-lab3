document.addEventListener('DOMContentLoaded', () => {

    const squares = document.querySelectorAll('#board > div');
    const statusDisplay = document.getElementById('status');
    const newGameButton = document.querySelector('.btn'); 
    let currentplayer = 'X';
    let gamestate = Array(9).fill(null);

    squares.forEach((square,index)=>{
        square.classList.add('square');
        
        square.addEventListener('click',function(){
        handleclick(square,index);
    });
    square.addEventListener('mouseenter', () => square.classList.add('hover'));
    square.addEventListener('mouseleave', () => square.classList.remove('hover'));
    
    });
function handleclick(element,index){
    if(gamestate[index] || checkWinner()) return;
    gamestate[index] = currentplayer;
    element.textContent = currentplayer;
    element.classList.add(currentplayer);

    const winner = checkWinner();
    if(winner) {
        statusDisplay.textContent = `Congrats!${winner} is the Winner!`
        statusDisplay.classList.add('YUH WIN')
    }else if (isDraw()){
     statusDisplay.textContent = `It's a Draw :( `
    statusDisplay.classList.remove('YUH WIN')
    }
    else {
        currentplayer = currentplayer === 'X' ? 'O' : 'X';
        statusDisplay.textContent = `It's ${currentplayer}'s turn`;

    }
  }

  function checkWinner(){
    const winningcombo=[
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ];
    for(let combination of winningcombo){
        const[a,b,c] = combination;
        if (gamestate[a]&& gamestate[a]===gamestate[b]&&gamestate[a]===gamestate[c] ) {
            return gamestate[a];
        }
       
    }
    return null;
  }
  function isDraw() {
    return gamestate.every(square => square !== null); 
    }

    newGameButton.addEventListener('click', () => {
        gamestate.fill(null); 
        squares.forEach(square => {
            square.textContent = '';
            square.classList.remove('X', 'O'); 
        });

    currentplayer = 'X'; 
    statusDisplay.textContent = 'Move your mouse over a square and click to play an X or an O.';
    statusDisplay.classList.remove('YUH WIN');
    
    });

});