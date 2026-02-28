export default function Body() {
  return (
    <main className="flex-1 bg-gray-50">

      <div className="h-1.5 bg-gradient-to-r from-purple-500 via-blue-400 to-purple-500" />

      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Discover Clubs
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Join exciting clubs and activities at your school
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 flex items-center">
            <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100 w-full">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Search activities,
              </h2>
              <h2 className="text-4xl md:text-5xl font-bold text-purple-600 leading-tight mt-2">
                Sign up instantly.
              </h2>
              <p className="text-gray-500 text-lg mt-6">
                Find and join clubs, events, and activities happening near you.
              </p>
            </div>
          </div>

          <div className="flex-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Location</h2>
              <div className="border-4 border-purple-400 rounded-xl overflow-hidden shadow-lg shadow-purple-100">
                <div className="w-full h-80 bg-gradient-to-br from-green-100 to-green-200 relative">
                  <div className="absolute inset-0 opacity-30">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <path d="M20,30 Q40,20 60,35 T100,30" fill="none" stroke="#6b7280" strokeWidth="0.5" strokeDasharray="2,2" />
                      <path d="M0,50 Q30,40 50,55 T80,45" fill="none" stroke="#6b7280" strokeWidth="0.5" strokeDasharray="2,2" />
                      <path d="M10,70 Q40,60 70,75 T100,65" fill="none" stroke="#6b7280" strokeWidth="0.5" strokeDasharray="2,2" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-lg mb-2">
                        <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse" />
                        <span className="text-xl font-bold text-gray-900">Ulaanbaatar</span>
                      </div>
                      <p className="text-gray-700 font-medium">Улаанбаатар</p>
                      <p className="text-gray-500 text-sm mt-2">Capital of Mongolia</p>
                    </div>
                  </div>
                  <div className="absolute top-8 right-12 text-xs text-gray-600">Zuunmod</div>
                  <div className="absolute top-16 left-8 text-xs text-gray-600">Batsumber</div>
                  <div className="absolute bottom-12 right-8 text-xs text-gray-600">Baganuur</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="/page1"
              className="group bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl p-6 border border-purple-200 hover:border-purple-400 transition-all cursor-pointer hover:shadow-lg no-underline"
            >
              <div className="w-12 h-12 bg-purple-200 rounded-lg mb-4 group-hover:bg-purple-300 transition-colors flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-purple-700">
                  <rect x="3" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="3" width="7" height="7" rx="1" />
                  <rect x="3" y="14" width="7" height="7" rx="1" />
                  <rect x="14" y="14" width="7" height="7" rx="1" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Club Categories</h3>
              <p className="text-gray-600 text-sm">Browse all available clubs and activities</p>
            </a>
            {["Music Concert", "Art Exhibition"].map((event, i) => (
              <div
                key={i}
                className="group bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-100 hover:border-purple-300 transition-all cursor-pointer hover:shadow-lg"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-lg mb-4 group-hover:bg-purple-200 transition-colors" />
                <h3 className="font-semibold text-gray-900 mb-2">{event}</h3>
                <p className="text-gray-600 text-sm">Discover amazing experiences in Mongolia</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
