window.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('#board');
    const squares = Array.from(container.children);

    squares.forEach((square, index) => {
        // Adding squares to screen
        square.classList.add('square');

    });
});