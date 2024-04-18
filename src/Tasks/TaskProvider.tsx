import React, { ReactNode, useReducer } from 'react'
import TasksContext from './taskContext'
import TaskReducer from './TaskReducer'

type Props = {
  children: ReactNode
}

const TaskProvider = ({ children }: Props) => {
  const [tasks, dispatch] = useReducer(TaskReducer, [])
  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TasksContext.Provider>
  )
}

export default TaskProvider
