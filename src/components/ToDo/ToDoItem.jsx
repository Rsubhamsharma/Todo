import { Trash2, Pencil, CalendarPlus, Check } from "lucide-react";
import { useState } from "react";

const TodoItem = ({
  todo,
  isEditing,
  editValue,
  onEditStart,
  onEditSave,
  onEditChange,
  onToggle,
  onDelete,
  onCalendar,
}) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState("");

  const handleSchedule = () => {
    if (!date) return alert("Select a date");
    onCalendar(date);
    setShowDatePicker(false);
    setDate("");
  };

  return (
    <li className="group rounded-xl bg-gray-50 px-4 py-2">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 flex-1">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={onToggle}
          />

          {isEditing ? (
            <input
              value={editValue}
              onChange={(e) => onEditChange(e.target.value)}
              className="flex-1 rounded border px-2 py-1 text-base"
              autoFocus
            />
          ) : (
            <span
              className={`${
                todo.completed ? "line-through text-gray-400" : ""
              }`}
            >
              {todo.title}
            </span>
          )}
        </div>

        <div className="flex gap-2">
          {isEditing ? (
            <button onClick={onEditSave}>
              <Check className="h-4 w-4 text-green-600" />
            </button>
          ) : (
            <button onClick={onEditStart}>
              <Pencil className="h-4 w-4 text-blue-500" />
            </button>
          )}

          <button onClick={() => setShowDatePicker(!showDatePicker)}>
            <CalendarPlus className="h-4 w-4 text-purple-500" />
          </button>

          <button onClick={onDelete}>
            <Trash2 className="h-4 w-4 text-red-500" />
          </button>
        </div>
      </div>

      {showDatePicker && (
        <div className="mt-2 flex items-center gap-2">
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="rounded border px-2 py-1 text-base"
          />
          <button
            onClick={handleSchedule}
            className="rounded bg-blue-600 px-3 py-1 text-sm text-white"
          >
            Schedule
          </button>
        </div>
      )}
    </li>
  );
};

export default TodoItem;
