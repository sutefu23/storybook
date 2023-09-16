import { useState } from 'react'
import { Board } from './Board'

export type Player = 'O' | 'X'
type GameMessage = `${Player}が勝ちました。`

export const Game = () => {
  const [gameInfos, setGameInfos] = useState<GameMessage[]>([])
  const [xIsNext, setXIsNext] = useState(true)
  const [history, setHistory] = useState([Array(9).fill(null)])
  const currentSquares = history[history.length - 1]

  const handlePlay = (nextSquares: string[]) => {
    setHistory([...history, nextSquares])
    setXIsNext(!xIsNext)
  }

  const handleGameOver = (winner: Player) => {
    setGameInfos([...gameInfos, `${winner}が勝ちました。`])
  }
  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} onGameOver={handleGameOver} />
      </div>
      <div className="game-info">
        <ol>
          {gameInfos.map((info, i) => (
            <li key={i}>{info}</li>
          ))}
        </ol>
      </div>
    </div>
  )
}
