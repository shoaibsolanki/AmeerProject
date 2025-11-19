import React, { useState } from "react";
import { X, Eye, Save } from "lucide-react";

// Props type definition
type ProductModalProps = {
  show: boolean;
  onClose: () => void;
  onSave: (form: ProductFormType) => void;
  onDraft: () => void;
};

// Product form type definition
type ProductFormType = {
  name: string;
  desc: string;
  tier: string;
  billing: string;
  price: string;
  maxUsers: string;
  active: boolean;
};

const initialForm: ProductFormType = {
  name: "",
  desc: "",
  tier: "Basic",
  billing: "Monthly",
  price: "",
  maxUsers: "",
  active: true,
};

export default function ProductModal({
  show,
  onClose,
  onSave,
  onDraft,
}: ProductModalProps) {
  const [form, setForm] = useState<ProductFormType>(initialForm);

  if (!show) return null;

function handleChange(
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) {
  const { name, value, type } = e.target;

  if (type === "checkbox") {
    // TypeScript ko btao ki target HTMLInputElement hai
    const checkbox = e.target as HTMLInputElement;
    setForm((prev) => ({
      ...prev,
      [name]: checkbox.checked,
    }));
  } else {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
}


  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSave(form);
    // Optionally reset form: setForm(initialForm);
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-[#18181c] rounded-xl shadow-lg border border-gray-800 w-full max-w-md p-6 relative overflow-hidden">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-100"
          onClick={onClose}
          aria-label="Close"
        >
          <X size={22} />
        </button>
        <h2 className="text-lg font-bold text-gray-100 mb-1">Create New Product</h2>
        <p className="text-xs text-gray-400 mb-5">
          Add a new product to your catalog.
        </p>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-xs text-gray-400 mb-1">
              Product Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded bg-black text-gray-200 border border-gray-700 outline-none text-sm"
              placeholder="e.g. Premium Trading Strategy"
              required
            />
          </div>
          <div>
            <label className="block text-xs text-gray-400 mb-1">
              Description
            </label>
            <textarea
              name="desc"
              value={form.desc}
              onChange={handleChange}
              rows={2}
              className="w-full px-3 py-2 rounded bg-black text-gray-200 border border-gray-700 outline-none text-sm resize-none"
              placeholder="Brief description of the product"
              required
            />
          </div>
          <div className="flex gap-3">
            <div className="flex-1">
              <label className="block text-xs text-gray-400 mb-1">Tier</label>
              <select
                name="tier"
                value={form.tier}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded bg-black text-gray-200 border border-gray-700 text-sm"
              >
                <option value="Basic">Basic</option>
                <option value="Premium">Premium</option>
                <option value="Free">Free</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-xs text-gray-400 mb-1">
                Billing Period
              </label>
              <select
                name="billing"
                value={form.billing}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded bg-black text-gray-200 border border-gray-700 text-sm"
              >
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
                <option value="One-time">One-time</option>
              </select>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex-1">
              <label className="block text-xs text-gray-400 mb-1">
                Price (USD)
              </label>
              <input
                type="number"
                name="price"
                value={form.price}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded bg-black text-gray-200 border border-gray-700 text-sm"
                placeholder="0.00"
              />
            </div>
            <div className="flex-1">
              <label className="block text-xs text-gray-400 mb-1">
                Max Users (Optional)
              </label>
              <input
                type="number"
                name="maxUsers"
                value={form.maxUsers}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded bg-black text-gray-200 border border-gray-700 text-sm"
                placeholder="4"
              />
            </div>
          </div>
          <div className="flex items-center mt-2 mb-2 gap-3">
            <label className="text-xs text-gray-400 flex-1">Active Status</label>
            <input
              type="checkbox"
              name="active"
              checked={form.active}
              onChange={handleChange}
              className="form-checkbox accent-blue-600 w-5 h-5"
            />
            <span className="text-xs text-gray-500">
              {form.active ? "Active" : "Inactive"}
            </span>
          </div>
          <div className="rounded-lg bg-black/80 p-4 mt-2 mb-2 border border-gray-800">
            <div className="text-xs text-gray-400 mb-2">Product Summary</div>
            <div className="grid grid-cols-3 gap-2">
              <div>
                <span className="text-xs text-gray-500">Tier:</span>
                <span
                  className={`ml-1 px-2 py-1 rounded text-xs ${
                    form.tier === "Premium"
                      ? "bg-red-900 text-red-400"
                      : form.tier === "Basic"
                      ? "bg-blue-900 text-blue-400"
                      : "bg-gray-900 text-gray-300"
                  }`}
                >
                  {form.tier}
                </span>
              </div>
              <div>
                <span className="text-xs text-gray-500">Price:</span>
                <span className="ml-1 px-2 py-1 rounded text-xs bg-gray-900 text-gray-300">
                  {form.price ? `$${form.price}` : "-"}
                </span>
              </div>
              <div>
                <span className="text-xs text-gray-500">Status:</span>
                <span
                  className={`ml-1 px-2 py-1 rounded text-xs ${
                    form.active
                      ? "bg-green-900 text-green-300"
                      : "bg-gray-800 text-gray-400"
                  }`}
                >
                  {form.active ? "Active" : "Inactive"}
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-end gap-3 mt-6">
            <button
              type="button"
              className="bg-gray-800 text-gray-300 px-4 py-2 rounded font-semibold flex items-center gap-2 hover:bg-gray-700"
              onClick={onDraft}
            >
              <Eye size={18} /> Preview
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded font-semibold flex items-center gap-2 hover:bg-blue-500"
            >
              <Save size={18} /> Save as Draft
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
