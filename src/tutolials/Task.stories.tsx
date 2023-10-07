import React from 'react'
import { StoryFn } from '@storybook/react'
import Task from './Task'
import type { Props } from './Task'
export default {
  component: Task,
  title: 'Tutorials/Task'
}

const Template: StoryFn<Props> = (args) => <Task {...args} />

export const Default = Template.bind({})
Default.args = {
  task: {
    id: 1,
    title: 'test task',
    state: 'TASK_INDEX'
  }
}
const defaultTask = Default.args?.task
if (!defaultTask) {
  throw new Error('Default.args.task is undefined')
}
export const Pinned = Template.bind({})
Pinned.args = {
  task: {
    ...defaultTask,
    state: 'TASK_PINNED'
  }
}

export const Archived = Template.bind({})
Archived.args = {
  task: {
    ...defaultTask,
    state: 'TASK_ARCHIVED'
  }
}
