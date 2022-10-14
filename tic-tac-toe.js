window.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('#board');
    const squares = Array.from(container.children);
    const BOARD_LENGTH = 9;

    let board = [[],[]];
    let currentPlayer = 'X';

    squares.forEach((square, index) => {
        // Adding squares to screen
        square.classList.add('square');

        // Alternating between X and O on each click
        square.addEventListener('click', () => changePlayerOnClick(square, index));
    });

    // If there's nothing in the HTML play otherwise leave it as is
    const changePlayerOnClick = (square, index) => {
        if(!square.innerText) play(square, index);
    }; 

    // Play either X or O and add to board array
    const play = (square, index) => {
        square.innerText = currentPlayer;
        square.classList.add(`${currentPlayer}`);
        (currentPlayer == 'X') ? board[0].push(index) : board[1].push(index);
        currentPlayer = currentPlayer == 'X' ? 'O' : 'X';
    }

});