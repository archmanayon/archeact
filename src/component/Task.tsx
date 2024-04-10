interface Task {
  task: string;
}
const Task = ({ task }: Task) => {
  return (
    <>
      <div>{task}</div>
    </>
  );
};

export default Task;
