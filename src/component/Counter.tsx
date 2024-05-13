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

function reduce_func(
  state: { count: number; tatski: number },
  action: ActionType
) {
  switch (action.type) {
    case ACTION.ADD:
      return { ...state, count: state.count + 1 }
    case ACTION.MINUS:
      return { ...state, count: state.count - 1 }
    default:
      return state
  }
}

const Counter = () => {
  const fromZusState = sampleZus_counter((state) => state)

  const [state, dispatch_a_Num] = useReducer(reduce_func, {
    count: 0,
    tatski: 66,
  })
  const { tasks } = useContext(TasksContext)
  return (
    <>
      <div className="bg-gray-800 h-10 w-5 ml-3">
        Only SampleContext Provider first item first array :::{' '}
        {tasks.map((task) => (
          <div>{task.id}</div>
        ))}
      </div>
      <div className="bg-gray-800 h-10 w-5 ml-3">
        showing all tasks from reducer, by maping:::
        {tasks?.map((task, index) => (
          <div key={index}>{task.taskName}</div>
        ))}
      </div>
      <div className="bg-gray-800 h-10 w-5 ml-3">
        updated:{state.count} sample object from reduder state: {state.tatski}
      </div>

      <button onClick={() => dispatch_a_Num({ type: 'minus' })}> Minus </button>

      <button onClick={() => dispatch_a_Num({ type: 'plus' })}> Plus </button>
      <div>
        <button onClick={fromZusState.fifteenFunc}> Go to 115 </button>
        <button onClick={fromZusState.deductFiveFunc}> Go 2000 please </button>
      </div>
      <div className="bg-gray-800 h-10 w-5 ml-3">{fromZusState.counterZus}</div>
    </>
  )
}

export default Counter
