import { Task_type } from './TaskReducer'

type para = { type: string; id?: number }

type All_children = {
  index?: number
  task: Task_type
  doDispatch: ({}: para) => void
}
const Task = ({ index, task, doDispatch }: All_children) => {
  return (
    <tr key={index}>
      <td className="border-2">{task.id}</td>
      <td className="border-2">{task.taskName}</td>
      <td className="border-2"> {task.completed ? 'Done' : 'Pending'}</td>
      <td className="border-2">
        <button
          onClick={() =>
            doDispatch({
              type: 'markTask',
              id: task.id,
            })
          }
        >
          mark
        </button>
      </td>
      <td className="border-2">
        <button
          onClick={() =>
            doDispatch({
              type: 'deleteTask',
              id: task.id,
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
