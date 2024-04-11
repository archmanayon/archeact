interface Tasks {
  id: number;
  task: string;
  completed: boolean;
}
const Task = ({ tasks }: Tasks[]) => {
  return (
    <>
      <table>
        <tr>
          <th className="border-2">id</th>
          <th className="border-2">task</th>
          <th className="border-2">status</th>
          <th className="border-2">mark</th>
          <th className="border-2">delete</th>
        </tr>

        {tasks?.map((task, index) => {
          return (
            <tr key={index}>
              <td className="border-2">{task.id}</td>
              <td className="border-2">{task.task}</td>
              <td className="border-2">{task.completed}</td>
              <td className="border-2">
                <button>mark</button>
              </td>
              <td className="border-2">
                <button>delete </button>
              </td>
            </tr>
          );
        })}
      </table>
    </>
  );
};

export default Task;
