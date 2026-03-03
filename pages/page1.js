import { useState } from "react";
import Link from "next/link";
import Header from "@/waterbottle/Header";
import Footer from "@/waterbottle/Footer";

const categories = [
  { name: "Football", icon: "football", accent: "#22c55e", bg: "#f0fdf4", emoji: "⚽" },
  { name: "Basketball", icon: "basketball", accent: "#f97316", bg: "#fff7ed", emoji: "🏀" },
  { name: "Volleyball", icon: "volleyball", accent: "#eab308", bg: "#fefce8", emoji: "🏐" },
  { name: "Tennis", icon: "tennis", accent: "#84cc16", bg: "#f7fee7", emoji: "🎾" },
  { name: "Swimming", icon: "swimming", accent: "#3b82f6", bg: "#eff6ff", emoji: "🏊" },
  { name: "Chess", icon: "chess", accent: "#64748b", bg: "#f8fafc", emoji: "♟️" },
  { name: "Music", icon: "music", accent: "#ec4899", bg: "#fdf2f8", emoji: "🎵" },
  { name: "Art", icon: "art", accent: "#a855f7", bg: "#faf5ff", emoji: "🎨" },
  { name: "Dance", icon: "dance", accent: "#ef4444", bg: "#fef2f2", emoji: "💃" },
  { name: "Drama", icon: "drama", accent: "#6366f1", bg: "#eef2ff", emoji: "🎭" },
  { name: "Coding", icon: "coding", accent: "#06b6d4", bg: "#ecfeff", emoji: "💻" },
  { name: "Science", icon: "science", accent: "#14b8a6", bg: "#f0fdfa", emoji: "🔬" },
];

