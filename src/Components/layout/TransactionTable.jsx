// import React from "react";

// function TransactionTable({ transactions }) {

//   return (
//     <table className="w-full bg-white shadow rounded-lg overflow-hidden ">
//       <thead className="bg-green-100">
//         <tr>
//           <th className="p-3 text-left">Description</th>
//           <th className="p-3 text-left">Sale</th>
//           <th className="p-3 text-left">Purchase</th>
//           <th className="p-3 text-left">Profit</th>
//         </tr>
//       </thead>
//       <tbody>
//         {transactions.map((t, i) => (
//           <tr key={i} className="border-b">
//             <td className="p-3">{t.desc}</td>
//             <td className="p-3"> {t.sale} </td>
//             <td className="p-3"> {t.purchase} </td>
//             <td className="p-3 font-semibold text-green-600">
//               {t.sale - t.purchase}

//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }

// export default TransactionTable;

import React from "react";

function TransactionTable({ transactions }) {
  // Extract individual arrays
  const descriptions = transactions.map((t) => t.desc);
  const sales = transactions.map((t) => t.sale);
  const purchases = transactions.map((t) => t.purchase);
  const profits = transactions.map((t) => t.sale - t.purchase);

  return (
    <table className="w-full bg-white shadow rounded-lg overflow-hidden">
      <thead className="bg-green-100">
        <tr>
          <th className="p-3 text-left">Description</th>
          <th className="p-3 text-left">Sale</th>
          <th className="p-3 text-left">Purchase</th>
          <th className="p-3 text-left">Profit</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map((t, i) => (
          <tr key={i} className="border-b">
            <td className="p-3">{descriptions[i]}</td>
            <td className="p-3">{sales[i]}</td>
            <td className="p-3">{purchases[i]}</td>
            <td className="p-3 font-semibold text-green-600">{profits[i]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionTable;
