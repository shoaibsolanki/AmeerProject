// import { useEffect } from "react";
// import { useAuth } from "../Context/Auth";
// import { useNavigate } from "react-router-dom";

// export default function Home() {
//   const { profile } = useAuth();
//   const navigate = useNavigate();
//   useEffect(() => {
//     // Load Google Fonts
//     const link = document.createElement("link");
//     link.href =
//       "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap";
//     link.rel = "stylesheet";
//     document.head.appendChild(link);
//   }, []);

//   return (
//     <div className="flex flex-col h-100 justify-center items-center bg-black">
//       <div className="flex flex-col items-center">
//         {/* Custom box-remove image */}
//         <div className="mb-4">
//           <img
//             src="/homeimage.png" // If not using Next.js Image, use <img src={} ... />
//             alt="No products"
//             width={64}
//             height={64}
//             className="mx-auto"
//             draggable={false}
//           />
//         </div>
//         <h2 className="text-xl font-semibold text-white">
//           Hey <span className="text-yellow-400">{profile?.name}</span>...!!
//         </h2>
//         <p className="mt-2 text-gray-400 text-center">
//           You haven't added any tools to your dashboard yet.
//           <br />
//           Start with our free professional indicators designed for serious
//           traders.
//         </p>
//         <button onClick={() => navigate("/products")} className="btn-primary">
//           Browse Products
//         </button>
//       </div>
//     </div>
//   );
// }
import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#020203] flex flex-col items-center pt-10 pb-24 px-4">

      {/* Greeting */}
      <div className="w-full max-w-5xl mx-auto mb-5">
        <h1 className="text-[22px] font-bold text-white leading-tight">
          Welcome <span className="text-[#3587ff]">Natashia</span>
        </h1>
        <p className="text-[12px] text-gray-400 mt-1">
          Your premium tools are active and ready to use.
        </p>
      </div>

      {/* Recent Purchase */}
      <div className="w-full max-w-5xl mx-auto bg-[#050508] rounded-2xl border border-[#1e1e24] shadow mb-6">
        
        {/* Header */}
        <div className="px-5 pt-4 pb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-semibold text-gray-200">
                Recent Purchase
              </span>
              <span className="px-2 py-[2px] rounded-full bg-[#022c22] text-green-400 text-[10px] font-semibold">
                Active
              </span>
            </div>

            <span className="text-[11px] text-gray-500">
              Sep 3, 2025 • Invoice #ISTX-2025-AA-001
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button className="px-4 py-1 rounded-lg border border-[#d9d9d9] bg-transparent text-white text-[12px]">
              View Demo
            </button>
            <button className="px-4 py-1 rounded-lg bg-[#2563ff] text-white text-[12px]">
              Open Trading View
            </button>
          </div>

        </div>

        {/* Inner Card */}
        <div className="mx-3 mb-3 mt-1 rounded-2xl border border-[#1A1A1A] bg-[#0A0B0F]">
          <div className="px-5 pt-4 pb-5 flex items-start gap-3">

            {/* Placeholder Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
  <g clip-path="url(#clip0_165_2783)">
    <path d="M46 15.651L23 42.1173L0 15.651L23 12.4888L46 15.651Z" fill="#CE0045"/>
    <path d="M46 15.651L23 42.1173V12.4888L46 15.651Z" fill="#A00031"/>
    <path d="M34.5451 9.76932L31.8221 15.651L23 10.3899L14.1779 15.651L11.5 9.76932V3.8877H34.5L34.5451 9.76932Z" fill="#CE0045"/>
    <path d="M34.5451 9.76932L31.8221 15.651L23 10.3899V3.8877H34.5L34.5451 9.76932Z" fill="#A00031"/>
    <path d="M31.8216 15.651H14.1773L22.9995 3.8877L31.8216 15.651Z" fill="#FE7E52"/>
    <path d="M31.8221 15.651H23V3.8877L31.8221 15.651Z" fill="#F53241"/>
    <path d="M11.5 3.8877L0 15.6508H14.1777L11.5 3.8877Z" fill="#FE7E52"/>
    <path d="M31.8227 15.6508H46.0004L34.5004 3.8877L31.8227 15.6508Z" fill="#F53241"/>
    <path d="M31.8216 15.6514L22.9995 42.1176L14.1773 15.6514H31.8216Z" fill="#F53241"/>
    <path d="M31.8221 15.6514L23 42.1176V15.6514H31.8221Z" fill="#CE0045"/>
  </g>
  <defs>
    <clipPath id="clip0_165_2783">
      <rect width="46" height="46" fill="white"/>
    </clipPath>
  </defs>
</svg>

            {/* Text */}
            <div className="flex-1">
              <div className="text-white font-semibold text-[13px] leading-tight mb-2">
                iStokx Intraday Levels Indicator
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-20 text-[11px]">

                <div>
                  <p className="text-gray-500 mb-[2px]">Access Granted</p>
                  <p className="text-gray-300">Sep 3, 2025 at 2:30 PM</p>
                </div>

                <div>
                  <p className="text-gray-500 mb-[2px]">Next Billing</p>
                  <p className="text-gray-300">Oct 3, 2025</p>
                </div>

                <div>
                  <p className="text-gray-500 mb-[2px]">Amount Paid</p>
                  <p className="text-gray-300">₹2,123.48</p>
                </div>

                <div>
                  <p className="text-gray-500 mb-[2px]">Payment Method</p>
                  <p className="text-gray-300">Card Payment</p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Free Tools */}
      <div className="w-full max-w-5xl mx-auto bg-[#18181c] rounded-2xl border border-[#23232a]">
        
        <div className="px-5 pt-4 pb-3">
          <h2 className="text-white font-semibold text-sm">Your Free Tools</h2>
          <p className="text-gray-400 text-[11px] mt-1">
            2 professional indicators available
          </p>
        </div>

        <div className="divide-y divide-[#23232a]">

          {/* Row 1 */}
          <div className="flex p-4 gap-4 items-center rounded-xl border border-[#1A1A1A] bg-[#0A0B0F] mx-2">
            
            {/* Placeholder Icon */}
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="8" stroke="#33e17c" strokeWidth="2" />
                <path d="M6.5 10.5l2 2.5 4.5-5" stroke="#33e17c" strokeWidth="2" strokeLinecap="round" />
              </svg>

            <div className="flex-1">
              <p className="text-white text-[13px] font-semibold leading-tight">
                Stokx Next CPR + Previous High/Low
              </p>
              <p className="text-gray-400 text-[11px] mt-[3px]">
                Plan your trades with precision using dynamic CPR
              </p>
            </div>

            <span className="text-[#7aaeeb] text-[13px] font-semibold">
              Open →
            </span>
          </div>

          {/* Row 2 */}
          <div className="flex p-4 gap-4 items-center rounded-xl border border-[#1A1A1A] bg-[#0A0B0F] mx-2 mb-4">
            
            {/* Placeholder Icon */}
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="8" stroke="#33e17c" strokeWidth="2" />
                <path d="M6.5 10.5l2 2.5 4.5-5" stroke="#33e17c" strokeWidth="2" strokeLinecap="round" />
              </svg>

            <div className="flex-1">
              <p className="text-white text-[13px] font-semibold leading-tight">
                Stokx CPR (Daily / Weekly / Monthly)
              </p>
              <p className="text-gray-400 text-[11px] mt-[3px]">
                Plan your trades with precision using dynamic CPR
              </p>
            </div>

            <span className="text-[#7aaeeb] text-[13px] font-semibold">
              Open →
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}



