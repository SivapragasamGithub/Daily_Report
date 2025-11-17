import React from "react";
import MenuItem from "./MenuItem"
import { BarChart, Home, ListChecks, Settings } from "lucide-react";

function Sidebar({ open }) {
  return (
    <div
      className={`fixed left-0 top-0 h-full bg-slate-900 w-64 p-4 transition-transform ${
        open ? "translate-x-0" : "-translate-x-64"
      } lg:translate-x-0`}
    >
      <h1 className="text-white text-2xl font-semibold mb-6">MY Reports</h1>

      <div className="flex flex-col gap-2">
        <MenuItem icon={<Home />} label="Dashboard" active />
        <MenuItem icon={<BarChart />} label="Monthly Report" />
        <MenuItem icon={<ListChecks />} label="Daily Report" />
        <MenuItem icon={<Settings />} label="Settings" />
      </div>
    </div>
  );
}

export default Sidebar;
