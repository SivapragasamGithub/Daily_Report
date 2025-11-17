import React from "react";

function AddSaleModal({ open, onClose, onSubmit }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white w-[350px] p-5 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Add New Sale</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const data = {
              desc: e.target.desc.value,
              sale: Number(e.target.sale.value),
              purchase: Number(e.target.purchase.value),
            };
            onSubmit(data);
          }}
        >
          <input
            name="desc"
            className="w-full border p-2 rounded mb-2"
            placeholder="Description"
          />
          <input
            name="sale"
            type="number"
            className="w-full border p-2 rounded mb-2"
            placeholder="Sale price"
          />
          <input
            name="purchase"
            type="number"
            className="w-full border p-2 rounded mb-2"
            placeholder="Purchase price"
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
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddSaleModal;
