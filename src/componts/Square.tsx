export type Props = {
  value: string
  onSquareClick: () => void
}

export const Square = ({ value, onSquareClick }: Props) => {
  return (
    <button onClick={onSquareClick} className="square" >
      {value}
    </button>
  )
}
