import React, { useEffect, useState } from "react";
import { Check, X } from "lucide-react";
import { Approveorreject, Pendingrequest } from "../../services/Auth/Authapi";
import { useSnackbar } from "notistack";

type Request = {
  _id: string;
  name: string;
  email: string;
  createdAt: string;
  tradingUsername: string;
  requestedUsername: string;
  reasonForChange: string;
};

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

const IDChanges: React.FC = () => {
  const [requests, setPendingreq] = useState<Request[]>([]);
  const { enqueueSnackbar } = useSnackbar();
  const handleGetrequests = async () => {
    try {
      const response = await Pendingrequest();
      console.log(response?.users);
      setPendingreq(response?.users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetrequests();
  }, []);

  const handleAcceptorreject = async (id: string, status: string) => {
    try {
      const response = await Approveorreject(id, { status: status });
      if (response.success) {
        enqueueSnackbar(response.message, { variant: "success" });
        handleGetrequests();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-[#0A0A0A] rounded-2xl border-2 border-[#FFFFFF1A] p-8 min-h-[360px] relative shadow-lg shadow-[#10101060] mx-5">
      {/* Header */}
      <div className="text-[#ddd] text-[15px] font-medium mb-4">
        TradingView ID Change Requests
      </div>

      <button className="absolute right-9 top-9 bg-[#23272f] text-[#ddd] border-none rounded-lg py-[7px] px-[14px] text-[13px] cursor-pointer">
        History
      </button>

      {/* Search bar */}

      {/* Requests List */}
      {requests.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12">
          <img src="/Objects.png" alt="No requests" className="" />
          <p>No New Request</p>
        </div>
      ) : (
        <div className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Search by name, email, or ID..."
            className="bg-[#23272f] border border-[#282932] rounded-lg text-[#c9ced6] text-[15px] px-[18px] py-[12px] w-[340px] mb-6 mt-4 outline-none"
          />
          {requests.map((req, idx) => (
            <div
              key={idx}
              className="bg-[#0A0A0A] rounded-xl p-[18px] border border-[#23282f] shadow-md shadow-[#10101025]"
            >
              <div className="flex items-center gap-7">
                {/* Avatar */}
                <div className="w-[38px] h-[38px] rounded-full bg-[#23282f] text-[#8bb5fa] font-bold text-[17px] flex items-center justify-center mr-1">
                  {getInitials(req.name)}
                </div>

                {/* User info */}
                <div>
                  <div className="text-white font-semibold text-[15px]">
                    {req.name}
                  </div>
                  <div className="text-[#bec3cc] text-[12px]">{req.email}</div>
                  <div className="text-[#7c8095] text-[11px] mt-[2px]">
                    {req.createdAt}
                  </div>
                </div>

                {/* <div className="flex-1" /> */}

                {/* ID card */}
                <div className="bg-[#1A1A1A] rounded-lg py-[11px] px-[19px] min-w-[265px] flex items-center gap-7 text-[#c9ced6] text-[14px] font-medium">
                  <span>
                    <div className="opacity-50 text-[12px]">Current ID</div>
                    <div className="font-semibold mt-[1px]">
                      {req.tradingUsername}
                    </div>
                  </span>
                  <span className="text-[18px] font-semibold text-[#98a0c0]">
                    &rarr;
                  </span>
                  <span>
                    <div className="opacity-50 text-[12px]">Requested ID</div>
                    <div className="font-semibold mt-[1px]">
                      {req.requestedUsername}
                    </div>
                  </span>
                </div>

                {/* Buttons */}
                <div className="flex gap-2 ml-4">
                  <button
                    onClick={() => {
                      handleAcceptorreject(req._id, "Rejected");
                    }}
                    className="bg-[#23272f] text-[#e23c32] border-none rounded-md text-[14px] font-medium py-[6px] px-[18px] cursor-pointer flex items-center gap-1.5"
                  >
                    <X size={17} />
                    Decline
                  </button>
                  <button
                    onClick={() => {
                      handleAcceptorreject(req._id, "Accepted");
                    }}
                    className="bg-[#165f31] text-white border-none rounded-md text-[14px] font-medium py-[6px] px-[19px] cursor-pointer flex items-center gap-1.5"
                  >
                    <Check size={17} />
                    Accept
                  </button>
                </div>
              </div>

              {/* Reason section */}
              <div className="mt-4 bg-[#121725] rounded-lg p-[14px_16px] text-[#c9ced9] text-[14px] font-medium border border-[#202334]">
                <div className="opacity-65 text-[13px] mb-1">
                  Reason for Change
                </div>
                <div>{req.reasonForChange}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default IDChanges;
