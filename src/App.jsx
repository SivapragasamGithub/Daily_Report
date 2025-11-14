import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage/HomePage";
import MonthlyReport from "./MonthlyReportPage/MonthlyReport";
import DailyReport from "./DailyReportPage/DailyReport";

function App() {
  return (
    <>
      <div className="h-screen bg-[#B5CCD2] flex items-center justify-center">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/MonthlyReport" element={<MonthlyReport />} />
            <Route path="/DailyReport" element={<DailyReport />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
