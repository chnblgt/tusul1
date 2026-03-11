import { useState } from "react";
import Header from "@/waterbottle/Header";
import Footer from "@/waterbottle/Footer";

const categories = [
  { name: "Football", icon: "football", accent: "#22c55e", bg: "#f0fdf4" },
  { name: "Basketball", icon: "basketball", accent: "#f97316", bg: "#fff7ed" },
  { name: "Volleyball", icon: "volleyball", accent: "#eab308", bg: "#fefce8" },
  { name: "Tennis", icon: "tennis", accent: "#84cc16", bg: "#f7fee7" },
  { name: "Swimming", icon: "swimming", accent: "#3b82f6", bg: "#eff6ff" },
  { name: "Chess", icon: "chess", accent: "#64748b", bg: "#f8fafc" },
  { name: "Music", icon: "music", accent: "#ec4899", bg: "#fdf2f8" },
  { name: "Art", icon: "art", accent: "#a855f7", bg: "#faf5ff" },
  { name: "Dance", icon: "dance", accent: "#ef4444", bg: "#fef2f2" },
  { name: "Drama", icon: "drama", accent: "#6366f1", bg: "#eef2ff" },
  { name: "Coding", icon: "coding", accent: "#06b6d4", bg: "#ecfeff" },
  { name: "Science", icon: "science", accent: "#14b8a6", bg: "#f0fdfa" },
];

