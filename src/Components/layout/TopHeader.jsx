import { AlignJustify } from "lucide-react";
import React from "react";

function TopHeader({ open, toggleSidebar }) {
  return (
    <header className={"h-14 bg-white shadow flex items-center px-4  "}>
      <button
        className={`lg:block ${open ? " lg:xl:hidden " : " sm:visible lg:xl:hidden"}`}
        onClick={toggleSidebar}
      >
        <AlignJustify size={22} />
      </button>
      <h2 className="ml-4 text-lg font-semibold">DashBoard</h2>
    </header>
  );
}

export default TopHeader;
