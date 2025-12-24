import { useSelector } from "react-redux";

const QuickStats = () => {
  const todos = useSelector((state) => state.todo.todos);
  const calendar = useSelector((state) => state.calendar.events);

  const completed = todos.filter(t => t.completed).length;
  const pending = todos.length - completed;

  const today = new Date().toISOString().split("T")[0];
  const todayTasks = calendar.filter(e => e.date === today).length;

  return (
    <div className="mb-6 grid grid-cols-3 gap-4">
      <div className="rounded-xl bg-white p-4 shadow">
        <p className="text-sm text-gray-500">Completed</p>
        <p className="text-2xl font-semibold text-green-600">{completed}</p>
      </div>

      <div className="rounded-xl bg-white p-4 shadow">
        <p className="text-sm text-gray-500">Pending</p>
        <p className="text-2xl font-semibold text-yellow-600">{pending}</p>
      </div>

      <div className="rounded-xl bg-white p-4 shadow">
        <p className="text-sm text-gray-500">Today’s Schedule</p>
        <p className="text-2xl font-semibold text-blue-600">{todayTasks}</p>
      </div>
    </div>
  );
};

export default QuickStats;
