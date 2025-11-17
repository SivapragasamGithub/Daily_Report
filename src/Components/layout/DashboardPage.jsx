import React, { useState } from "react";
import SummaryCard from "./SummaryCard";
import IconButton from "./IconButton";
import { Plus } from "lucide-react";
import TransactionTable from "./TransactionTable";
import AddSaleModal from "./AddSaleModal";

function DashboardPage() {
  const [modal, setModal] = useState(false);
  const [transactions, setTransactions] = useState([]);

  const addSale = (data) => {
    setTransactions([...transactions, data]);
    setModal(false);
  };

  return (
    <div>
      <div className="grid grid-cols-3 gap-4 mb-6 ">
        <SummaryCard title="Total Sales" value="₹ 0" />
        <SummaryCard title="Total Profit" value="₹ 0" />
        <SummaryCard title="This month" value="₹ 0" />
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
