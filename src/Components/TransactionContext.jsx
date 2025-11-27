import axios from "axios";
import { useContext, useMemo, useState } from "react";
import { createContext } from "react";
import { useParams } from "react-router-dom";

const transactionContext = createContext();

export function TransactionProvider({ children }) {
  const [transactions, setTransaction] = useState([]);
  const [modal, setModal] = useState(false);
  // const { id } = useParams();
  const [editData, setEditData] = useState(null);

  const addSale = async (data) => {
    try {
      if (editData) {
        await axios.put(
          `https://6921a27c512fb4140be0d9da.mockapi.io/tran/${editData.id}`,
          data
        );
        setTransaction((prev) =>
          prev.map((t) => (t.id === editData.id ? { ...t, ...data } : t))
        );

        setEditData(null);
        setModal(false);
      } else {
        const response = await axios.post(
          "https://6921a27c512fb4140be0d9da.mockapi.io/tran",
          data
        );
        setTransaction((prev) => [...prev, response.data]);
        setModal(false);
      }
    } catch (error) {
      alert(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://6921a27c512fb4140be0d9da.mockapi.io/tran/${id}`
      );
      setTransaction((prev) =>
        prev.filter((transaction) => transaction.id !== id)
      );
    } catch (error) {
      alert("error while delete:", error);
    }
  };

  const totals = useMemo(() => {
    let totalSale = 0;
    let totalPurchase = 0;
    let totalProfit = 0;

    transactions.forEach((t) => {
      totalSale += Number(t.sale);
      totalPurchase += Number(t.purchase);
      totalProfit += Number(t.sale) - Number(t.purchase);
      console.log("profit:", t.sale - t.purchase);
    });

    return { totalSale, totalPurchase, totalProfit };
  }, [transactions]);

  return (
    <transactionContext.Provider
      value={{
        transactions,
        addSale,
        ...totals,
        totals,
        setModal,
        modal,
        setTransaction,
        editData,
        setEditData,
        handleDelete,
      }}
    >
      {children}
    </transactionContext.Provider>
  );
}

export default transactionContext;
