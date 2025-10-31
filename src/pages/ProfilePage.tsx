import React, { useState } from "react";

const ProfilePage = () => {
  const [editMode, setEditMode] = useState(false);
  const [profile, setProfile] = useState({
    fullName: "Wasim Arshad",
    whatsapp: "7839429381",
    state: "Tamil Nadu",
    city: "Madurai",
    zip: "625 010",
    address: "21A, North Lane, KK Nagar",
    email: "john.ds@gmail.com",
    tradingView: "IDH84395SB23"
  });

  // Update individual profile field
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle button click
  const handleButtonClick = () => {
    if (editMode) {
      // Save logic
      // You can add API call here if required
      setEditMode(false);
    } else {
      setEditMode(true);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-start px-6 py-10">
      <div className="w-full max-w-2xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-semibold mb-1">My Profile</h1>
            <p className="text-gray-400 mb-8 text-base">
              Manage your account information and trading preferences
            </p>
          </div>
          <button
            className={`px-7 py-2 rounded-lg font-semibold transition ${
              editMode
                ? "bg-green-600 text-white hover:bg-green-700"
                : "bg-blue-500 text-white hover:bg-blue-700"
            }`}
            onClick={handleButtonClick}
          >
            {editMode ? "Save Profile" : "Edit Profile"}
          </button>
        </div>
        <form className="bg-[#16191e] p-8 rounded-2xl shadow-lg space-y-6" onSubmit={e => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="text-gray-300 mb-2 block text-sm">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={profile.fullName}
                disabled={!editMode}
                onChange={handleInputChange}
                className={`w-full bg-[#232633] text-white rounded-lg px-4 py-3 focus:outline-none ${
                  editMode ? "border border-blue-400" : ""
                }`}
              />
            </div>
            <div>
              <label className="text-gray-300 mb-2 block text-sm">
                WhatsApp Number
              </label>
              <input
                type="text"
                name="whatsapp"
                value={profile.whatsapp}
                disabled={!editMode}
                onChange={handleInputChange}
                className={`w-full bg-[#232633] text-white rounded-lg px-4 py-3 focus:outline-none ${
                  editMode ? "border border-blue-400" : ""
                }`}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="text-gray-300 mb-2 block text-sm">State</label>
              <input
                type="text"
                name="state"
                value={profile.state}
                disabled={!editMode}
                onChange={handleInputChange}
                className={`w-full bg-[#232633] text-white rounded-lg px-4 py-3 focus:outline-none ${
                  editMode ? "border border-blue-400" : ""
                }`}
              />
            </div>
            <div>
              <label className="text-gray-300 mb-2 block text-sm">City</label>
              <input
                type="text"
                name="city"
                value={profile.city}
                disabled={!editMode}
                onChange={handleInputChange}
                className={`w-full bg-[#232633] text-white rounded-lg px-4 py-3 focus:outline-none ${
                  editMode ? "border border-blue-400" : ""
                }`}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="text-gray-300 mb-2 block text-sm">Zip Code</label>
              <input
                type="text"
                name="zip"
                value={profile.zip}
                disabled={!editMode}
                onChange={handleInputChange}
                className={`w-full bg-[#232633] text-white rounded-lg px-4 py-3 focus:outline-none ${
                  editMode ? "border border-blue-400" : ""
                }`}
              />
            </div>
            <div>
              <label className="text-gray-300 mb-2 block text-sm">Address line <span className="text-gray-500">(Optional)</span></label>
              <input
                type="text"
                name="address"
                value={profile.address}
                disabled={!editMode}
                onChange={handleInputChange}
                className={`w-full bg-[#232633] text-white rounded-lg px-4 py-3 focus:outline-none ${
                  editMode ? "border border-blue-400" : ""
                }`}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="text-gray-300 mb-2 block text-sm flex items-center gap-2">
                Email Address
                <svg width="16" height="16" fill="currentColor" className="ml-1 text-gray-500"><path d="M1 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.201V4a1 1 0 0 0-1-1H3Zm11 2.383-7 4.201-7-4.201V12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5.383Z" /></svg>
              </label>
              <input
                type="email"
                name="email"
                value={profile.email}
                disabled
                className="w-full bg-[#232633] text-white rounded-lg px-4 py-3 focus:outline-none"
              />
              <span className="text-xs mt-1 text-gray-500 block">
                Email Address cannot be changed
              </span>
            </div>
            <div>
              <label className="text-gray-300 mb-2 block text-sm flex items-center gap-2">
                Trading View Username
                <svg width="16" height="16" fill="currentColor" className="ml-1 text-gray-500"><path d="M4 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4Zm8.5 2.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5V4a.5.5 0 0 1 .5-.5h8.5ZM7.5 7v2h1V7h-1Z" /></svg>
              </label>
              <input
                type="text"
                name="tradingView"
                value={profile.tradingView}
                disabled={!editMode}
                onChange={handleInputChange}
                className={`w-full bg-[#232633] text-white rounded-lg px-4 py-3 focus:outline-none ${
                  editMode ? "border border-blue-400" : ""
                }`}
              />
              <span className="text-xs mt-1 text-gray-500 block">
                Request change for admin
              </span>
            </div>
          </div>
        </form>
        <div className="bg-[#13203c] border border-blue-900 rounded-2xl p-6 mt-6 flex items-center gap-4">
          <svg width="28" height="28" fill="currentColor" className="text-blue-400">
            <circle cx="14" cy="14" r="12" stroke="blue" strokeWidth="2" fill="#323e6f"/>
            <path d="M14 11v3h3" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
            <circle cx="14" cy="16.5" r="5.5" fill="none" stroke="#fff" strokeWidth="2"/>
          </svg>
          <div>
            <div className="text-blue-300 font-semibold mb-2">Protected Field</div>
            <div className="text-gray-400 text-sm">
              Your TradingView username is locked for security purposes. To update your Trading View Username, Please submit a change request to our admin team for review and approval.
            </div>
          </div>
          <button
            className="ml-auto px-5 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            disabled={!editMode}
          >
            Request Change
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
