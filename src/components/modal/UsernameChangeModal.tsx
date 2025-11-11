import { LockKeyhole } from "lucide-react";
import React, { useState } from "react";
import { Requestforchangeusername } from "../../services/Auth/Authapi";
import { useAuth } from "../../Context/Auth";
import UsernameChangeRequest from "./UsernameChangeRequest";

interface UsernameChangeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const UsernameChangeModal: React.FC<UsernameChangeModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [newUsername, setNewUsername] = useState<string>("");
  const [success, setSuccess] = useState(false);
  const { user, profile } = useAuth();
  const [reason, setReason] = useState<string>("");
  if (!isOpen) return null;

  const handleRequestChange = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await Requestforchangeusername(
        {
          newTradingNumber: newUsername,
          reason: reason,
        },
        user?._id // Replace with actual user ID
      );
      if (response.success) {
        setSuccess(true);
      }
      console.log("Request submitted successfully:", response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50 backdrop-blur-sm">
      {/* Modal Content */}
      {!success ? (
        <div className="bg-black rounded-lg ">
          <div className="bg-[#1e1e2f] rounded-t-lg flex justify-between items-center mb-4 p-4">
            <div className="flex flex-col items-center">
              <h2 className="text-white text-xs font-semibold flex items-center gap-2 ">
                <LockKeyhole /> Request Username Change
              </h2>
              <span className="text-gray-400 font-normal text-xs ml-8">
                Submit a request to admin
              </span>
            </div>
            <button onClick={onClose} className="text-white text-xl">
              ×
            </button>
          </div>
          <form onSubmit={handleRequestChange} className="p-6">
            {/* Current Trading User Name */}
            <div className="mb-4">
              <label
                className="text-gray-400 text-sm"
                htmlFor="currentUsername"
              >
                Current Trading User Name
              </label>
              <input
                type="text"
                id="currentUsername"
                value={profile?.tradingUsername}
                className="w-full p-2 mt-1 rounded-md bg-[#2e2e45] "
                disabled
              />
            </div>

            {/* New Username */}
            <div className="mb-4">
              <label className="text-gray-400 text-sm" htmlFor="newUsername">
                New Username
              </label>
              <input
                type="text"
                id="newUsername"
                placeholder="SH839902"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
                className="w-full p-2 mt-1 rounded-md bg-[#2e2e45]"
              />
              <p className="text-xs text-gray-400 mt-1">
                Must match your TradingView account username
              </p>
            </div>

            {/* Reason for Change */}
            <div className="mb-4">
              <label className="text-gray-400 text-sm" htmlFor="reason">
                Reason for Change
              </label>
              <textarea
                id="reason"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="w-full p-2 mt-1 rounded-md bg-[#2e2e45] "
                rows={4}
                placeholder="Please explain why you need to change your username (e.g., account migration, typo correction, rebranding)"
              />
            </div>

            <div className="flex justify-between items-center">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-[#2e2e45] text-white rounded-md hover:bg-gray-500"
              >
                Cancel
              </button>
              <button type="submit" className="btn-primary">
                Submit Request
              </button>
            </div>
          </form>
        </div>
      ) : (
        <UsernameChangeRequest
          currentUsername={profile?.tradingUsername}
          requestedUsername={newUsername}
          onDone={() => onClose()}
        />
      )}
    </div>
  );
};

export default UsernameChangeModal;
