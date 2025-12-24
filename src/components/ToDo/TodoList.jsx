import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  deleteTodo,
  toggleTodo,
  editTodo,
} from "../../features/todo/todoSlice";
import { addEvent } from "../../features/calendar/calendarSlice";

import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);

  const [inputValue, setInputValue] = useState("");
 const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState("");
 


  const handleAddTodo = () => {
    if (!inputValue.trim()) return;
    dispatch(addTodo(inputValue));
    setInputValue("");
  };

const handleSaveEdit = (id) => {
  dispatch(editTodo({ id, title: editValue }));
  setEditId(null);
  setEditValue("");
};


  
  const addToCalendar = (todoTitle, date) => {
    dispatch(
      addEvent({
        title: todoTitle,
        date: date,
      })
    );
  };

  return (
    <div className="max-w-md rounded-2xl bg-white p-6 shadow-xl">
      <h2 className="mb-4 text-xl font-semibold">My Tasks</h2>

      <TodoInput
        value={inputValue}
        onChange={setInputValue}
        onAdd={handleAddTodo}
      />

      <ul className="mt-5 space-y-3">
        {todos.map((todo) => (
  <TodoItem
    key={todo.id}
    todo={todo}
    isEditing={editId === todo.id}
    editValue={editValue}
    onToggle={() => dispatch(toggleTodo(todo.id))}
    onEditStart={() => {
      setEditId(todo.id);
      setEditValue(todo.title);
    }}
    onEditSave={() => handleSaveEdit(todo.id)}
    onDelete={() => dispatch(deleteTodo(todo.id))}
    onCalendar={(date) => addToCalendar(todo.title, date)}
  />
))}

      </ul>
    </div>
  );
};

export default TodoList;
