import React from "react";
import { ChevronDown, Home, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface DetailthiredpageProps {
  selectedState: string;
  setSelectedState: (state: string) => void;
  selectedCity: string;
  setSelectedCity: (city: string) => void;
}

const Detailthiredpage = ({
  selectedState,
  setSelectedState,
  selectedCity,
  setSelectedCity,
}: DetailthiredpageProps) => {
  const navigate = useNavigate();
  const states = ["Tamil Nadu", "Kerala", "Karnataka"];
  const cities = {
    "Tamil Nadu": ["Madurai", "Nagapattinam", "Neyveli"],
    Kerala: ["Kochi", "Trivandrum", "Kozhikode"],
    Karnataka: ["Bangalore", "Mysuru", "Mangalore"],
  };
  return (
    <form className="space-y-5 mt-6">
      {/* State & City */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm text-gray-400">State</label>
          <div className="relative">
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="appearance-none w-full bg-[#121212] border border-gray-800 rounded-lg py-3 px-4 pr-8 text-sm text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-400 transition"
            >
              <option value="">Select State</option>
              {states.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-3.5 w-4 h-4 text-gray-500 pointer-events-none" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm text-gray-400">City</label>
          <div className="relative">
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              disabled={!selectedState}
              className="appearance-none w-full bg-[#121212] border border-gray-800 rounded-lg py-3 px-4 pr-8 text-sm text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-400 transition disabled:opacity-50"
            >
              <option value="">Select City</option>
              {selectedState &&
                cities[selectedState].map((city: string) => (
                  <option key={city}>{city}</option>
                ))}
            </select>
            <ChevronDown className="absolute right-3 top-3.5 w-4 h-4 text-gray-500 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Zip Code */}
      <div className="space-y-2">
        <label className="text-sm text-gray-400">Zip Code</label>
        <div className="relative">
          <input
            type="text"
            placeholder="Enter Zip Code"
            className="w-full bg-[#121212] border border-gray-800 rounded-lg py-3 px-4 pr-10 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-400 transition"
          />
          <MapPin className="absolute right-3 top-3.5 w-4 h-4 text-gray-500" />
        </div>
      </div>

      {/* Address */}
      <div className="space-y-2">
        <label className="text-sm text-gray-400">Address line (Optional)</label>
        <div className="relative">
          <input
            type="text"
            placeholder="eg: 21A North Lane ..."
            className="w-full bg-[#121212] border border-gray-800 rounded-lg py-3 px-4 pr-10 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-400 transition"
          />
          <Home className="absolute right-3 top-3.5 w-4 h-4 text-gray-500" />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end mt-6">
        <button
          onClick={() => {
            navigate("/");
          }}
          className="btn-primary"
        >
          Create Account
        </button>
      </div>
    </form>
  );
};

export default Detailthiredpage;
