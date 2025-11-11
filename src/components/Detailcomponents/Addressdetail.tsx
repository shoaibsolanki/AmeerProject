import React from "react";
import { ChevronDown, Home, MapPin } from "lucide-react";

interface FormData {
  email: string;
  name: string;
  tradingUsername: string;
  phone: string;
  state: string;
  city: string;
  pincode: string;
  addressLine: string;
}

interface DetailthiredpageProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  states: string[];
  cities: Record<string, string[]>;
  onSubmit: () => void;
  setStep: (step: number) => void;
}

const Addressdetail = ({
  formData,
  setFormData,
  states,
  cities,
  onSubmit,
  setStep,
}: DetailthiredpageProps) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate or optionally move to next step before final submit here
    onSubmit();
  };

  return (
    <form className="space-y-5 mt-6" onSubmit={handleFormSubmit}>
      {/* State & City */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm text-gray-400">State</label>
          <div className="relative">
            <select
              name="state"
              value={formData.state}
              onChange={(e) => {
                // Clear city when state changes
                setFormData((prev) => ({
                  ...prev,
                  state: e.target.value,
                  city: "",
                }));
              }}
              className="appearance-none w-full bg-[#121212] border border-gray-800 rounded-lg py-3 px-4 pr-8 text-sm text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-400 transition"
            >
              <option value="">Select State</option>
              {states.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-3.5 w-4 h-4 text-gray-500 pointer-events-none" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm text-gray-400">City</label>
          <div className="relative">
            <select
              name="city"
              value={formData.city}
              onChange={handleChange}
              disabled={!formData.state}
              className="appearance-none w-full bg-[#121212] border border-gray-800 rounded-lg py-3 px-4 pr-8 text-sm text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-400 transition disabled:opacity-50"
            >
              <option value="">Select City</option>
              {formData.state &&
                cities[formData.state]?.map((city: string) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
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
            name="pincode"
            placeholder="Enter Zip Code"
            value={formData.pincode}
            onChange={handleChange}
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
            name="addressLine"
            placeholder="eg: 21A North Lane ..."
            value={formData.addressLine}
            onChange={handleChange}
            className="w-full bg-[#121212] border border-gray-800 rounded-lg py-3 px-4 pr-10 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-400 transition"
          />
          <Home className="absolute right-3 top-3.5 w-4 h-4 text-gray-500" />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-6">
        <button
          type="button"
          onClick={() => setStep(2)}
          className="btn-secondary"
        >
          Back
        </button>
        <button type="submit" className="btn-primary">
          Create Account
        </button>
      </div>
    </form>
  );
};

export default Addressdetail;
