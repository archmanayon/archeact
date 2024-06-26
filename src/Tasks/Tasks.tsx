import { useContext, useState } from 'react'
import Task from './Task'
import { Task_type } from './TaskReducer'
import TasksContext from './taskContext'

const Tasks = () => {
  const [taskName, setTaskName] = useState('')
  const { tasks, dispatch } = useContext(TasksContext)

  //   const [tasks, dispatch] = useReducer(TaskReducer, [])
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
              return <Task key={index} task={task} dispatch={dispatch} />
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Tasks
