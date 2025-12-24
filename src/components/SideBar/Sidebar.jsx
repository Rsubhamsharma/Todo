import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { useSelector } from "react-redux";
import Demo from "./ProfileCard";
import { Link } from "react-router-dom";

const SideBar = ({onClose}) => {
  const events = useSelector((state) => state.calendar.events);
  

  return (
    <Sidebar className="h-screen bg-amber-100">
      {onClose && (
        <button
          onClick={onClose}
          className="m-4 block md:hidden rounded bg-gray-200 px-3 py-1 text-sm"
        >
          ✖ Close
        </button>
      )}

      <div className="p-4 border-b">
        <Demo />
      </div>
     
     
      <div className="p-4 border-b">
        <h3 className="mb-2 text-sm font-semibold text-gray-700">
          Calendar Tasks
        </h3>

        {events.length === 0 ? (
          <p className="text-xs text-gray-500">No calendar tasks</p>
        ) : (
          <ul className="space-y-2">
            {events.map((event, i) => (
              <li
                key={i}
                className="rounded bg-white px-2 py-1 text-xs shadow"
              >
                {event.title}
              </li>
            ))}
          </ul>
        )}
        

        <Link
          to="/calendar"
          className="mt-2 inline-block text-xs text-blue-600"
        >
          View full calendar →
        </Link>
      </div>

      
      <Menu>
        <MenuItem>Analytics</MenuItem>
        
      </Menu>
    </Sidebar>
  );
};

export default SideBar;
