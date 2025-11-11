import React from "react";
import { Check, CheckCircle } from "lucide-react";

interface UsernameChangeRequestProps {
  currentUsername?: string;
  requestedUsername: string;
  onDone: () => void;
}

const UsernameChangeRequest: React.FC<UsernameChangeRequestProps> = ({
  currentUsername,
  requestedUsername,
  onDone,
}) => {
  return (
    <div className="flex flex-col items-center justify-center  ">
      <div className="w-[420px] bg-[#030303] rounded-2xl shadow-lg p-6 text-center border border-[#1E1E1E]">
        {/* Success Icon */}
        <div className="flex justify-center mb-4">
          <Check className="text-white w-12 h-12 bg-green-500 rounded-[50%] p-2" />
        </div>

        {/* Title */}
        <h2 className="text-white text-lg font-semibold mb-2">
          Request Username Change
        </h2>

        {/* Subtitle */}
        <p className="text-gray-400 text-sm mb-6">
          Your username change request has been sent to our admin team. You will
          be notified via email once it’s reviewed.
        </p>

        {/* Username Info */}
        <div className="bg-[#1A1A1A] rounded-xl text-left p-4 mb-6 border border-[#2A2A2A]">
          <div className="mb-3 flex justify-between">
            <p className="text-gray-500 text-xs mb-1">Current Username</p>
            <p className="text-white font-medium">{currentUsername}</p>
          </div>

          <div className="flex justify-between">
            <p className="text-gray-500 text-xs mb-1">Requested Username</p>
            <p className="text-blue-500 font-medium">{requestedUsername}</p>
          </div>
        </div>

        {/* Done Button */}
        <button
          onClick={onDone}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl transition-all"
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default UsernameChangeRequest;
