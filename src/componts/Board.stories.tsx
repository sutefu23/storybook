import { useState } from 'react'
import { StoryFn, StoryObj, Meta } from '@storybook/react'
import { Board, Props } from './Board'

const meta = {
  title: 'Components/Board',
  component: Board
} as Meta
export default meta

const Template: StoryFn<Props> = (args) => {
  const [xIsNext, setXIsNext] = useState(false)
  const [history, setHistory] = useState([Array(9).fill(null)])
  const currentSquares = history[history.length - 1]
  const handlePlay = (nextSquares: string[]) => {
    setHistory([...history, nextSquares])
    setXIsNext(!xIsNext)
  }

  return <Board {...args} xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
}

export const Default = Template.bind({})

export const FilledTriangle: StoryObj<Props> = {
  args: {
    ...Default.args,
    squares: Array(9).fill('△')
  }
}
