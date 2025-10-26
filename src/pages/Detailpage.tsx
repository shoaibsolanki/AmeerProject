import React, { useState } from "react";
import {
  Mail,
  User,
  Link,
  Phone,
  MapPin,
  Home,
  ChevronDown,
} from "lucide-react";

const Detailpage = () => {
  const [step, setStep] = useState(1);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const states = ["Tamil Nadu", "Kerala", "Karnataka"];
  const cities = {
    "Tamil Nadu": ["Madurai", "Nagapattinam", "Neyveli"],
    Kerala: ["Kochi", "Trivandrum", "Kozhikode"],
    Karnataka: ["Bangalore", "Mysuru", "Mangalore"],
  };

  return (
    <div className="min-h-[calc(100vh-72px)] flex md:flex-row flex-col">
      {/* Left Image */}
      <div className="w-1/2 relative overflow-hidden">
        <img
          src="/Groupstock.png"
          alt="Astronaut"
          className="absolute inset-0 w-full h-full object-contain scale-95 mx-auto"
          style={{ left: "50%", transform: "translateX(-50%) scale(0.95)" }}
        />
      </div>

      {/* Right Side Steps */}
      <div className="md:w-1/2 w-[320px] flex items-center justify-center p-8 bg-[#030303] md:m-8 m-3 rounded-2xl">
        <div className="w-full max-w-md text-white p-8 space-y-6">
          {/* Step Header */}
          <div className="space-y-2">
            <p className="text-sm text-gray-400">Step {step} of 3</p>

            {step === 1 && (
              <>
                <h1 className="text-2xl font-semibold">Let’s Get Started</h1>
                <p className="text-sm text-gray-500">
                  Tell us a bit about yourself to create your free istokx.com
                  account.
                </p>
              </>
            )}

            {step === 2 && (
              <>
                <h1 className="text-2xl font-semibold">Connect Your Tools</h1>
                <p className="text-sm text-gray-500">
                  Link your accounts to access real-time signals, alerts, and
                  community support.
                </p>
              </>
            )}

            {step === 3 && (
              <>
                <h1 className="text-2xl font-semibold">
                  Where Are You Located?
                </h1>
                <p className="text-sm text-gray-500">
                  Required for account verification and to provide you with the
                  best possible experience.
                </p>
              </>
            )}
          </div>

          {/* Step 1 */}
          {step === 1 && (
            <form className="space-y-5 mt-6">
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Full Name</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full bg-[#121212] border border-gray-800 rounded-lg py-3 px-4 pr-10 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-400 transition"
                  />
                  <User className="absolute right-3 top-3.5 w-4 h-4 text-gray-500" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400">Email Address</label>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    defaultValue="john.s@gmail.com"
                    className="w-full bg-[#121212] border border-gray-800 rounded-lg py-3 px-4 pr-10 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-400 transition"
                  />
                  <Mail className="absolute right-3 top-3.5 w-4 h-4 text-gray-500" />
                </div>
              </div>

              <div className="flex justify-end mt-6">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="btn-primary"
                >
                  Next
                </button>
              </div>
            </form>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <form className="space-y-5 mt-6">
              <div className="space-y-2">
                <label className="text-sm text-gray-400">
                  TradingView Username
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="We’ll provide access to this ID"
                    className="w-full bg-[#121212] border border-gray-800 rounded-lg py-3 px-4 pr-10 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-400 transition"
                  />
                  <User className="absolute right-3 top-3.5 w-4 h-4 text-gray-500" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400">WhatsApp Number</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="We’ll send important updates here"
                    className="w-full bg-[#121212] border border-gray-800 rounded-lg py-3 px-4 pr-10 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-400 transition"
                  />
                  <Phone className="absolute right-3 top-3.5 w-4 h-4 text-gray-500 pointer-events-none" />
                </div>
              </div>

              <div className="flex justify-end mt-6">
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="btn-primary"
                >
                  Next
                </button>
              </div>
            </form>
          )}

          {/* Step 3 - Location */}
          {step === 3 && (
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
                <label className="text-sm text-gray-400">
                  Address line (Optional)
                </label>
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
                <button type="submit" className="btn-primary">
                  Create Account
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Detailpage;
