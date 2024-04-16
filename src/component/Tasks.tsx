import { useReducer, useState } from 'react'
import Task from '../component/Task'
import TaskReducer from '../reducers/TaskReducer'

export type Task_type = {
  id?: number
  taskName?: string
  completed?: boolean
}

export const ACTION = {
  ADD_TASK: 'addTask',
  MARK_TASK: 'markTask',
  DELETE_TASK: 'deleteTask',
}
const Tasks = () => {
  const [taskName, setTaskName] = useState('')

  const [tasks, dispatch] = useReducer(TaskReducer, [])
  console.log(tasks)

  return (
    <>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            dispatch({
              type: 'addTask',
              payload: { taskName: taskName, completed: false },
            })
            setTaskName('')
          }}
        >
          <input
            type="text"
            value={taskName}
            onChange={(i) => setTaskName(i.target.value)}
          />
        </form>
      </div>
      <div>
        <table>
          <tbody>
            <tr>
              <th className="border-2">id</th>
              <th className="border-2">task</th>
              <th className="border-2">status</th>
              <th className="border-2">mark</th>
              <th className="border-2">delete</th>
            </tr>
            {tasks?.map((task: Task_type, index) => {
              return (
                <Task
                  task={task}
                  key={index}
                  doDispatch={(d) =>
                    dispatch({
                      type: d.type,
                      payload: { id: d.id },
                    })
                  }
                />
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Tasks
