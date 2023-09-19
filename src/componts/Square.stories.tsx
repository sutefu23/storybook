import { useState } from 'react'
import { StoryObj, StoryFn, Meta } from '@storybook/react'
import { Square, Props } from './Square'

const meta = {
  title: 'Components/Square',
  component: Square
} as Meta
export default meta

const Template: StoryFn<Props> = (args) => {
  const [value, setValue] = useState('X')

  const handleSquareClick = () => {
    setValue(value === 'X' ? 'O' : 'X')
  }

  return <Square {...args} value={value} onSquareClick={handleSquareClick} />
}

export const Default = Template.bind({})

export const Triangle: StoryObj<Props> = {
  args: {
    value: '△'
  }
}
