import React, { useContext, useEffect, useState } from "react";
import SummaryCard from "./SummaryCard";
// import IconButton from "./IconButton";
import { Plus } from "lucide-react";
import TransactionTable from "./TransactionTable";
import AddSaleModal from "./AddSaleModal";
import transactionContext from "../TransactionContext";
import dayjs from "dayjs";
import axios from "axios";
import { useParams } from "react-router-dom";

function DashboardPage({ open }) {
  // const [addedtran, setAddedtran] = useState([]);
  const {
    totals,
    addSale,
    transactions,
    setModal,
    modal,
    setTransaction,
    editData,
    setEditData,
  } = useContext(transactionContext);
  const onClick = () => {
    setModal(true);
  };
  const { id } = useParams();

  const fetchData = async () => {
    try {
      const allTran = await axios.get("http://localhost:8080/api/transactions");
      setTransaction(allTran.data);
      console.log("the received data is:", allTran.data);
    } catch (error) {
      alert("fetching error at Dashboard page");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="font-extrabold text-3xl mb-3 font-serif text-blue-700 flex justify-end ">
        Date : {dayjs(new Date()).format("DD-MM-YYYY")}
      </div>
      <div className="grid grid-cols-3 gap-4 mb-6 ">
        <SummaryCard title="Total Sales" value={`₹ ${totals.totalSale}`} />
        <SummaryCard title="Total Profit" value={`₹ ${totals.totalProfit}`} />
        <SummaryCard title="This month" value={`₹ ${totals.totalProfit}`} />
      </div>
      <div className="flex justify-end mb-3">
        <button
          onClick={onClick}
          className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center "
        >
          <Plus />
        </button>
        {/* <IconButton icon={<Plus />} onClick={() => setModal(true)} /> */}
      </div>
      <TransactionTable transactions={transactions} />

      <AddSaleModal
        open={modal}
        onClose={() => {
          setModal(false);
          setEditData(null);
        }}
        onSubmit={addSale}
      />
    </div>
  );
}

export default DashboardPage;
