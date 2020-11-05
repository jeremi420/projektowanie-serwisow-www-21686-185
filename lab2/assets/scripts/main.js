"use strict";

const rows = 3;
const columns = 3;
const initialState = {
    squares: Array(rows * columns).fill(null),
    xIsNext: true,
};
var state = initialState;
let main = document.getElementsByTagName("main")[0];
main.style.margin = "auto";
main.style.backgroundColor = "#212121";
main.style.height = "100vh";
main.style.width = "100vw";
main.style.position = "relative";
main.style.textAlign = "center";
main.style.color = "white";
let modal = document.createElement("div");
modal.style.position = "absolute";
modal.style.top = "50%";
modal.style.left = "50%";
modal.style.transform = "translate(-50%, -50%)";
modal.style.minHeight = "260px";
main.append(modal);
let title = document.createElement("h4");
title.textContent = "Kółko i krzyżyk";
modal.append(title);
let status = document.createElement("div");
status.textContent = "Następny gracz: X";
modal.append(status);
const onClick = (value) => (e) => {
    let squares = state.squares.slice();
    if (state.squares[value] || calculateWinner(squares)) return;
    const newValue = state.xIsNext ? "X" : "O";
    squares[value] = newValue;
    e.target.textContent = newValue;
    state = {
        ...state,
        squares,
        xIsNext: !state.xIsNext,
    };
    const winner = calculateWinner(squares);
    if (winner || state.squares.indexOf(null) === -1) {
        if (winner) {
            status.innerHTML = "Wygrywa: " + winner;
        } else {
            status.innerHTML = "Remis";
        }
        let reset = document.createElement("button");
        reset.textContent = "reset";
        reset.className = "btn btn-info";
        reset.onclick = () => {
            state = {
                ...state,
                squares: Array(rows * columns).fill(null),
                xIsNext: true,
            };
            let buttons = document.getElementsByClassName("btn btn-dark");
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].textContent = null;
            }
            status.innerHTML = "Następny gracz: X";
            main.removeChild(reset);
        };
        modal.append(reset);
    } else {
        status.innerHTML = "Następny gracz: " + (state.xIsNext ? "X" : "O");
    }
};
function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (
            squares[a] &&
            squares[a] === squares[b] &&
            squares[a] === squares[c]
        ) {
            return squares[a];
        }
    }
    return null;
}
for (let i = 0; i < rows; i++) {
    let row = document.createElement("div");
    row.style.display = "inline-block";
    for (let j = 0; j < columns; j++) {
        let square = document.createElement("button");
        square.className = "btn btn-dark";
        square.style.minHeight = "38px";
        square.style.minWidth = "38px";
        square.style.margin = "5px";
        square.style.float = "left";
        square.onclick = onClick(i * columns + j);
        row.append(square);
    }
    modal.append(row);
    modal.append(document.createElement("br"));
}
