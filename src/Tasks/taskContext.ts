import React from 'react'
import { TaskScript, Task_type } from './TaskReducer'

type TasksContextType = {
  tasks: Task_type[]
  dispatch: React.Dispatch<TaskScript>
}

const TasksContext = React.createContext<TasksContextType>(
  {} as TasksContextType
)

export default TasksContext
