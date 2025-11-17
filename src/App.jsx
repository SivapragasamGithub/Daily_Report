import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./Components/Layout/sidebar";
import { useState } from "react";
import TopHeader from "./Components/Layout/TopHeader";
import DashboardPage from "./Components/Layout/DashboardPage";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen((v) => !v);
  return (
    <>
      <BrowserRouter>
        <div className="min-h-screen bg-[#EEF5FF] flex">
          {/*Sidebar will be fixed even the page resized*/}
          <Sidebar open={sidebarOpen} />
          <div
            className={`flex-1 min-h-screen transition-all ${
              sidebarOpen ? "lg:ml-64" : "lg-ml-0"
            }`}
          >
            {/* Top header */}
            <TopHeader toggleSidebar={toggleSidebar} />
            {/* Page content */}
            <main className="p-6">
              <Routes>
                <Route path="/" element={<DashboardPage />} />
                {/* <Route path="/daily" element={<DailyReport />} /> */}
                {/* <Route path="/monthly" element={<MonthlyReport />} /> */}
              </Routes>
            </main>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
