import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import VerifyEmail from "./Verify/Verify";
import Signup from "./Signup/Signup";

export default function Login() {
  const [page, setpage] = useState<Number>(0);
  const [email, setEmail] = useState("");
  useEffect(() => {
    // Load Google Fonts
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <div className="min-h-[calc(100vh-72px)] flex md:flex-row flex-col">
      {/* Left half - Space background with logo */}
      <div className="w-1/2 relative overflow-hidden ">
        <img
          src="/Groupstock.png"
          alt="Astronaut"
          className="absolute inset-0 w-full h-full object-contain scale-95 mx-auto"
          style={{ left: "50%", transform: "translateX(-50%) scale(0.95)" }}
        />

        {/* Logo section */}
      </div>

      {/* Right half - Login form */}
      {/* <div className="flex items-center justify-center"> */}
      <div className="md:w-1/2 w-[320px]  flex items-center justify-center p-8 bg-[#030303] md:m-8 m-3 rounded-2xl">
        <div className="w-full max-w-md">
          <div className="  p-8 ">
            <div className="space-y-4">
              {/* Google loginbutton */}
              {page == 0 && (
                <>
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-semibold text-white mb-2">
                      Welcome back to istokx
                    </h2>
                    <p className="text-gray-400 text-sm">
                      Choose your preferred method to sign
                      <br />
                      in our platform
                    </p>
                  </div>
                  <button className="w-full flex items-center justify-center px-4 py-3 border border-gray-700 rounded-lg hover:border-gray-600 hover:bg-gray-900/50 transition-all duration-200 group gap-2">
                    <img src="/fi_281764.png" />
                    <span className="text-white group-hover:text-gray-100 font-medium">
                      Continue with Google
                    </span>
                  </button>
                  <button className="w-full flex items-center justify-center px-4 py-3 border border-gray-700 rounded-lg hover:border-gray-600 hover:bg-gray-900/50 transition-all duration-200 group">
                    <span
                      onClick={() => setpage(1)}
                      className="text-white group-hover:text-gray-100 font-medium"
                    >
                      Continue with Email
                    </span>
                  </button>
                </>
              )}

              {page == 1 && (
                <Signup setpage={setpage} email={email} setEmail={setEmail} />
              )}
              {page == 2 && <VerifyEmail email={email} />}
              {/* Email log in button */}
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
