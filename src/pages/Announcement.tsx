export default function Announcements() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center px-4 py-10">
      {/* Announcement Hero Section */}
      <div className="w-full max-w-4xl rounded-3xl overflow-hidden mb-8 shadow-lg">
        <div className="relative w-full h-44">
          <img
            src="/announment.png" // If not using Next.js Image, use <img src={} ... />
            alt="Announcements Banner"
            // fill // covers the parent div
            className="object-cover"
            // priority
          />
          <div className="absolute inset-0 flex items-end p-8 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
            <h1 className="text-3xl md:text-4xl font-semibold text-white">
              Announcements
            </h1>
          </div>
        </div>
      </div>

      {/* Announcements Feed */}
      <section className="w-full max-w-3xl space-y-6">
        {/* Example feed item */}
        <div className="flex items-start space-x-5 rounded-xl p-4 mb-1">
          <div className="flex flex-col items-center min-w-[68px] p-4">
            <div className="text-white font-medium text-sm">Today</div>
            <div className="text-xs text-gray-500">03:00</div>
          </div>
          <div className="h-12 w-px bg-[#1A1A1A] mx-2 rounded py-10"></div>
          <div className="flex-1 bg-[#0A0A0A] rounded-2xl p-4 ">
            <div className="flex items-center">
              <img
                src="/lableImage.png"
                alt="Chart"
                className="w-16 h-14 rounded"
              />
              <div className="flex-1 ml-4">
                <h2 className="font-bold text-white text-base">
                  Trade Like a Pro – Instantly!
                </h2>
                <p className="text-gray-400 text-xs mt-1">
                  Add any of our free trading indicators with just one click.
                  Simplify your charting, plan better trades, and stay ahead of
                  market...
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Repeat feed items below for more announcements... */}
      </section>
    </div>
  );
}
