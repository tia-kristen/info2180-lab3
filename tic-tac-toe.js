window.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('#board');
    const squares = Array.from(container.children);
    const status = document.querySelector('#status');
    const resetBtn = document.querySelector('.btn');
    const BOARD_LENGTH = 9;

    let board = [[],[]];
    let currentPlayer = 'X';
    let gameInProgress = true; // flag to keep track of whether or not game has ended
    let originalStatus = status.innerText;

    // All possible combinations to win:
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    squares.forEach((square, index) => {
        // Adding squares to screen
        square.classList.add('square');

        // Adding hover effect
        square.addEventListener('mouseover', () => {square.classList.add('hover')});
        square.addEventListener('mouseout', () => {square.classList.remove('hover');});

        // Alternating between X and O on each click
        square.addEventListener('click', () => changePlayerOnClick(square, index));
    });

    // If there's nothing in the HTML play otherwise leave it as is
    const changePlayerOnClick = (square, index) => {
        if(!square.innerText && gameInProgress) play(square, index);
    }; 

    // Play either X or O and add to board array
    const play = (square, index) => {
        square.innerText = currentPlayer;
        square.classList.add(`${currentPlayer}`);
        (currentPlayer == 'X') ? board[0].push(index) : board[1].push(index);
        currentPlayer = currentPlayer == 'X' ? 'O' : 'X';
        checkWinner();
    }

    // Check if any player meets conditions to win the game
    const checkWinner = () => {
        winningConditions.forEach((winningCondition, index) => {
            if (winningCondition.every(el => board[0].includes(el))) {
                gameInProgress = false;
                status.innerHTML = 'Congratulations! X is the Winner!';
                status.classList.add('you-won');
            }
            else if (winningCondition.every(el => board[1].includes(el))) {
                gameInProgress = false;
                status.innerHTML = 'Congratulations! O is the Winner!';
                status.classList.add('you-won');
            } 
            else if (board[0].length + board[1].length == BOARD_LENGTH){
                gameInProgress = false;
                status.innerHTML = 'There was a DRAW!';
                status.classList.add('you-won');
            }
        });
    } 

    const resetGame = () => {
        gameInProgress = true;
        status.classList.remove('you-won');
        status.innerText = originalStatus;
        currentPlayer = 'X';
        board = [[],[]];

        squares.forEach((square)=> {
            square.innerHTML = '';
            square.className = 'square'; // Remove all classes except square class
        });
    }

    resetBtn.addEventListener('click', resetGame);
});