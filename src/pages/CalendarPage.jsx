import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useSelector, useDispatch } from "react-redux";
import { removeEvent } from "../features/calendar/calendarSlice";
import { useNavigate } from "react-router-dom";

const CalendarPage = () => {
  const events = useSelector((state) => state.calendar.events);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const calendarEvents = events.map((event) => ({
    id: event.id,
    title: event.title,
    start: event.date,
  }));

  return (
    <div className="p-4 md:p-6">

      {/* 🔙 Mobile back button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-3 inline-flex items-center gap-2 rounded bg-gray-200 px-3 py-1 text-sm md:hidden"
      >
        ← Back
      </button>

      <h1 className="mb-4 text-2xl font-semibold">Calendar</h1>

      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={calendarEvents}
        eventClick={(info) => {
          if (confirm(`Delete "${info.event.title}"?`)) {
            dispatch(removeEvent(info.event.id));
          }
        }}
        height="auto"
      />
    </div>
  );
};

export default CalendarPage;
