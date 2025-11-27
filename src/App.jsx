import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./Components/Layout/sidebar";
import { useState } from "react";
import TopHeader from "./Components/Layout/TopHeader";
import DashboardPage from "./Components/Layout/DashboardPage";
import { TransactionProvider } from "./Components/TransactionContext";
import AddSaleModal from "./Components/layout/AddSaleModal";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen((v) => !v);
  return (
    <>
      <TransactionProvider>
        <BrowserRouter>
          <div
            className={`min-h-screen bg-[#d0ddf0] flex justify-between ${
              !sidebarOpen ? "lg:ml-64 " : "lg:ml-0 "
            }`}
          >
            {/*Sidebar will be fixed even the page resized*/}
            <Sidebar open={sidebarOpen} />
            <div className={"flex-1 min-h-screen transition-all lg:xl:ml-0"}>
              {/* Top header */}
              <TopHeader open={sidebarOpen} toggleSidebar={toggleSidebar} />
              {/* Page content */}
              <main className={` p-6 ${sidebarOpen ? "ml-64" : "ml-0"} `}>
                <Routes>
                  <Route path="/" element={<DashboardPage open={open} />} />
                  <Route path="/addSaleModal" element={<AddSaleModal />} />
                  <Route path="/addSaleModal/:id" element={<AddSaleModal />} />
                  {/* <Route path="/daily" element={<DailyReport />} /> */}
                  {/* <Route path="/monthly" element={<MonthlyReport />} /> */}
                </Routes>
              </main>
            </div>
          </div>
        </BrowserRouter>
      </TransactionProvider>
    </>
  );
}

export default App;
