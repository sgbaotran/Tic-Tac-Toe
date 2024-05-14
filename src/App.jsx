
import Player from './components/Player'

import GameBoard from './components/GameBoard'

import Log from './components/Log'

import { useState } from 'react'

function getCurrentPlayer(moveList) {
  let currentPlayer = 'X'
  if (moveList.length > 0 && moveList[0].player === 'X') {
    currentPlayer = 'O'
  }
  return currentPlayer
}

function App() {

  // const [activePlayer, setActivePlayer] = useState('X')
  
  const [moveList, setMoveList] = useState([])

  const activePlayer = getCurrentPlayer(moveList)

  function handleSelectCell(rowIndex, colIndex) {
    // setActivePlayer((currentPlayer) => currentPlayer === 'X' ? 'O' : 'X')
    setMoveList(oldMoveList => {

      let player = oldMoveList.length > 0 && oldMoveList[0].player === 'X' ? 'O' : 'X'
      const newMoveList = [
        { cell: { row: rowIndex, column: colIndex }, player: player },
        ...oldMoveList
      ];
      return newMoveList
    })
  }

  return (
    <main >
      <div id='game-container'>
        <ol id='players' className='highlight-player'>

          <Player initialName='Player 1' isActive={activePlayer === 'X'} symbol='X' veteran='yes' country='Vietnam' />

          <Player initialName='Player 2' isActive={activePlayer === 'O'} symbol='O' country='USA' veteran='yes' />

        </ol>

        <GameBoard moves={moveList} handleSelectCell={handleSelectCell} />
      </div>
      <Log logs={moveList} />
    </main>
  )
}

export default App
