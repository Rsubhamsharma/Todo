import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CalendarPage from "./pages/CalendarPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calendar" element={<CalendarPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
 