import React, { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
import TransactionTable from "../../Components/layout/TransactionTable";

function MonthlyReport() {
  const [transactions, setTransactions] = useState([]);

  const [selectedDate, setSelectedDate] = useState(
    dayjs().format("YYYY-MM-DD")
  );

  const [selectedMonth, setSelectedMonth] = useState(dayjs().month() + 1);
  const [selectedYear, setSelectedYear] = useState(dayjs().year());

  // ✅ GET BY DATE
  const fetchByDate = async (date) => {
    try {
      const res = await axios.get(
        `http://localhost:8080/api/transactions/by-date?date=${date}`
      );
      setTransactions(res.data);
    } catch (error) {
      console.error("Date fetch error", error);
    }
  };

  // ✅ GET BY MONTH
  const fetchByMonth = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8080/api/transactions/by-month?year=${selectedYear}&month=${selectedMonth}`
      );
      setTransactions(res.data);
    } catch (error) {
      console.error("Month fetch error", error);
    }
  };

  // ✅ Load today by default
  useEffect(() => {
    fetchByDate(selectedDate);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">📊 Monthly & Daily Report</h1>

      {/* ✅ DATE PICKER */}
      <div className="flex gap-4 mb-4">
        <div>
          <label className="block font-semibold">Select Date</label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => {
              setSelectedDate(e.target.value);
              fetchByDate(e.target.value);
            }}
            className="border p-2 rounded"
          />
        </div>

        {/* ✅ MONTH PICKER */}
        <div>
          <label className="block font-semibold">Select Month</label>
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="border p-2 rounded"
          >
            {[...Array(12)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {dayjs().month(i).format("MMMM")}
              </option>
            ))}
          </select>
        </div>

        {/* ✅ YEAR PICKER */}
        <div>
          <label className="block font-semibold">Select Year</label>
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="border p-2 rounded"
          >
            {[2024, 2025, 2026].map((year) => (
              <option key={year}>{year}</option>
            ))}
          </select>
        </div>

        {/* ✅ LOAD MONTH BUTTON */}
        <div className="flex items-end">
          <button
            onClick={fetchByMonth}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Load Month
          </button>
        </div>
      </div>

      {/* ✅ REPORT TABLE */}
      <TransactionTable transactions={transactions} />
    </div>
  );
}

export default MonthlyReport;
