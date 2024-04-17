export type Task_type = {
  id?: number
  taskName?: string
  completed?: boolean
}

export interface TaskScript {
  type?: string
  payload: Task_type
}

export const ACTION = {
  ADD_TASK: 'addTask',
  MARK_TASK: 'markTask',
  DELETE_TASK: 'deleteTask',
}

const TaskReducer = (tasks: Task_type[], action: TaskScript) => {
  switch (action.type) {
    case ACTION.ADD_TASK:
      return [
        ...tasks,
        {
          id: Date.now(),
          taskName: action.payload.taskName,
          completed: action.payload.completed,
        },
      ]
    case ACTION.MARK_TASK:
      return tasks.map((t) => {
        if (t.id === action.payload.id) {
          return { ...t, completed: !t.completed }
        }
        return t
      })
    case ACTION.DELETE_TASK:
      return tasks.filter((t) => t.id !== action.payload.id)

    default:
      return tasks
  }
}

export default TaskReducer
