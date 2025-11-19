import { Plus, Pen, Trash2 } from "lucide-react";
import { useState } from "react";
import ProductModal from "../componants/Modal/ProductModal";

const products = [
  {
    name: "Stokx Next CPR + Previous High/Low",
    desc: "Plan your trades with precision using dynamic CPR and previous session levels—everything you need on one screen in standard form.",
    tier: "Free",
    price: "-",
    features: "4 features",
    status: "Active",
  },
  {
    name: "iStokx Intraday Levels Indicator",
    desc: "Experience institutional-grade precision with real-time daily support, resistance, and opening levels that react perfectly with market movement...",
    tier: "Premium",
    price: "$79.99/mo",
    features: "6 features",
    status: "Active",
  },
  {
    name: "Stokx Dynamic Multi MA Pack",
    desc: "Simplify trend trading with five powerful moving averages—SMA, EMA, WMA, HMA, and VWMA—for multi-faceted trend analysis.",
    tier: "Free",
    price: "-",
    features: "8 features",
    status: "Active",
  },
  {
    name: "Stokx CPR (Daily / Weekly / Monthly)",
    desc: "Understand market bias like a pro with multi-timeframe CPR zones that align to your trading style.",
    tier: "Free",
    price: "-",
    features: "4 features",
    status: "Active",
  },
  {
    name: "Lifetime Access",
    desc: "One-time payment for lifetime access",
    tier: "Free",
    price: "-",
    features: "4 features",
    status: "Inactive",
  },
];

function statusStyle(status: string) {
  if (status === "Active") return "bg-green-900 text-green-400";
  return "bg-gray-800 text-gray-300";
}

function tierStyle(tier: string) {
  if (tier === "Premium") return "bg-red-900 text-red-400";
  return "bg-blue-900 text-blue-400";
}

export default function ProductManagement() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="bg-[#18181c] p-7 rounded-xl border border-gray-800 shadow-md min-h-[450px] max-w-5xl mx-auto mt-6">
        <div className="flex justify-between items-center mb-6">
          <span className="font-medium text-sm text-gray-200">Product Management</span>
          <button
            className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded font-semibold text-sm hover:bg-blue-500 transition"
            onClick={() => setShowModal(true)}  // Show modal on click
          >
            <Plus size={18} /> Create Product
          </button>
        </div>
        {/* Search + Filter */}
        <div className="flex gap-4 mb-4 justify-between">
          <input
            type="text"
            placeholder="Search products..."
            className="px-4 py-2 bg-gray-900 rounded text-sm text-gray-300 w-60 outline-none border border-gray-800"
          />
          <select className="px-3 py-2 bg-gray-900 rounded text-sm text-gray-300 border border-gray-800">
            <option>All Status</option>
            <option>Active</option>
            <option>Inactive</option>
            <option>Premium</option>
          </select>
        </div>
        {/* Product Table */}
        <div className="mt-2 rounded-xl overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-950 text-gray-400 text-xs">
              <tr>
                <th className="px-4 py-2 font-normal">Product Name</th>
                <th className="px-2 py-2 font-normal">Tier</th>
                <th className="px-2 py-2 font-normal">Price</th>
                <th className="px-2 py-2 font-normal">Features</th>
                <th className="px-2 py-2 font-normal">Status</th>
                <th className="px-2 py-2 font-normal">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p, idx) => (
                <tr
                  key={p.name}
                  className={`border-b border-gray-800 last:border-b-0 text-gray-200 hover:bg-gray-800 transition`}
                >
                  <td className="px-4 py-3">
                    <div className="font-semibold mb-1">{p.name}</div>
                    <div className="text-xs text-gray-400">{p.desc}</div>
                  </td>
                  <td className="px-2 py-3">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${tierStyle(p.tier)}`}>{p.tier}</span>
                  </td>
                  <td className="px-2 py-3">{p.price}</td>
                  <td className="px-2 py-3 text-nowrap">{p.features}</td>
                  <td className="px-2 py-3">
                    <span className={`px-3 py-1 rounded text-xs font-semibold ${statusStyle(p.status)}`}>{p.status}</span>
                  </td>
                  <td className="px-2 py-3">
                    <div className="flex gap-3">
                      <button className="p-2 rounded hover:bg-gray-700 transition" title="Edit">
                        <Pen size={16} className="text-gray-300" />
                      </button>
                      <button className="p-2 rounded hover:bg-gray-700 transition" title="Delete">
                        <Trash2 size={16} className="text-red-400" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    {showModal && (
  <ProductModal
    show={showModal}
    onClose={() => setShowModal(false)}
    onSave={(form) => {
      // handle save logic (optionally add product)
      setShowModal(false);
    }}
    onDraft={() => {
      // handle preview or save draft action
      setShowModal(false);
    }}
  />
)}

    </>
  );
}
