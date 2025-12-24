import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        title: action.payload,
        completed: false,
         id: Date.now().toString()
      });
    },
 toggleTodo: (state, action) => {
  const todo = state.todos.find(t => t.id === action.payload);
  if (todo) todo.completed = !todo.completed;
},

deleteTodo: (state, action) => {
  state.todos = state.todos.filter(t => t.id !== action.payload);
},

editTodo: (state, action) => {
  const { id, title } = action.payload;
  const todo = state.todos.find(t => t.id === id);
  if (todo) todo.title = title;
},


  },
});

export const {
  addTodo,
  toggleTodo,
  deleteTodo,
  editTodo,
} = todoSlice.actions;

export default todoSlice.reducer;
