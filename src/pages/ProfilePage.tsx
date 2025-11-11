import { LockIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import UsernameChangeModal from "../components/modal/UsernameChangeModal";
import { GetUserDetails, UserDetail } from "../services/Auth/Authapi";
import { useAuth } from "../Context/Auth";
import type { UpdateDetailpayload } from "../services/Auth/AuthInterface";
import { useSnackbar } from "notistack";

const ProfilePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const [profile, setProfile] = useState({
    fullName: "Wasim Arshad",
    whatsapp: "7839429381",
    state: "Tamil Nadu",
    city: "Madurai",
    zip: "625 010",
    address: "21A, North Lane, KK Nagar",
    email: "john.ds@gmail.com",
    tradingView: "IDH84395SB23",
  });

  const { user } = useAuth();

  // Update individual profile field
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const updateProfile = async () => {
    try {
      const profileData: UpdateDetailpayload = {
        name: profile.fullName.toString(),
        phone: profile.whatsapp.toString(),
        state: profile.state.toString(),
        city: profile.city.toString(),
        pincode: profile.zip.toString(),
        addressLine: profile.address.toString(),
        email: profile.email.toString(),
      };

      const response = await UserDetail(profileData);
      if (response?.success) {
        enqueueSnackbar("Profile Updated Successful", { variant: "success" });
      } else {
        enqueueSnackbar(response?.message, { variant: "error" });
      }
    } catch (error) {
      console.log(error);
      enqueueSnackbar("Updating Faild ", { variant: "error" });
    }
  };

  // Handle button click
  const handleButtonClick = () => {
    if (editMode) {
      // Save logic
      // You can add API call here if required
      updateProfile();
      setEditMode(false);
    } else {
      setEditMode(true);
    }
  };

  const getUserDetails = async () => {
    try {
      const response = await GetUserDetails(user?._id);
      console.log(response);
      const userProfile = response.user;
      setProfile({
        fullName: userProfile.name || "",
        whatsapp: userProfile.phone || "",
        state: userProfile.state || "",
        city: userProfile.city || "",
        zip: userProfile.zip || "",
        address: userProfile.addressLine || "",
        email: userProfile.email || "",
        tradingView: userProfile.tradingUsername || "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-start px-6 py-10">
      <div className="w-full ">
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
                : "btn-primary"
            }`}
            onClick={handleButtonClick}
          >
            {editMode ? "Save Profile" : "Edit Profile"}
          </button>
        </div>
        <div className="flex flex-col items-center">
          <form
            className=" p-8 rounded-2xl shadow-lg space-y-6 w-full max-w-[666px]"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="text-gray-300 mb-2 block text-sm">
                  Full Name
                </label>
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
                <label className="text-gray-300 mb-2 block text-sm">
                  State
                </label>
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
                <label className="text-gray-300 mb-2 block text-sm">
                  Address line <span className="text-gray-500">(Optional)</span>
                </label>
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
              <div>
                <label className="text-gray-300 mb-2 block text-sm">
                  Zip Code
                </label>
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
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="text-gray-300 mb-2 block text-sm flex items-center gap-2">
                  <LockIcon /> Email Address
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
                  <LockIcon /> Trading View Username
                </label>
                <input
                  type="text"
                  name="tradingView"
                  value={profile.tradingView}
                  disabled
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
          <div className="max-w-2xl bg-[#13203c] border border-blue-900 rounded-2xl p-6 mt-6 flex items-center gap-4">
            <div>
              <div className="text-blue-300 font-semibold mb-2 flex items-center gap-2">
                <LockIcon /> Protected Field
              </div>
              <div className="text-gray-400 text-sm">
                Your TradingView username is locked for security purposes. To
                update your Trading View Username, Please submit a change
                request to our admin team for review and approval.
              </div>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn-primary"
              disabled={editMode}
            >
              Request Change
            </button>
          </div>
        </div>
      </div>
      <UsernameChangeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default ProfilePage;
