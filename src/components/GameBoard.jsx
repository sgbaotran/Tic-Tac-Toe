import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],

]

export default function GameBoard({ handleSelectCell, moves }) {
    let gameboard = initialGameBoard

    for (const move of moves) {

        const { cell, player } = move
        const { row, column } = cell

        gameboard[row][column] =  player === 'X' ? 'O' : 'X'
    }


    // const [gameBoard, setGameBoard] = useState(initialGameBoard)

    // const handleSelectCell = (rowIndex, colIndex) => {
    //     if (gameBoard[rowIndex][colIndex] == null) {
    //         setGameBoard(prevGameBoard => {
    //             const newGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])]
    //             newGameBoard[rowIndex][colIndex] = activePlayerSymbol
    //             return newGameBoard
    //         })
    //         handleSelectCell(rowIndex + 1, colIndex + 1)
    //     }
    // }

    return (
        <ol id="game-board">
            {gameboard.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((cell, colIndex) => <li key={colIndex}>
                        <button disabled={cell != null} onClick={() => handleSelectCell(rowIndex, colIndex)}>
                            {cell}
                        </button>
                    </li>)}
                </ol>
            </li>)}
        </ol>
    );
}

