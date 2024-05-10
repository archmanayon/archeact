const ACTION = {
  ADD: 'plus',
  MINUS: 'minus',
}
import { useContext, useReducer, useState } from 'react'
import TasksContext from '../Tasks/taskContext'
import { sampleZus_counter } from '../store'
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
  const fromZusState = sampleZus_counter((state) => state)

  const [state, dispatch] = useReducer(reduce_func, {
    count: 0,
  })
  const { tasks } = useContext(TasksContext)
  return (
    <>
      <div className="bg-gray-800 h-10 w-5 ml-3">
        Only SampleContext Provider first item first array :::{' '}
        {tasks[0]?.taskName}
      </div>
      <div className="bg-gray-800 h-10 w-5 ml-3">
        showing all tasks from reducer, by maping:::
        {tasks?.map((task, index) => (
          <div key={index}>{task.taskName}</div>
        ))}
      </div>
      <div className="bg-gray-800 h-10 w-5 ml-3">{state.count}</div>

      <button onClick={() => dispatch({ type: 'minus' })}> Minus </button>

      <button onClick={() => dispatch({ type: 'plus' })}> Plus </button>
      <div>
        <button onClick={fromZusState.fifteenFunc}> Go to 115 </button>
        <button onClick={fromZusState.deductFiveFunc}> Go 2000 please </button>
      </div>
      <div className="bg-gray-800 h-10 w-5 ml-3">{fromZusState.counterZus}</div>
    </>
  )
}

export default Counter
