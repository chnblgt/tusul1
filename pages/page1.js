import { useState } from "react";
import Link from "next/link";
import Header from "@/waterbottle/Header";
import Footer from "@/waterbottle/Footer";

const categories = [
  { name: "Football", icon: "football", color: "from-green-100 to-green-200", border: "border-green-300", hover: "hover:border-green-500" },
  { name: "Basketball", icon: "basketball", color: "from-orange-100 to-orange-200", border: "border-orange-300", hover: "hover:border-orange-500" },
  { name: "Volleyball", icon: "volleyball", color: "from-yellow-100 to-yellow-200", border: "border-yellow-300", hover: "hover:border-yellow-500" },
  { name: "Tennis", icon: "tennis", color: "from-lime-100 to-lime-200", border: "border-lime-300", hover: "hover:border-lime-500" },
  { name: "Swimming", icon: "swimming", color: "from-blue-100 to-blue-200", border: "border-blue-300", hover: "hover:border-blue-500" },
  { name: "Chess", icon: "chess", color: "from-gray-100 to-gray-200", border: "border-gray-300", hover: "hover:border-gray-500" },
  { name: "Music", icon: "music", color: "from-pink-100 to-pink-200", border: "border-pink-300", hover: "hover:border-pink-500" },
  { name: "Art", icon: "art", color: "from-purple-100 to-purple-200", border: "border-purple-300", hover: "hover:border-purple-500" },
  { name: "Dance", icon: "dance", color: "from-red-100 to-red-200", border: "border-red-300", hover: "hover:border-red-500" },
  { name: "Drama", icon: "drama", color: "from-indigo-100 to-indigo-200", border: "border-indigo-300", hover: "hover:border-indigo-500" },
  { name: "Coding", icon: "coding", color: "from-cyan-100 to-cyan-200", border: "border-cyan-300", hover: "hover:border-cyan-500" },
  { name: "Science", icon: "science", color: "from-teal-100 to-teal-200", border: "border-teal-300", hover: "hover:border-teal-500" },
];

function CategoryIcon({ type }) {
  const iconClass = "text-gray-700 w-8 h-8 md:w-10 md:h-10";
  switch (type) {
    case "football":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20M2 12h20" />
        </svg>
      );
    case "basketball":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2v20M4.5 4.5c4 3 11 3 15 0M4.5 19.5c4-3 11-3 15 0" />
        </svg>
      );
    case "volleyball":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2c3 4 3 12 0 20M2 12c4-3 12-3 20 0M4 6c5 5 12 6 16 2" />
        </svg>
      );
    case "tennis":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M5 3c4 4 4 14 0 18M19 3c-4 4-4 14 0 18" />
        </svg>
      );
    case "swimming":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M2 16c1-1 2.5-1 4 0s2.5 1 4 0 2.5-1 4 0 2.5 1 4 0 2.5-1 4 0" />
          <path d="M2 20c1-1 2.5-1 4 0s2.5 1 4 0 2.5-1 4 0 2.5 1 4 0 2.5-1 4 0" />
          <circle cx="10" cy="6" r="2" />
          <path d="M12 6l3 4-4 2" />
        </svg>
      );
    case "chess":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M8 21h8M10 21V11M14 21V11M6 11h12l-2-4h-8l-2 4z" />
          <path d="M10 7V3h4v4M9 3h6" />
        </svg>
      );
    case "music":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 18V5l12-2v13" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="16" r="3" />
        </svg>
      );
    case "art":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="13.5" cy="6.5" r="2" />
          <circle cx="17.5" cy="10.5" r="1.5" />
          <circle cx="8.5" cy="7.5" r="1.5" />
          <circle cx="6.5" cy="12.5" r="1.5" />
          <path d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10c0 2-1 3-3 3h-2c-1 0-2 1-2 2 0 .5.2 1 .5 1.3.3.3.5.7.5 1.2 0 1.5-1 2.5-4 2.5z" />
        </svg>
      );
    case "dance":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="4" r="2" />
          <path d="M12 6v6M8 22l2-6 2 1 2-1 2 6M7 12l5 2 5-2" />
        </svg>
      );
    case "drama":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M2 4c0 0 4-2 9 0M15 7c0 0 4 0 7-3M2 4c0 7 4 12 9 14M22 4c0 7-4 12-9 14" />
          <circle cx="7" cy="9" r="1" fill="currentColor" />
          <circle cx="17" cy="9" r="1" fill="currentColor" />
          <path d="M6 13c1.5 1 3 1.5 5 1M18 13c-1.5 1-3 1.5-5 1" />
        </svg>
      );
    case "coding":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="14" y1="4" x2="10" y2="20" />
        </svg>
      );
    case "science":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 3h6M10 3v7l-5 8c-1 1.5 0 3 2 3h10c2 0 3-1.5 2-3l-5-8V3" />
          <circle cx="12" cy="16" r="1" fill="currentColor" />
          <circle cx="10" cy="14" r="0.5" fill="currentColor" />
          <circle cx="14" cy="15" r="0.5" fill="currentColor" />
        </svg>
      );
    default:
      return null;
  }
}

export default function CategoriesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      {/* Gradient Line */}
      <div className="h-1.5 bg-gradient-to-r from-purple-500 via-blue-400 to-purple-500" />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-8 py-12">
          {/* Back Link */}
          <Link href="/page" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium mb-8">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>

          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Club Categories</h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Browse and explore all available clubs and activities. Find something you love!
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-10">
            <div className="relative">
              <input
                type="text"
                placeholder="Search categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-5 py-4 pl-12 text-gray-900 placeholder-gray-500 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
              />
              <svg
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
            {searchQuery && (
              <p className="mt-3 text-sm text-gray-600 text-center">
                Found {filteredCategories.length} {filteredCategories.length === 1 ? 'category' : 'categories'}
              </p>
            )}
          </div>

          {/* Categories Grid */}
          {filteredCategories.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {filteredCategories.map((category, i) => (
                <div
                  key={i}
                  className={`group aspect-square bg-gradient-to-br ${category.color} rounded-2xl border-2 ${category.border} ${category.hover} hover:shadow-xl transition-all cursor-pointer hover:scale-105 flex flex-col items-center justify-center gap-3 p-4`}
                >
                  <div className="group-hover:scale-110 transition-transform">
                    <CategoryIcon type={category.icon} />
                  </div>
                  <span className="text-sm md:text-base font-semibold text-gray-800 text-center">
                    {category.name}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <svg
                className="mx-auto w-16 h-16 text-gray-300 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No categories found</h3>
              <p className="text-gray-500">Try searching for something else</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}