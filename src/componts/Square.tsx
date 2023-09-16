export const Square = ({ value, onSquareClick }: { value: string; onSquareClick: () => void }) => {
  return (
    <button onClick={onSquareClick} className="square">
      {value}
    </button>
  )
}