function CategoryIcon({ type }) {
  const iconClass = "w-9 h-9";
  switch (type) {
    case "football": return (<svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20M2 12h20" /></svg>);
    case "basketball": return (<svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2v20M4.5 4.5c4 3 11 3 15 0M4.5 19.5c4-3 11-3 15 0" /></svg>);
    case "volleyball": return (<svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M12 2c3 4 3 12 0 20M2 12c4-3 12-3 20 0M4 6c5 5 12 6 16 2" /></svg>);
    case "tennis": return (<svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M5 3c4 4 4 14 0 18M19 3c-4 4-4 14 0 18" /></svg>);
    case "swimming": return (<svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 16c1-1 2.5-1 4 0s2.5 1 4 0 2.5-1 4 0 2.5 1 4 0 2.5-1 4 0" /><path d="M2 20c1-1 2.5-1 4 0s2.5 1 4 0 2.5-1 4 0 2.5 1 4 0 2.5-1 4 0" /><circle cx="10" cy="6" r="2" /><path d="M12 6l3 4-4 2" /></svg>);
    case "chess": return (<svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M8 21h8M10 21V11M14 21V11M6 11h12l-2-4h-8l-2 4z" /><path d="M10 7V3h4v4M9 3h6" /></svg>);
    case "music": return (<svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></svg>);
    case "art": return (<svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="13.5" cy="6.5" r="2" /><circle cx="17.5" cy="10.5" r="1.5" /><circle cx="8.5" cy="7.5" r="1.5" /><circle cx="6.5" cy="12.5" r="1.5" /><path d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10c0 2-1 3-3 3h-2c-1 0-2 1-2 2 0 .5.2 1 .5 1.3.3.3.5.7.5 1.2 0 1.5-1 2.5-4 2.5z" /></svg>);
    case "dance": return (<svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="4" r="2" /><path d="M12 6v6M8 22l2-6 2 1 2-1 2 6M7 12l5 2 5-2" /></svg>);
    case "drama": return (<svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 4c0 0 4-2 9 0M15 7c0 0 4 0 7-3M2 4c0 7 4 12 9 14M22 4c0 7-4 12-9 14" /><circle cx="7" cy="9" r="1" fill="currentColor" /><circle cx="17" cy="9" r="1" fill="currentColor" /><path d="M6 13c1.5 1 3 1.5 5 1M18 13c-1.5 1-3 1.5-5 1" /></svg>);
    case "coding": return (<svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /><line x1="14" y1="4" x2="10" y2="20" /></svg>);
    case "science": return (<svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 3h6M10 3v7l-5 8c-1 1.5 0 3 2 3h10c2 0 3-1.5 2-3l-5-8V3" /><circle cx="12" cy="16" r="1" fill="currentColor" /><circle cx="10" cy="14" r="0.5" fill="currentColor" /><circle cx="14" cy="15" r="0.5" fill="currentColor" /></svg>);
    default: return null;
  }
}

export default function CategoriesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#fafaf8" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,700;0,9..144,800;1,9..144,700&family=DM+Sans:wght@400;500;600&display=swap');
        .pg1-display { font-family: 'Fraunces', serif; }
        .pg1-sans { font-family: 'DM Sans', sans-serif; }

        .category-card {
          transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.2s ease;
          will-change: transform;
        }
        .category-card:hover {
          transform: translateY(-6px) rotate(-1deg);
          box-shadow: 0 20px 40px rgba(0,0,0,0.12);
        }
        .category-card:nth-child(even):hover {
          transform: translateY(-6px) rotate(1deg);
        }
        .search-input:focus {
          outline: none;
          box-shadow: 0 0 0 3px rgba(0,0,0,0.08);
        }
        .back-link:hover .back-arrow { transform: translateX(-4px); }
        .back-arrow { transition: transform 0.2s ease; }
        .card-dot {
          width: 8px; height: 8px; border-radius: 50%;
          position: absolute; top: 14px; right: 14px; opacity: 0.5;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .card-animate { animation: fadeUp 0.4s ease forwards; opacity: 0; }
      `}</style>

      <Header />
      <div style={{ height: "3px", background: "linear-gradient(90deg, #000 0%, #555 50%, #000 100%)" }} />

      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-6 py-14">

          <Link href="/page" className="back-link inline-flex items-center gap-2 mb-12 pg1-sans"
            style={{ color: "#444", fontSize: "14px", fontWeight: 500, textDecoration: "none" }}>
            <svg className="back-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>

          <div className="mb-14">
            <div className="flex items-start gap-4 mb-4">
              <div className="pg1-sans" style={{
                background: "#000", color: "#fff", padding: "4px 12px", borderRadius: "4px",
                fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
                marginTop: "8px", flexShrink: 0,
              }}>
                {categories.length} Clubs
              </div>
            </div>
            <h1 className="pg1-display" style={{
              fontSize: "clamp(2.4rem, 6vw, 4.5rem)", fontWeight: 800, lineHeight: 1.2,
              color: "#0a0a0a", letterSpacing: "-0.03em", maxWidth: "600px",
            }}>
              Find Your<br />
              <span style={{ color: "#888", fontStyle: "italic" }}>Perfect Club</span>
            </h1>
            <p className="pg1-sans" style={{ color: "#666", fontSize: "16px", maxWidth: "440px", lineHeight: 1.6, marginTop: "16px" }}>
              Explore every club and activity on offer. Pick one, or pick a few — there are no rules here.
            </p>
          </div>

          <div className="mb-10" style={{ maxWidth: "480px" }}>
            <div className="relative">
              <input
                type="text"
                placeholder="Search clubs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input pg1-sans"
                style={{
                  width: "100%", padding: "14px 48px 14px 48px", fontSize: "15px",
                  background: "#fff", border: "2px solid #e5e5e5", borderRadius: "12px",
                  color: "#111", boxSizing: "border-box", transition: "border-color 0.2s",
                }}
                onFocus={e => e.target.style.borderColor = "#111"}
                onBlur={e => e.target.style.borderColor = "#e5e5e5"}
              />
              <svg style={{ position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)", color: "#aaa" }}
                width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              {searchQuery && (
                <button onClick={() => setSearchQuery("")}
                  style={{ position: "absolute", right: "14px", top: "50%", transform: "translateY(-50%)", color: "#aaa", background: "none", border: "none", cursor: "pointer" }}>
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
            {searchQuery && (
              <p className="pg1-sans" style={{ fontSize: "13px", color: "#888", marginTop: "8px" }}>
                {filteredCategories.length} result{filteredCategories.length !== 1 ? "s" : ""}
              </p>
            )}
          </div>

          {filteredCategories.length > 0 ? (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "16px" }}>
              {filteredCategories.map((category, i) => (
                <div key={i} className="category-card card-animate"
                  style={{
                    background: category.bg, border: `2px solid ${category.accent}22`,
                    borderRadius: "20px", padding: "28px 20px 24px", cursor: "pointer",
                    position: "relative", animationDelay: `${i * 40}ms`,
                    minHeight: "160px", display: "flex", flexDirection: "column", justifyContent: "space-between",
                  }}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="card-dot" style={{ background: category.accent }} />
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{
                      width: "48px", height: "48px", background: "#fff", borderRadius: "14px",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      border: `1.5px solid ${category.accent}33`, flexShrink: 0,
                    }}>
                      <div style={{ color: category.accent }}><CategoryIcon type={category.icon} /></div>
                    </div>
                  </div>
                  <div style={{ marginTop: "20px" }}>
                    <div className="pg1-display" style={{ fontSize: "17px", fontWeight: 800, color: "#111", letterSpacing: "-0.02em", lineHeight: 1.4 }}>
                      {category.name}
                    </div>
                    <div className="pg1-sans" style={{
                      display: "inline-block", marginTop: "6px", background: `${category.accent}18`,
                      color: category.accent, padding: "3px 8px", borderRadius: "6px",
                      fontSize: "10px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase",
                    }}>
                      Club
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: "center", padding: "64px 0" }}>
              <div style={{ fontSize: "48px", marginBottom: "16px" }}>🔍</div>
              <h3 className="pg1-display" style={{ fontSize: "22px", color: "#222", marginBottom: "8px" }}>Nothing found</h3>
              <p className="pg1-sans" style={{ color: "#888", fontSize: "15px" }}>Try a different search term</p>
              <button onClick={() => setSearchQuery("")} className="pg1-sans"
                style={{ marginTop: "20px", background: "#000", color: "#fff", border: "none", padding: "10px 24px", borderRadius: "10px", fontSize: "14px", fontWeight: 600, cursor: "pointer" }}>
                Clear search
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}