import { useState } from "react";
import Sidebar from "../components/SideBar/Sidebar";
import TodoList from "../components/ToDo/TodoList";
import AnalyticsPage from "./AnalyticsPage";
import ProgressTracker from "../components/ToDo/ProgressTracker";
import QuickStats from "../components/Analytics/QuickStats";

const Home = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showAnalytics, setShowAnalytics] = useState(false);

  return (
    <div className="min-h-screen flex">

     
      <div className="hidden md:block">
        <Sidebar />
      </div>

      
      {showSidebar && (
        <div className="fixed inset-0 z-50 bg-black/40 md:hidden">
          <div className="h-full w-64 bg-white">
            <Sidebar onClose={() => setShowSidebar(false)} />
          </div>
        </div>
      )}

      
      <div className="flex-1 p-4 md:p-6 space-y-6">

        
        <div className="flex items-center justify-between md:hidden">
          <button
            className="rounded bg-gray-200 px-3 py-1"
            onClick={() => setShowSidebar(true)}
          >
            ☰
          </button>

          <h1 className="font-semibold">Todo App</h1>

          <button
            className="rounded bg-gray-200 px-3 py-1"
            onClick={() => setShowAnalytics(true)}
          >
            📊
          </button>
        </div>

       
        <QuickStats />
        <ProgressTracker />
        <TodoList />
      </div>

      <div className="hidden md:block w-80 border-l">
        <AnalyticsPage />
      </div>

     
      {showAnalytics && (
        <div className="fixed inset-0 z-50 bg-black/40 md:hidden">
          <div className="ml-auto h-full w-80 bg-gray-50">
            <AnalyticsPage onClose={() => setShowAnalytics(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
