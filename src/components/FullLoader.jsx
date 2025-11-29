// src/components/FullScreenLoader.tsx
export default function FullLoader() {
  return (
    <div className="h-screen w-screen bg-black flex flex-col items-center justify-center text-center">
      <img
        src="/loadingistock.png" // apni image ka path
        alt="Loading"
        className="w-[260px] max-w-[70%] mb-8"
      />
      <h2 className="text-white text-[18px] font-semibold mb-2">
        Setting Up Your Account
      </h2>
      <p className="text-gray-400 text-[12px]">
        Please wait while we finalize your registration in istox.com
      </p>
    </div>
  );
}
