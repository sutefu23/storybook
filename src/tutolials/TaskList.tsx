import React from 'react'

import Task from './Task'

export type Task = {
  id: number
  title: string
  state?: string
}
export type Props = {
  loading: boolean
  tasks: Task[]
  onPinTask: () => void
  onArchiveTask: () => void
}

export default function TaskList({ loading, tasks, onPinTask, onArchiveTask }: Props) {
  const events = {
    onPinTask,
    onArchiveTask
  }

  if (loading) {
    return <div className="list-items">loading</div>
  }

  if (tasks.length === 0) {
    return <div className="list-items">empty</div>
  }

  return (
    <div className="list-items">
      {tasks.map((task) => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </div>
  )
}
