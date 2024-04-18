import React, { ReactNode, useReducer } from 'react'
import TasksContext from '../context/taskContext'
import TaskReducer from '../reducers/TaskReducer'

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
