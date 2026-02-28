export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">
        <a href="/page" className="flex items-center gap-3 group cursor-pointer">
          <div className="p-2 bg-purple-50 rounded-lg group-hover:bg-purple-100 transition-colors">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-purple-600"
            >
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
          </div>
          <span className="text-xl font-bold text-gray-900">Duguilan.mn</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          <a className="text-lg font-medium text-gray-700 hover:text-purple-600 transition-colors cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-purple-600 hover:after:w-full after:transition-all">
            Category
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <a href="/signin" className="text-gray-600 hover:text-purple-600 font-medium transition-colors cursor-pointer">
            Sign in
          </a>
          <div className="w-px h-6 bg-gray-200" />
          <a href="/signup" className="bg-gray-900 hover:bg-purple-600 text-white px-6 py-2.5 rounded-full font-medium transition-all hover:shadow-lg hover:shadow-purple-200">
            Sign up
          </a>
        </div>
      </div>
    </header>
  );
}
