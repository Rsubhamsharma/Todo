import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { useSelector } from "react-redux";
import Demo from "./ProfileCard";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

const SideBar = ({ onClose }) => {
  const events = useSelector((state) => state.calendar.events);

  return (
    <Sidebar className="h-screen bg-amber-100">
      
      <div className="flex h-full flex-col">

        
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

       
        <div className="flex-1">
          <Menu>
            <MenuItem>Analytics</MenuItem>
          </Menu>
        </div>

       
        <div className="border-t p-4">
          <div className="flex items-center justify-around">
            <a
              href="https://github.com/Rsubhamsharma"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-black"
            >
              <Github size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/subham-sharma-/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600"
            >
              <Linkedin size={18} />
            </a>

            <a
              href="rssubham63@gmail.com"
              className="text-gray-700 hover:text-red-600"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

      </div>
    </Sidebar>
  );
};

export default SideBar;