function CategoryIcon({ type }) {
  const s = { width: "22px", height: "22px" };
  switch (type) {
    case "football": return (<svg style={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="10"/><path d="M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20M2 12h20"/></svg>);
    case "basketball": return (<svg style={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2v20M4.5 4.5c4 3 11 3 15 0M4.5 19.5c4-3 11-3 15 0"/></svg>);
    case "volleyball": return (<svg style={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="10"/><path d="M12 2c3 4 3 12 0 20M2 12c4-3 12-3 20 0M4 6c5 5 12 6 16 2"/></svg>);
    case "tennis": return (<svg style={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="10"/><path d="M5 3c4 4 4 14 0 18M19 3c-4 4-4 14 0 18"/></svg>);
    case "swimming": return (<svg style={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M2 16c1-1 2.5-1 4 0s2.5 1 4 0 2.5-1 4 0 2.5 1 4 0 2.5-1 4 0"/><path d="M2 20c1-1 2.5-1 4 0s2.5 1 4 0 2.5-1 4 0 2.5 1 4 0 2.5-1 4 0"/><circle cx="10" cy="6" r="2"/><path d="M12 6l3 4-4 2"/></svg>);
    case "chess": return (<svg style={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M8 21h8M10 21V11M14 21V11M6 11h12l-2-4h-8l-2 4z"/><path d="M10 7V3h4v4M9 3h6"/></svg>);
    case "music": return (<svg style={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>);
    case "art": return (<svg style={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="13.5" cy="6.5" r="2"/><circle cx="17.5" cy="10.5" r="1.5"/><circle cx="8.5" cy="7.5" r="1.5"/><circle cx="6.5" cy="12.5" r="1.5"/><path d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10c0 2-1 3-3 3h-2c-1 0-2 1-2 2 0 .5.2 1 .5 1.3.3.3.5.7.5 1.2 0 1.5-1 2.5-4 2.5z"/></svg>);
    case "dance": return (<svg style={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="4" r="2"/><path d="M12 6v6M8 22l2-6 2 1 2-1 2 6M7 12l5 2 5-2"/></svg>);
    case "drama": return (<svg style={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M2 4c0 0 4-2 9 0M15 7c0 0 4 0 7-3M2 4c0 7 4 12 9 14M22 4c0 7-4 12-9 14"/><circle cx="7" cy="9" r="1" fill="currentColor"/><circle cx="17" cy="9" r="1" fill="currentColor"/><path d="M6 13c1.5 1 3 1.5 5 1M18 13c-1.5 1-3 1.5-5 1"/></svg>);
    case "coding": return (<svg style={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/><line x1="14" y1="4" x2="10" y2="20"/></svg>);
    case "science": return (<svg style={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M9 3h6M10 3v7l-5 8c-1 1.5 0 3 2 3h10c2 0 3-1.5 2-3l-5-8V3"/><circle cx="12" cy="16" r="1" fill="currentColor"/><circle cx="10" cy="14" r="0.5" fill="currentColor"/><circle cx="14" cy="15" r="0.5" fill="currentColor"/></svg>);
    default: return null;
  }
}

export default function CategoriesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = categories.filter(c =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#fff" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,700;0,9..144,800;1,9..144,700&family=DM+Sans:wght@400;500;600&display=swap');
        .pg1-display { font-family: 'Fraunces', serif; }
        .pg1-sans { font-family: 'DM Sans', sans-serif; }

        .cat-card {
          transition: transform 0.22s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.22s ease, border-color 0.2s;
          cursor: pointer;
          position: relative;
        }
        .cat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 40px rgba(26,5,51,0.1);
        }

        .pg1-search:focus {
          outline: none;
          border-color: #7c3aed !important;
          box-shadow: 0 0 0 3px rgba(124,58,237,0.1);
        }

        .pg1-back {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px; font-weight: 600;
          color: #555;
          background: rgba(26,5,51,0.04);
          border: 1px solid rgba(26,5,51,0.1);
          border-radius: 7px;
          padding: 7px 14px;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.2s, color 0.2s, transform 0.15s;
          line-height: 1;
          margin-bottom: 36px;
        }
        .pg1-back:hover {
          background: rgba(124,58,237,0.06);
          color: #7c3aed;
          border-color: rgba(124,58,237,0.2);
          transform: translateY(-1px);
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .card-in { animation: fadeUp 0.4s ease forwards; opacity: 0; }
      `}</style>

      <Header />
      <div style={{ height: "2px", background: "linear-gradient(90deg, #4c1d95, #7c3aed, #c4b5fd, #7c3aed, #4c1d95)" }} />

      <main style={{ flex: 1 }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "56px 36px 96px" }}>

          <a href="/page" className="pg1-back">
            <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
            Back
          </a>

          {/* Header section */}
          <div style={{ marginBottom: "52px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
              <span className="pg1-sans" style={{
                background: "#f5f0ff", color: "#7c3aed",
                border: "1px solid rgba(124,58,237,0.15)",
                padding: "4px 12px", borderRadius: "20px",
                fontSize: "11px", fontWeight: 700,
                letterSpacing: "0.08em", textTransform: "uppercase",
              }}>
                {categories.length} Clubs
              </span>
            </div>
            <h1 className="pg1-display" style={{
              fontSize: "clamp(2.4rem, 6vw, 4.2rem)", fontWeight: 800, lineHeight: 1.15,
              color: "#1a0533", letterSpacing: "-0.04em", maxWidth: "540px", margin: "0 0 16px",
            }}>
              Find Your<br />
              <span style={{ color: "#7c3aed", fontStyle: "italic" }}>Perfect Club</span>
            </h1>
            <p className="pg1-sans" style={{
              color: "#888", fontSize: "15px", maxWidth: "400px",
              lineHeight: 1.7, margin: 0,
            }}>
              Explore every club and activity on offer. Pick one, or pick a few.
            </p>
          </div>

          {/* Search */}
          <div style={{ maxWidth: "440px", marginBottom: "48px" }}>
            <div style={{ position: "relative" }}>
              <svg style={{ position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)", color: "#bbb", pointerEvents: "none" }}
                width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
              <input
                type="text"
                placeholder="Search clubs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pg1-search pg1-sans"
                style={{
                  width: "100%", padding: "13px 44px", fontSize: "14px",
                  background: "#fdfcff",
                  border: "1.5px solid rgba(124,58,237,0.15)",
                  borderRadius: "10px", color: "#1a0533",
                  boxSizing: "border-box", transition: "border-color 0.2s, box-shadow 0.2s",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} style={{
                  position: "absolute", right: "14px", top: "50%", transform: "translateY(-50%)",
                  color: "#bbb", background: "none", border: "none", cursor: "pointer", padding: 0,
                }}>
                  <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path d="M18 6 6 18M6 6l12 12"/>
                  </svg>
                </button>
              )}
            </div>
            {searchQuery && (
              <p className="pg1-sans" style={{ fontSize: "12.5px", color: "#9879d4", marginTop: "8px", fontWeight: 500 }}>
                {filteredCategories.length} result{filteredCategories.length !== 1 ? "s" : ""}
              </p>
            )}
          </div>

          {/* Grid */}
          {filteredCategories.length > 0 ? (
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))",
              gap: "14px",
            }}>
              {filteredCategories.map((cat, i) => (
                <div
                  key={i}
                  className="cat-card card-in"
                  style={{
                    background: cat.bg,
                    border: `1.5px solid ${cat.accent}22`,
                    borderRadius: "18px",
                    padding: "24px 20px",
                    animationDelay: `${i * 35}ms`,
                    minHeight: "148px",
                    display: "flex", flexDirection: "column", justifyContent: "space-between",
                  }}
                >
                  {/* Icon */}
                  <div style={{
                    width: "44px", height: "44px",
                    background: "#fff",
                    borderRadius: "12px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    border: `1.5px solid ${cat.accent}28`,
                    boxShadow: `0 2px 8px ${cat.accent}14`,
                    color: cat.accent,
                  }}>
                    <CategoryIcon type={cat.icon} />
                  </div>

                  {/* Label */}
                  <div style={{ marginTop: "18px" }}>
                    <div className="pg1-display" style={{
                      fontSize: "16px", fontWeight: 800,
                      color: "#1a0533", letterSpacing: "-0.02em", lineHeight: 1.3,
                    }}>
                      {cat.name}
                    </div>
                    <div className="pg1-sans" style={{
                      display: "inline-block", marginTop: "6px",
                      background: `${cat.accent}18`,
                      color: cat.accent,
                      padding: "2px 8px", borderRadius: "5px",
                      fontSize: "10px", fontWeight: 700,
                      letterSpacing: "0.08em", textTransform: "uppercase",
                    }}>
                      Club
                    </div>
                  </div>

                  {/* Accent dot */}
                  <div style={{
                    position: "absolute", top: "14px", right: "14px",
                    width: "7px", height: "7px", borderRadius: "50%",
                    background: cat.accent, opacity: 0.4,
                  }} />
                </div>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: "center", padding: "80px 0" }}>
              <div style={{
                width: "64px", height: "64px", borderRadius: "18px",
                background: "#f5f0ff", border: "1px solid rgba(124,58,237,0.12)",
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 20px", fontSize: "28px",
              }}>🔍</div>
              <h3 className="pg1-display" style={{ fontSize: "22px", color: "#1a0533", marginBottom: "8px", fontWeight: 800, letterSpacing: "-0.02em" }}>
                Nothing found
              </h3>
              <p className="pg1-sans" style={{ color: "#888", fontSize: "14px", marginBottom: "24px" }}>
                Try a different search term
              </p>
              <button onClick={() => setSearchQuery("")} className="pg1-sans"
                style={{
                  background: "#1a0533", color: "#fff", border: "none",
                  padding: "10px 24px", borderRadius: "8px",
                  fontSize: "13.5px", fontWeight: 600, cursor: "pointer",
                  transition: "background 0.2s",
                }}
                onMouseEnter={e => e.currentTarget.style.background = "#7c3aed"}
                onMouseLeave={e => e.currentTarget.style.background = "#1a0533"}
              >
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