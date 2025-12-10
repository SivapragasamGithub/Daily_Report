import React, { useContext, useEffect, useState } from "react";
import transactionContext from "../TransactionContext";

function AddSaleModal({ open, onClose, onSubmit }) {
  if (!open) return null;

  const { editData } = useContext(transactionContext);

  // Local state for input values
  const [form, setForm] = useState({
    description: "",
    sale: "",
    purchase: "",
  });

  // Prefill data when editing
  useEffect(() => {
    if (editData) {
      setForm({
        desc: editData.description,
        sale: editData.sale,
        purchase: editData.purchase,
      });
    }
  }, [editData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white w-[350px] p-5 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold mb-4">
          {editData ? "Edit Transaction" : "Add New Sale"}
        </h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const data = {
              description: form.desc,
              sale: Number(form.sale),
              purchase: Number(form.purchase),
              Date: new Date(),
              id: editData?.id || undefined,
            };
            onSubmit(data);
          }}
        >
          <input
            name="desc"
            className="w-full border p-2 rounded mb-2"
            placeholder="Description"
            value={form.desc}
            onChange={handleChange}
          />

          <input
            name="sale"
            type="number"
            className="w-full border p-2 rounded mb-2"
            placeholder="Sale price"
            value={form.sale}
            onChange={handleChange}
          />

          <input
            name="purchase"
            type="number"
            className="w-full border p-2 rounded mb-2"
            placeholder="Purchase price"
            value={form.purchase}
            onChange={handleChange}
          />

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1 border rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-3 py-1 bg-blue-600 text-white rounded"
            >
              {editData ? "Update" : "Add"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddSaleModal;
