import { useReducer, useState } from 'react'

type Task = {
  id?: number
  taskName?: string
  completed?: boolean
}

interface TaskScript {
  type: string
  payload: Task
}

export const ACTION = {
  ADD_TASK: 'addTask',
  MARK_TASK: 'markTask',
  DELETE_TASK: 'deleteTask',
}

function taskReducer(tasks: Task[], action: TaskScript) {
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

const Tasks = () => {
  const [taskName, setTaskName] = useState('')

  const [tasks, dispatch] = useReducer(taskReducer, [])
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
            {tasks?.map((task: Task, index: number) => {
              return (
                <tr key={index}>
                  <td className="border-2">{task.id}</td>
                  <td className="border-2">{task.taskName}</td>
                  <td className="border-2">
                    {' '}
                    {task.completed ? 'naa' : 'wala'}
                  </td>
                  <td className="border-2">
                    <button
                      onClick={() => {
                        dispatch({
                          type: 'markTask',
                          payload: {
                            id: task.id,
                          },
                        })
                      }}
                    >
                      mark
                    </button>
                  </td>
                  <td className="border-2">
                    <button
                      onClick={() =>
                        dispatch({
                          type: 'deleteTask',
                          payload: { id: task.id },
                        })
                      }
                    >
                      delete{' '}
                    </button>
                  </td>
                </tr>
                // <Task
                //   task={task}
                //   key={index}
                //   dispatch={() => {
                //     dispatch({
                //       type: "markTask",
                //       payload: {
                //         id: task.id,
                //         name: task.task,
                //         completed: true,
                //       },
                //     });
                //   }}
                // />
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Tasks
