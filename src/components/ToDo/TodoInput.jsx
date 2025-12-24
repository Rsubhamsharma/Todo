const TodoInput = ({ value, onChange, onAdd, priority, setPriority }) => {
  return (
    <div className="flex gap-2">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Add a task..."
        className="flex-1 rounded-xl border px-4 py-2"
      />

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="rounded-xl border px-2"
      >
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>

      <button
        onClick={onAdd}
        className="rounded-xl bg-blue-600 px-4 py-2 text-white"
      >
        Add
      </button>
    </div>
  );
};

export default TodoInput;
