import { TaskScript, Task_type } from './TaskReducer'

type para = { type: string; id?: number }

type All_children = {
  task: Task_type
  dispatch: React.Dispatch<TaskScript>
}
const Task = ({ task, dispatch }: All_children) => {
  return (
    <tr>
      <td className="border-2">{task.id}</td>
      <td className="border-2">{task.taskName}</td>
      <td className="border-2"> {task.completed ? 'Done' : 'Pending'}</td>
      <td className="border-2">
        <button
          onClick={() =>
            dispatch({
              type: 'markTask',
              payload: { id: task.id },
            })
          }
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
  )
}

export default Task
