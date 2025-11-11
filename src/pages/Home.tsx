import { useEffect } from "react";
import { useAuth } from "../Context/Auth";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { profile } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    // Load Google Fonts
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <div className="flex flex-col h-100 justify-center items-center bg-black">
      <div className="flex flex-col items-center">
        {/* Custom box-remove image */}
        <div className="mb-4">
          <img
            src="/homeimage.png" // If not using Next.js Image, use <img src={} ... />
            alt="No products"
            width={64}
            height={64}
            className="mx-auto"
            draggable={false}
          />
        </div>
        <h2 className="text-xl font-semibold text-white">
          Hey <span className="text-yellow-400">{profile?.name}</span>...!!
        </h2>
        <p className="mt-2 text-gray-400 text-center">
          You haven't added any tools to your dashboard yet.
          <br />
          Start with our free professional indicators designed for serious
          traders.
        </p>
        <button onClick={() => navigate("/products")} className="btn-primary">
          Browse Products
        </button>
      </div>
    </div>
  );
}
// import React from "react";

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-black flex flex-col items-center pt-8 pb-24 px-2">
//       {/* Greeting */}
//       <div className="max-w-3xl w-full mx-auto mb-4">
//         <h1 className="text-2xl font-bold text-white leading-tight">
//           Welcome <span className="text-[#3587ff]">Natashia</span>
//         </h1>
//         <p className="text-sm text-gray-400 mt-1">
//           Your premium tools are active and ready to use.
//         </p>
//       </div>

//       {/* Recent Purchase Card */}
//       <div className="bg-[#18181c] rounded-2xl w-full max-w-3xl shadow mb-6 mt-2 border border-[#23232a]">
//         <div className="px-5 pt-4 pb-2 flex flex-wrap items-center justify-between">
//           <div className="flex items-center gap-1">
//             <span className="text-xs font-semibold text-gray-300">Recent Purchase</span>
//             <span className="ml-2 px-1.5 rounded bg-[#1f2937] text-green-400 text-xs font-bold">Active</span>
//           </div>
//           <div className="text-xs text-gray-400">
//             Sep 3, 2025 • Invoice #ISTX-2025-AA-001
//           </div>
//         </div>
//         <div className="border-t border-[#23232a] px-5 py-5 flex flex-col gap-4">
//           <div className="flex items-center gap-3">
//             {/* Premium diamond icon */}
//             <span className="w-6 h-6 bg-[#e24ebc] rounded-full flex items-center justify-center text-white text-lg font-black shadow inner-shadow-lg">
//               {/* ICON PLACEHOLDER */}
//               <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
//                 <path d="M10 2 L13.8 8.7 L19 9.6 L15 14.2 L16 19.5 L10 16.7 L4 19.5 L5 14.2 L1 9.6 L6.2 8.7 Z" fill="white" />
//               </svg>
//             </span>
//             <div>
//               <div className="font-semibold text-white text-base leading-5">
//                 iStokx Intraday Levels Indicator
//               </div>
//               <div className="flex flex-wrap gap-x-8 mt-1 text-xs text-gray-400">
//                 <div>
//                   <span className="font-medium text-gray-300">Access Granted</span>
//                   <span className="block">Sep 3, 2025 at 2:30 PM</span>
//                 </div>
//                 <div>
//                   <span className="font-medium text-gray-300">Next Billing</span>
//                   <span className="block">Oct 3, 2025</span>
//                 </div>
//                 <div>
//                   <span className="font-medium text-gray-300">Amount Paid</span>
//                   <span className="block">₹2,123.48</span>
//                 </div>
//                 <div>
//                   <span className="font-medium text-gray-300">Payment Method</span>
//                   <span className="block">Card Payment</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="flex items-center justify-end gap-3 mt-2">
//             <button className="px-4 py-1.5 bg-[#232334] rounded text-[#7aaeeb] text-sm font-semibold border border-[#232334] hover:bg-[#253654] transition">
//               View Demo
//             </button>
//             <button className="px-4 py-1.5 bg-[#245ff8] rounded text-white text-sm font-semibold hover:bg-[#2d6bf3] transition">
//               Open Trading View
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Free Tools Card */}
//       <div className="bg-[#18181c] rounded-2xl w-full max-w-3xl shadow mt-6 border border-[#23232a]">
//         <div className="px-5 pt-4 pb-1">
//           <div className="text-white font-semibold">Your Free Tools</div>
//           <div className="text-xs text-gray-400 mb-1">
//             2 professional indicators available
//           </div>
//         </div>
//         <div className="divide-y divide-[#23232a] mt-2">
//           {/* Free Tool Row */}
//           <div className="flex items-center px-5 py-4">
//             {/* Tool icon */}
//             <span className="w-8 h-8 rounded bg-[#1e293b] flex items-center justify-center mr-3">
//               {/* ICON PLACEHOLDER */}
//               <svg viewBox="0 0 20 20" width="18" height="18" fill="none">
//                 <circle cx="10" cy="10" r="8" stroke="#33e17c" strokeWidth="2" fill="none"/>
//                 <path d="M6.5 10.5l2 2.5 4.5-5" stroke="#33e17c" strokeWidth="2" strokeLinecap="round"/>
//               </svg>
//             </span>
//             <div className="flex-1">
//               <div className="text-white font-semibold leading-tight text-sm">
//                 Stokx Next CPR + Previous High/Low
//               </div>
//               <div className="text-xs text-gray-400">
//                 Plan your trades with precision using dynamic CPR
//               </div>
//             </div>
//             <a
//               href="#"
//               className="ml-3 text-[#7aaeeb] text-sm font-semibold flex gap-1 items-center hover:underline group"
//             >
//               Open in Trading View
//               <span className="ml-0.5">
//                 {/* Arrow icon */}
//                 <svg width={16} height={16} fill="none"><path d="M6 4l4 4-4 4" stroke="#7aaeeb" strokeWidth="2" strokeLinecap="round"/></svg>
//               </span>
//             </a>
//           </div>
//           {/* 2nd Free Tool Row  */}
//           <div className="flex items-center px-5 py-4">
//             <span className="w-8 h-8 rounded bg-[#1e293b] flex items-center justify-center mr-3">
//               {/* ICON PLACEHOLDER */}
//               <svg viewBox="0 0 20 20" width="18" height="18" fill="none">
//                 <circle cx="10" cy="10" r="8" stroke="#33e17c" strokeWidth="2" fill="none"/>
//                 <path d="M6.5 10.5l2 2.5 4.5-5" stroke="#33e17c" strokeWidth="2" strokeLinecap="round"/>
//               </svg>
//             </span>
//             <div className="flex-1">
//               <div className="text-white font-semibold leading-tight text-sm">
//                 Stokx CPR (Daily / Weekly / Monthly)
//               </div>
//               <div className="text-xs text-gray-400">
//                 Plan your trades with precision using dynamic CPR
//               </div>
//             </div>
//             <a
//               href="#"
//               className="ml-3 text-[#7aaeeb] text-sm font-semibold flex gap-1 items-center hover:underline group"
//             >
//               Open in Trading View
//               <span className="ml-0.5">
//                 <svg width={16} height={16} fill="none"><path d="M6 4l4 4-4 4" stroke="#7aaeeb" strokeWidth="2" strokeLinecap="round"/></svg>
//               </span>
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
