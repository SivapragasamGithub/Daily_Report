import React, { useContext, useState } from "react";
import SummaryCard from "./SummaryCard";
import IconButton from "./IconButton";
import { Plus } from "lucide-react";
import TransactionTable from "./TransactionTable";
import AddSaleModal from "./AddSaleModal";
import transactionContext from "../TransactionContext";

function DashboardPage({ open }) {
  const { totals, addSale, transactions, setModal, modal } =
    useContext(transactionContext);

  return (
    <div>
      <div className="font-extrabold flex justify-end " >
        <Date/>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-6 ">
        <SummaryCard title="Total Sales" value={`₹ ${totals.totalSale}`} />
        <SummaryCard title="Total Profit" value={`₹ ${totals.totalProfit}`} />
        <SummaryCard title="This month" value={`₹ ${totals.totalProfit}`} />
      </div>
      <div className="flex justify-end mb-3">
        <IconButton icon={<Plus />} onClick={() => setModal(true)} />
      </div>
      <TransactionTable transactions={transactions} />
      <AddSaleModal
        open={modal}
        onClose={() => setModal(false)}
        onSubmit={addSale}
      />
    </div>
  );
}

export default DashboardPage;
