import { StoryFn, Meta } from '@storybook/react'
import { StatusBar, Props } from './StatusBar'

const meta = {
  title: 'Components/StatusBar',
  component: StatusBar
} as Meta
export default meta

const Template: StoryFn<Props> = (args) => <StatusBar {...args} />

export const Default = Template.bind({})
Default.args = {
  status: 'Next Player: O'
}

export const Win = Template.bind({})
Win.args = {
  status: 'Winner: X'
}
export const Draw = Template.bind({})
Draw.args = {
  status: 'Draw!'
}
