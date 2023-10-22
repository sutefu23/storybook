import { Square } from './Square'
import { StatusBar } from './StatusBar'
import type { Player, Status } from './Game'

export type Props = {
  xIsNext: boolean
  squares: Player[]
  onPlay: (squares: Player[]) => void
  rowCount?: number
  colCount?: number
}
export const Board = ({ xIsNext, squares, onPlay, rowCount = 3, colCount = 3 }: Props) => {
  const winner = calculateWinner(squares)
  let status: Status
  if (winner) {
    status = `Winner: ${winner}`
  } else {
    const isFilledSquare = squares.filter((s) => !!s).length == rowCount * colCount //ゲーム終了判定
    if (isFilledSquare) {
      status = 'Draw!'
    } else {
      status = `Next Player: ${xIsNext ? 'X' : 'O'}`
    }
  }

  const handleClick = (i: number) => {
    if (squares[i] || calculateWinner(squares)) {
      return
    }

    const nextSquares = squares.slice()
    if (xIsNext) {
      nextSquares[i] = 'X'
    } else {
      nextSquares[i] = 'O'
    }
    onPlay(nextSquares)
  }

  return (
    <>
      <StatusBar status={status} />
      {[...new Array(rowCount)].map((_, i) => (
        <div key={i} className="board-row">
          {[...new Array(colCount)].map((_, j) => {
            const index = colCount * i + j
            return <Square key={j} value={squares[index]} onSquareClick={() => handleClick(index)} />
          })}
        </div>
      ))}
    </>
  )
}
function calculateWinner(squares: Player[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}
