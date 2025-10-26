import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Load Google Fonts
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <div className="flex flex-col h-100 justify-center items-center bg-black">
      <div className="flex flex-col items-center">
        {/* Custom box-remove image */}
        <div className="mb-4">
          <img
            src="/homeimage.png" // If not using Next.js Image, use <img src={} ... />
            alt="No products"
            width={64}
            height={64}
            className="mx-auto"
            draggable={false}
          />
        </div>
        <h2 className="text-xl font-semibold text-white">
          Hey <span className="text-yellow-400">Natashia</span>...!!
        </h2>
        <p className="mt-2 text-gray-400 text-center">
          You haven't added any tools to your dashboard yet.
          <br />
          Start with our free professional indicators designed for serious
          traders.
        </p>
        <button className="btn-primary">Browse Products</button>
      </div>
    </div>
  );
}
