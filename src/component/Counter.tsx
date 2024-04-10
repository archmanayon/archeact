const ACTION = {
  ADD: "plus",
  MINUS: "minus",
};
import { useReducer } from "react";

function reduce_func(state: {}, action) {
  switch (action.type) {
    case ACTION.ADD:
      return { count: state.count + 1 };
    case ACTION.MINUS:
      return { count: state.count - 1 };
    default:
      return state;
  }
}
const Counter = () => {
  const [state, dispatch] = useReducer(reduce_func, { count: 0 });
  return (
    <>
      <div className="bg-gray-800 h-10 w-5 ml-3">{state.count}</div>

      <button onClick={() => dispatch({ type: "minus" })}> Minus </button>

      <button onClick={() => dispatch({ type: "plus" })}> Plus </button>
    </>
  );
};

export default Counter;
