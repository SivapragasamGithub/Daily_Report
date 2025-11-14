import React from "react";

function DailyReport() {
  return (
    <div>
      <div className="flex items-center justify-center text-base">
        <button className="font-semibold text-slate-900">Add</button>
      </div>
      <div className="flex justify-center space-x-4 ">
        <div>S.NO</div>
        <div>Description</div>
        <div>Price</div>
        <div>Investment</div>
        <div>Profit</div>
      </div>
    </div>
  );
}

export default DailyReport;
