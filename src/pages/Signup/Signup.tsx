import { useEffect, useState } from "react";
import { Regsiter } from "../../services/Auth/Authapi";
import { useSnackbar } from "notistack";

interface SignupProps {
  setpage: (page: number) => void;
  email: string;
  setEmail: (email: string) => void;
}

export default function Signup({ setpage, email, setEmail }: SignupProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    // Load Google Fonts
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const handleSignup = async () => {
    try {
      const payload = {
        email: email,
        password: password,
      };
      // Call the Regsiter API
      const response = await Regsiter(payload);
      if (response.success) {
        enqueueSnackbar("Otp Send Successful", { variant: "success" });
        console.log("Registration successful:", response);
        setpage(2);
      } else {
        enqueueSnackbar(response.message, { variant: "error" });
      }
      // Navigate to another page or show success message
    } catch (error) {
      enqueueSnackbar("Otp Falid to Send", { variant: "error" });
      console.log(error);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-white mb-2">
          Sign up with Email
        </h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Create your istokx.com account with no fees, no commitments just
          powerful tools to grow your portfolio
        </p>
      </div>

      <div className="space-y-4">
        {/* Email input */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Email Address
          </label>
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="Enter your email"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <svg
                className="w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 01-2 2z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Password input */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="Password123"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300 transition-colors duration-200"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Should have at least 8 Characters
          </p>
        </div>

        {/* Create account button */}
        <div className="flex justify-end">
          <button onClick={handleSignup} className="btn-primary">
            Create an account
          </button>
        </div>
      </div>
    </div>
  );
}
