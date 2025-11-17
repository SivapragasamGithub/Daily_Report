import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <button className="text-3xl bg-blue-500 m-10 rounded-4xl px-5 py-3">
        <Link to={"/DailyReport"}>Create Today Report</Link>
      </button>
      <button className="bg-indigo-500 px-10 py-2 mx-1 rounded-lg  hover:bg-indigo-600 text-white transition ">
        <Link to={"/MonthlyReport"}>MonthlyReport</Link>
      </button>
    </div>
  );
}

export default HomePage;
