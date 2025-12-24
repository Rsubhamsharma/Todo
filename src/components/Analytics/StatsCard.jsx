import { useSelector } from "react-redux";

const StatsCard = () => {
  const todos = useSelector((state) => state.todo.todos);

  const total = todos.length;
  const completed = todos.filter(t => t.completed).length;
  const pending = total - completed;

  return (
    <div className="mb-4 space-y-2">
      <div className="rounded bg-white p-3 shadow">
        Total Tasks: {total}
      </div>
      <div className="rounded bg-green-100 p-3">
        Completed: {completed}
      </div>
      <div className="rounded bg-yellow-100 p-3">
        Pending: {pending}
      </div>
    </div>
  );
};

export default StatsCard;
