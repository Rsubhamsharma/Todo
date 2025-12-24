import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { useSelector } from "react-redux";

const COLORS = ["#22c55e", "#facc15"];

const TodoCharts = () => {
  const todos = useSelector((state) => state.todo.todos);

  const completed = todos.filter(t => t.completed).length;
  const pending = todos.length - completed;

  const data = [
    { name: "Completed", value: completed },
    { name: "Pending", value: pending },
  ];

  return (
    <div className="rounded bg-white p-3 shadow">
      <h3 className="mb-2 text-sm font-semibold">
        Task Status
      </h3>

      <PieChart width={200} height={200}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={70}
          dataKey="value"
        >
          {data.map((_, index) => (
            <Cell key={index} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default TodoCharts;
