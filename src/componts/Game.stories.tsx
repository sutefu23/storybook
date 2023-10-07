import { StoryFn, Meta } from '@storybook/react'
import { Game } from './Game'

const meta = {
  title: 'Components/Game',
  component: Game
} as Meta
export default meta

const Template: StoryFn = () => {
  return <Game />
}

export const Default = Template.bind({})
