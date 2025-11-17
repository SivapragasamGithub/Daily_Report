import React from "react";

function SummaryCard({ title, value }) {
  return (
    <div className="bg-white shadow rounded-b-lg p-4">
      <p className="text-gray-600">{title}</p>
      <h2 className="text-2xl font-bold mt-1">{value}</h2>
    </div>
  );
}

export default SummaryCard;
