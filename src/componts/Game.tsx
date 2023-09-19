import { useState } from 'react'
import { Board } from './Board'

export type Player = 'O' | 'X'

export const Game = () => {
  const [xIsNext, setXIsNext] = useState(true)
  const [history, setHistory] = useState([Array(9).fill(null)])

  const currentSquares = history[history.length - 1]

  const handlePlay = (nextSquares: string[]) => {
    setHistory([...history, nextSquares])
    setXIsNext(!xIsNext)
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
    </div>
  )
}
