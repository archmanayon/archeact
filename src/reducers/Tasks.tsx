import { useReducer, useState } from "react";
import Task from "../component/Task";

interface TaskScript {
  type: string;
  payload: { name: string; completed: boolean };
}

const ACTION = { ADDTASK: "addTask", MARKTASK: "markTask" };

function task_func(tasks: {}[], action: TaskScript) {
  switch (action.type) {
    case ACTION.ADDTASK:
      return [
        ...tasks,
        {
          id: Date.now(),
          task: action.payload.name,
          completed: action.payload.completed,
        },
      ];
    case ACTION.MARKTASK:
      tasks.map((task) => {
        if (task.id === action.payload.id) {
          return { ...task, completed: true };
        }
        return task;
      });
    default:
      return tasks;
  }
}

const Tasks = () => {
  const [task_name, setTask_name] = useState("");

  const [tasks, dispatch] = useReducer(task_func, []);

  console.log(tasks);
  return (
    <>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch({
              type: "addTask",
              payload: { name: task_name, completed: false },
            });
            setTask_name("");
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
        <Task tasks={tasks} dispatch={dispatch} />
      </div>
    </>
  );
};

export default Tasks;
