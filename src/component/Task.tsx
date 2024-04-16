import { Task_type } from '../reducers/Tasks'

type para = { type: string; id?: number }

type All_children = {
  task: Task_type
  doDispatch: ({}: para) => void
}
const Task = ({ task, doDispatch }: All_children) => {
  return (
    <>
      <tr>
        <td className="border-2">{task.id}</td>
        <td className="border-2">{task.taskName}</td>
        <td className="border-2"> {task.completed ? 'naa' : 'wala'}</td>
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
    </>
  )
}

export default Task
