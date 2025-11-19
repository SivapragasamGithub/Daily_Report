import { useContext, useMemo, useState } from "react";
import { createContext } from "react";

const transactionContext = createContext();

export function TransactionProvider({ children }) {
  const [transactions, setTransaction] = useState([]);
  const addSale = (data) => {
    setTransaction((prev) => [...prev, data]);
  };

  const totals = useMemo(() => {
    let totalSale = 0;
    let totalPurchase = 0;
    let totalProfit = 0;

    transactions.forEach((t) => {
      totalSale += Number(t.sale);
      totalPurchase += Number(t.purchase);
      totalProfit += Number(t.sale) - Number(t.purchase);
    });

    return { totalSale, totalPurchase, totalProfit };
  }, [transactions]);

  return (
    <transactionContext.Provider
      value={{ transactions, addSale, ...totals, totals }}
    >
      {children}
    </transactionContext.Provider>
  );
}

export default transactionContext;
