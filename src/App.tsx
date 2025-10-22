import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css"; // 👈 Ensure TailwindCSS imported here globally

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
      <div className="flex gap-8 mb-6">
        <a href="https://vite.dev" target="_blank">
          <img
            src={viteLogo}
            className="h-20 w-20 drop-shadow-lg hover:scale-110 transition-transform duration-200"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className="h-20 w-20 drop-shadow-lg hover:scale-110 transition-transform duration-200"
            alt="React logo"
          />
        </a>
      </div>

      <h1 className="text-4xl font-bold mb-4">🚀 Vite + React + TailwindCSS</h1>

      <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="px-6 py-3 bg-white text-indigo-700 font-semibold rounded-xl hover:bg-indigo-100 transition"
        >
          count is {count}
        </button>
        <p className="mt-4 text-sm opacity-80">
          Edit <code>src/App.tsx</code> and save to test HMR 🔥
        </p>
      </div>

      <p className="mt-8 text-sm opacity-70">
        Click on the logos to learn more ✨
      </p>
    </div>
  );
}

export default App;
