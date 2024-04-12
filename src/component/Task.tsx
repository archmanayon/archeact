interface Task {
  id: number;
  task: string;
  completed: boolean;
  dispatch: () => void;
}
const Task = ({ task, dispatch }: Task) => {
  return (
    <>
      <tr>
        <td className="border-2">{task.id}</td>
        <td className="border-2">{task.task}</td>
        <td className="border-2">{task.completed ? "done" : "wala pa"}</td>
        <td className="border-2">
          <button onClick={dispatch}>mark</button>
        </td>
        <td className="border-2">
          <button>delete </button>
        </td>
      </tr>
    </>
  );
};

export default Task;
