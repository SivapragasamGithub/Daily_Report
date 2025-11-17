import React from "react";

function MenuItem({ icon, label, active }) {
  return (
    <div
      className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer ${
        active ? "bg-blue-700 text-white" : "text-slate-200 hover:bg-slate-700"
      }`}
    >
      <span className="w-5 h-5 flex items-center justify-center">{icon}</span>
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
}

export default MenuItem;
