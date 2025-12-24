import { configureStore } from "@reduxjs/toolkit";
import calendarReducer from "../features/calendar/calendarSlice";
import todoReducer from "../features/todo/todoSlice";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("appState");
    if (!serializedState) return undefined;
    return JSON.parse(serializedState);
  } catch {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    localStorage.setItem("appState", JSON.stringify(state));
  } catch {}
};

const preloadedState = loadState();

export const store = configureStore({
  reducer: {
    calendar: calendarReducer,
    todo: todoReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  saveState({
    calendar: store.getState().calendar,
    todo: store.getState().todo,
  });
});
