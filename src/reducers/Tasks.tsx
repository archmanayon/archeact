import { useReducer, useState } from "react";
import Task from "../component/Task";

interface TaskScript {
  type: string;
  payload: { name: string; completed: boolean };
}

const ACTION = { ADDTASK: "addTask" };

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
        <Task tasks={tasks} />
      </div>
    </>
  );
};

export default Tasks;
