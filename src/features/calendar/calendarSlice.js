import { createSlice } from "@reduxjs/toolkit";

const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    events: [],
    status: "idle",
  },
  reducers: {
    addEvent: (state, action) => {
      state.events.push({
        id: Date.now().toString(), // ✅ stable unique ID
        title: action.payload.title,
        date: action.payload.date,
      });
    },

    removeEvent: (state, action) => {
      state.events = state.events.filter(
        (event) => event.id !== action.payload
      );
    },

    setEvents: (state, action) => {
      state.events = action.payload;
      state.status = "idle";
    },

    setLoading: (state) => {
      state.status = "loading";
    },
  },
});

export const {
  addEvent,
  removeEvent,
  setEvents,
  setLoading,
} = calendarSlice.actions;

export default calendarSlice.reducer;
