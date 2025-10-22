import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  useEffect(() => {
    // Load Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);
  const navigate = useNavigate();

  return (
    <div className="min-h-[calc(100vh-72px)] flex">
      {/* Left half - Space background with logo */}
      <div className="w-1/2 relative overflow-hidden">
             <img
    src="/Groupstock.png"
    alt="Astronaut"
    className="absolute inset-0 w-full h-full object-contain scale-95 mx-auto"
    style={{ left: '50%', transform: 'translateX(-50%) scale(0.95)' }}
  />
        
        {/* Logo section */}
      
      </div>

      {/* Right half - Login form */}
      <div className="w-1/2 bg-gray-900 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="bg-black/60 backdrop-blur-sm rounded-2xl border border-gray-700 p-8 shadow-2xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-semibold text-white mb-2">
                Welcome back to istokx
              </h2>
              <p className="text-gray-400 text-sm">
                Choose your preferred method to sign<br />
                in our platform
              </p>
            </div>

            <div className="space-y-4">
              {/* Google login button */}
              <button className="w-full flex items-center justify-center px-4 py-3 border border-gray-700 rounded-lg hover:border-gray-600 hover:bg-gray-900/50 transition-all duration-200 group">
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M12 4.5c-1.93 0-3.68.64-5.14 1.73L2.18 7.07C3.99 3.47 7.7 1 12 1c2.97 0 5.46.98 7.28 2.66l-3.57 2.77C14.23 4.64 13.12 4.5 12 4.5z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="text-white group-hover:text-gray-100 font-medium">
                  Continue with Google
                </span>
              </button>

              {/* Email login button */}
              <button className="w-full flex items-center justify-center px-4 py-3 border border-gray-700 rounded-lg hover:border-gray-600 hover:bg-gray-900/50 transition-all duration-200 group">
                <svg className="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2v10a2 2 0 002 2z" />
                </svg>
                <span onClick={() => navigate("/signup")} className="text-white group-hover:text-gray-100 font-medium">
                  Continue with Email
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
