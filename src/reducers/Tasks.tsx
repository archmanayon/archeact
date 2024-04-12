import { useReducer, useState } from 'react'
import Task from '../component/Task'

type Task = {
  id: number
  task: string
  completed: boolean
}

interface TaskScript {
  type: string
  payload: { name: string; completed: boolean }
}

export const ACTION = {
  ADDTASK: 'addTask',
  MARKTASK: 'markTask',
}

function taskReducer(tasks: Task[], action: TaskScript) {
  switch (action.type) {
    case ACTION.ADDTASK:
      return [
        ...tasks,
        {
          id: Date.now(),
          task: action.payload.name,
          completed: action.payload.completed,
        },
      ]
    // case ACTION.MARKTASK:
    //   tasks.map((task) => {
    //     if (task.id === action.payload.id) {
    //       return { ...task, completed: !task.completed };
    //     } else {
    //       return task;
    //     }
    //   });

    default:
      return tasks
  }
}

const Tasks = () => {
  const [task_name, setTask_name] = useState('')

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
              payload: { name: task_name, completed: false },
            })
            setTask_name('')
          }}
        >
          <input
            type="text"
            value={task_name}
            onChange={(i) => setTask_name(i.target.value)}
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
            {tasks?.map((task: any, index: number) => {
              return (
                <tr key={index}>
                  <td className="border-2">{task.id}</td>
                  <td className="border-2">{task.task}</td>
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
                    <button>delete </button>
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
