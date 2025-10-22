import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Load Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="min-h-[calc(100vh-72px)] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-6 tracking-tight">
          <span className="text-white">istok</span>
          <span className="text-orange-400">x</span>
        </h1>
        <p className="text-gray-300 text-2xl font-light mb-8">
          Advanced trading platform
        </p>
        <p className="text-gray-400 text-lg mb-12">
          Experience the future of trading with our cutting-edge platform.
        </p>
        <div className="space-x-4">
          <a
            href="/login"
            className="inline-block px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Get Started
          </a>
          <button className="inline-block px-8 py-3 border border-gray-600 hover:border-gray-500 text-white font-semibold rounded-lg transition-all duration-200 hover:bg-gray-900/30">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
