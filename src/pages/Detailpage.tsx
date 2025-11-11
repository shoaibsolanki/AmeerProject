import React, { useState } from "react";
import { UserDetail } from "../services/Auth/Authapi";
import { useAuth } from "../Context/Auth";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import Basicdetail from "../components/Detailcomponents/Basicdetail";
import Whatsapdetail from "../components/Detailcomponents/Whatsapdetail";
import Addressdetail from "../components/Detailcomponents/Addressdetail";
// Correct the import path if different

const Detailpage = () => {
  const [step, setStep] = useState(1);
  const { user } = useAuth();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [formData, setFormData] = useState({
    email: user?.email || "",
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
    // basic validation
    const { name, tradingUsername, phone, state, city, pincode, addressLine } =
      formData;

    if (
      !name?.trim() ||
      !tradingUsername?.trim() ||
      !phone?.trim() ||
      !state?.trim() ||
      !city?.trim() ||
      !pincode?.trim() ||
      !addressLine?.trim()
    ) {
      enqueueSnackbar("Please fill all required fields.", {
        variant: "warning",
      });
      return;
    }

    const phoneDigits = phone.replace(/\D/g, "");
    if (phoneDigits.length < 10) {
      enqueueSnackbar("Please enter a valid phone number.", {
        variant: "warning",
      });
      return;
    }

    const pinDigits = pincode.replace(/\D/g, "");
    if (pinDigits.length !== 6) {
      enqueueSnackbar("Please enter a valid 6-digit pincode.", {
        variant: "warning",
      });
      return;
    }

    try {
      const response = await UserDetail(formData);
      console.log(response);
      if (response.success) {
        enqueueSnackbar("Details updated successfully.", {
          variant: "success",
        });
        navigate("/");
      } else {
        enqueueSnackbar(response.message, { variant: "error" });
      }
    } catch (error) {
      enqueueSnackbar("Update failed. Please try again.", { variant: "error" });
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
            <Basicdetail
              setStep={setStep}
              formData={formData}
              setFormData={setFormData}
            />
          )}
          {/* Step 2 */}
          {step === 2 && (
            <Whatsapdetail
              setStep={setStep}
              formData={formData}
              setFormData={setFormData}
            />
          )}
          {/* Step 3 - Location and Submit */}
          {step === 3 && (
            <Addressdetail
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
