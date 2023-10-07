import TaskList, { Props } from './TaskList'
import * as TaskStories from './Task.stories'
import { Meta, StoryFn } from '@storybook/react'

export default {
  component: TaskList,
  title: 'Tutorials/TaskList',
  decorators: [(story) => <div style={{ padding: '3rem' }}>{story()}</div>]
} satisfies Meta

const Template: StoryFn<Props> = (args) => <TaskList {...args} />

export const Default = Template.bind({})
const defaultTask = TaskStories.Default.args
if (!defaultTask) {
  throw new Error('TaskStories.Default.args is undefined')
}

Default.args = {
  tasks: [
    { ...defaultTask.task, id: 1, title: 'Task 1' },
    { ...defaultTask.task, id: 2, title: 'Task 2' },
    { ...defaultTask.task, id: 3, title: 'Task 3' },
    { ...defaultTask.task, id: 4, title: 'Task 4' },
    { ...defaultTask.task, id: 5, title: 'Task 5' },
    { ...defaultTask.task, id: 6, title: 'Task 6' }
  ]
}

const defaultArgTasks = Default.args?.tasks
if (!defaultArgTasks) {
  throw new Error('Default.args.tasks is undefined')
}

export const WithPinnedTasks = Template.bind({})

WithPinnedTasks.args = {
  tasks: [...defaultArgTasks.slice(0, 5), { id: 6, title: 'Task 6 (pinned)', state: 'TASK_PINNED' }]
}

export const Loading = Template.bind({})
Loading.args = {
  tasks: [],
  loading: true
}

export const Empty = Template.bind({})
Empty.args = {
  ...Loading.args,
  loading: false
}
