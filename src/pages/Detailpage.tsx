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
import Detailfirstpage from "../components/Microcomponent/Detailfirstpage";
import Detailsecondpage from "../components/Microcomponent/Detailsecondpage";
import Detailthiredpage from "../components/Microcomponent/Detailthiredpage";
import { UserDetail } from "../services/Auth/Authapi";
// Correct the import path if different

const Detailpage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    tradingUsername: "",
    phone: "",
    state: "",
    city: "",
    pincode: "",
    addressLine: "",
  });

  const states = ["Tamil Nadu", "Kerala", "Karnataka"];
  const cities = {
    "Tamil Nadu": ["Madurai", "Nagapattinam", "Neyveli"],
    Kerala: ["Kochi", "Trivandrum", "Kozhikode"],
    Karnataka: ["Bangalore", "Mysuru", "Mangalore"],
  };

  const handleFinalSubmit = async () => {
    try {
      await UserDetail(formData);
      alert("Profile updated!");
      // Optionally: redirect, reset, or move to success screen here
    } catch (error) {
      alert("Update failed!");
    }
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
                  Tell us a bit about yourself to create your free istokx.com account.
                </p>
              </>
            )}

            {step === 2 && (
              <>
                <h1 className="text-2xl font-semibold">Connect Your Tools</h1>
                <p className="text-sm text-gray-500">
                  Link your accounts to access real-time signals, alerts, and community support.
                </p>
              </>
            )}

            {step === 3 && (
              <>
                <h1 className="text-2xl font-semibold">
                  Where Are You Located?
                </h1>
                <p className="text-sm text-gray-500">
                  Required for account verification and to provide you with the best possible experience.
                </p>
              </>
            )}
          </div>
          {/* Step 1 */}
          {step === 1 && (
            <Detailfirstpage
              setStep={setStep}
              formData={formData}
              setFormData={setFormData}
            />
          )}
          {/* Step 2 */}
          {step === 2 && (
            <Detailsecondpage
              setStep={setStep}
              formData={formData}
              setFormData={setFormData}
            />
          )}
          {/* Step 3 - Location and Submit */}
          {step === 3 && (
            <Detailthiredpage
              setStep={setStep}
              formData={formData}
              setFormData={setFormData}
              states={states}
              cities={cities}
              onSubmit={handleFinalSubmit}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Detailpage;
