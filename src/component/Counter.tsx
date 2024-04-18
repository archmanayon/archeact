const ACTION = {
  ADD: 'plus',
  MINUS: 'minus',
}
import { useContext, useReducer } from 'react'
import TasksContext from '../Tasks/taskContext'
type ActionType = {
  type: string
}
function reduce_func(state: { count: number }, action: ActionType) {
  switch (action.type) {
    case ACTION.ADD:
      return { count: state.count + 1 }
    case ACTION.MINUS:
      return { count: state.count - 1 }
    default:
      return state
  }
}
const Counter = () => {
  const [state, dispatch] = useReducer(reduce_func, { count: 0 })
  const { tasks } = useContext(TasksContext)
  return (
    <>
      <div className="bg-gray-800 h-10 w-5 ml-3">
        Only SampleContext Provider first item first array: {tasks[0]?.taskName}
      </div>
      <div className="bg-gray-800 h-10 w-5 ml-3">
        showing all tasks from reducer, by maping:
        <table>
          <tbody>
            {tasks?.map((task) => (
              <tr>{task.taskName}</tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-gray-800 h-10 w-5 ml-3">{state.count}</div>

      <button onClick={() => dispatch({ type: 'minus' })}> Minus </button>

      <button onClick={() => dispatch({ type: 'plus' })}> Plus </button>
    </>
  )
}

export default Counter
