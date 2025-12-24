import StatsCard from "../components/Analytics/StatsCard";
import TodoCharts from "../components/Analytics/TodoCharts";

const AnalyticsPage = ({onClose}) => {
  return (
    <div className="w-80 border-l bg-gray-50 p-4">
       {onClose && (
        <button
          onClick={onClose}
          className="mb-3 block md:hidden rounded bg-gray-200 px-3 py-1 text-sm"
        >
          ✖ Close
        </button>
      )}

      <h2 className="mb-4 text-lg font-semibold">
        Analytics
      </h2>

      <StatsCard />
      <TodoCharts />
    </div>
  );
};

export default AnalyticsPage;
