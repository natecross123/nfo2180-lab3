document.addEventListener('DOMContentLooaded', () =>{
    const squares = document.querySelectorAll('.game-board div');
    const statusDisplay = document.getElementById('status');
    let currentplayer = 'x';
    let gamestate = Array(9).fill(null);

    squares.forEach((square,index)=>{
        square.classList.add('square');
        
    square.addEventListener('click',function(){
        handleclick(square,index);
    });

});
function handleclick(element,index){
    if(gamestat[index] || checkWinner()) return;

    gamestate[index] = currentplayer;
    element.textcontent = currentplayer;
    element.classList.add(currentplayer);

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    statusDisplay.textContent = `It's ${currentPlayer}'s turn`;

    }


});