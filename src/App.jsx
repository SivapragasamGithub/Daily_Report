import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Sidebar from "./Components/Layout/sidebar";
import { useState } from "react";
import TopHeader from "./Components/layout/TopHeader";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen((v) => !v);
  return (
    <>
      <BrowserRouter>
        <div className="min-h-screen bg-[#EEF5FF] flex">
          {/*Sidebar will be fixed even the page resized*/}
          <Sidebar open={sidebarOpen} />
          <div className={`flex-1 min-h-screen transition-all ${sidebarOpen ?"lg:ml-64" : "lg-ml-0"}`}>
            {/* Top header */}
            <TopHeader toggleSidebar={toggleSidebar} />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
