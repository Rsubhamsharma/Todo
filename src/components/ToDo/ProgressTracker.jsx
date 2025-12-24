import { useSelector } from "react-redux";

const ProgressTracker = () => {
  const todos = useSelector((state) => state.todo.todos);

  const completed = todos.filter(t => t.completed).length;
  const total = todos.length;
  const percent = total ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="mb-6 rounded-xl bg-white p-4 shadow">
      <p className="mb-2 text-sm text-gray-600">
        Progress ({completed}/{total})
      </p>

      <div className="h-3 w-full rounded-full bg-gray-200">
        <div
          className="h-3 rounded-full bg-green-500 transition-all"
          style={{ width: `${percent}%` }}
        />
      </div>

      <p className="mt-1 text-right text-xs text-gray-500">
        {percent}%
      </p>
    </div>
  );
};

export default ProgressTracker;
