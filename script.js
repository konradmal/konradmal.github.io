const gameBoard = document.querySelector('.game-board');
const statusDisplay = document.querySelector('.game-status');
const restartBtn = document.querySelector('.restart-btn');

let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;
let singlePlayerMode = false;

const winningMessage = () => `Gratulacje, wygrał gracz ${currentPlayer}!`;
const drawMessage = () => `Remis!`;
const currentPlayerTurn = () => `Teraz ruch wykonuje gracz ${currentPlayer}`;

function handleCellClick(cell, index) {
    gameState[index] = currentPlayer;
    cell.innerText = currentPlayer;
    cell.style.color = currentPlayer === "X" ? "red" : "blue";
    const winningCombination = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    let roundWon = false;
    for (let i = 0; i < winningCombination.length; i++) {
        const winningRow = winningCombination[i];
        let a = gameState[winningRow[0]];
        let b = gameState[winningRow[1]];
        let c = gameState[winningRow[2]];
        if (a === "" || b === "" || c === "") {
