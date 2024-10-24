document.addEventListener('DOMContentLooaded', () =>{
    const squares = document.querySelectorAll('.game-board div');
    squares.forEach((square)=>{
        square.classList.add('square');
    })

})