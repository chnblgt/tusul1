  export default function Footer() {
    return (
      <footer className="mt-auto">
        <div className="h-32 bg-gradient-to-b from-gray-50 to-gray-200 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-300/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-400 to-purple-500" />
        </div>
        <div className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-600 rounded-lg">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-white"
                    >
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                    </svg>
                  </div>
                  <span className="text-xl font-bold">Duguilan.mn</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Your gateway to discovering events and experiences across Mongolia.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><a className="hover:text-purple-400 transition-colors cursor-pointer">Home</a></li>
                  <li><a className="hover:text-purple-400 transition-colors cursor-pointer">Categories</a></li>
                  <li><a className="hover:text-purple-400 transition-colors cursor-pointer">Events</a></li>
                  <li><a className="hover:text-purple-400 transition-colors cursor-pointer">About Us</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Contact</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>Ulaanbaatar, Mongolia</li>
                  <li>info@duguilan.mn</li>
                  <li>+976 99116769</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © 2026 Duguilan.mn - School Project
              </p>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gray-800 hover:bg-purple-600 rounded-full flex items-center justify-center cursor-pointer transition-colors">
                  <span className="text-xs">FB</span>
                </div>
                <div className="w-8 h-8 bg-gray-800 hover:bg-purple-600 rounded-full flex items-center justify-center cursor-pointer transition-colors">
                  <span className="text-xs">IG</span>
                </div>
                <div className="w-8 h-8 bg-gray-800 hover:bg-purple-600 rounded-full flex items-center justify-center cursor-pointer transition-colors">
                  <span className="text-xs">TW</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
