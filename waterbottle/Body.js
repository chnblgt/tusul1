import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("./MapComponent"), { ssr: false });

export default function Body() {
  return (
    <main style={{ flex: 1, background: "#fafaf8" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,700;0,9..144,800;1,9..144,700&family=DM+Sans:wght@400;500;600&display=swap');
        .body-display { font-family: 'Fraunces', serif; }
        .body-sans { font-family: 'DM Sans', sans-serif; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-animate { animation: fadeUp 0.6s ease forwards; }
        .hero-animate-2 { animation: fadeUp 0.6s ease 0.1s forwards; opacity: 0; }
        .hero-animate-3 { animation: fadeUp 0.6s ease 0.2s forwards; opacity: 0; }

        .event-card {
          transition: transform 0.2s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.2s ease;
          text-decoration: none;
          display: block;
        }
        .event-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.1);
        }

        .hero-cta {
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          font-weight: 600;
          background: #111;
          color: #fff;
          padding: 14px 28px;
          border-radius: 10px;
          text-decoration: none;
          display: inline-block;
          transition: background 0.2s, transform 0.15s;
          letter-spacing: 0.01em;
        }
        .hero-cta:hover { background: #333; transform: translateY(-2px); }

        .hero-secondary {
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          font-weight: 500;
          color: #555;
          padding: 14px 28px;
          border-radius: 10px;
          border: 1.5px solid #e5e5e5;
          text-decoration: none;
          display: inline-block;
          transition: border-color 0.2s, color 0.2s;
        }
        .hero-secondary:hover { border-color: #aaa; color: #111; }

        .stat-num {
          font-family: 'Fraunces', serif;
          font-size: 28px;
          font-weight: 800;
          color: #111;
          letter-spacing: -0.03em;
        }
        .stat-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          color: #888;
          font-weight: 500;
          margin-top: 2px;
        }
      `}</style>

      <div style={{ height: "3px", background: "linear-gradient(90deg, #000, #666, #000)" }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}>

        {/* ── HERO ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
          alignItems: "center",
          padding: "72px 0 56px",
        }}>
          {/* Left */}
          <div>
            <div className="hero-animate" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "#f0f0ee", padding: "6px 14px", borderRadius: "20px", marginBottom: "28px",
            }}>
              <div style={{ width: "6px", height: "6px", background: "#22c55e", borderRadius: "50%" }} />
              <span className="body-sans" style={{ fontSize: "12px", fontWeight: 600, color: "#555", letterSpacing: "0.04em", textTransform: "uppercase" }}>
                Now live in Ulaanbaatar
              </span>
            </div>

            <h1 className="body-display hero-animate-2" style={{
              fontSize: "clamp(2.6rem, 5vw, 4rem)", fontWeight: 800, lineHeight: 1.2,
              color: "#0a0a0a", letterSpacing: "-0.03em", marginBottom: "12px",
            }}>
              Discover<br />
              <span style={{ color: "#888", fontStyle: "italic" }}>every club,</span><br />
              sign up fast.
            </h1>

            <p className="body-sans hero-animate-3" style={{
              fontSize: "16px", color: "#666", lineHeight: 1.7, maxWidth: "380px", marginBottom: "36px",
            }}>
              Find and join clubs, events, and activities happening at your school in Mongolia.
            </p>

            <div className="hero-animate-3" style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="/page1" className="hero-cta">Browse Clubs</a>
              <a href="/signup" className="hero-secondary">Create Account</a>
            </div>

            <div style={{ display: "flex", gap: "36px", marginTop: "48px", paddingTop: "36px", borderTop: "1px solid #ebebeb" }}>
              {[["12+", "Club types"], ["100+", "Members"], ["Free", "To join"]].map(([num, label]) => (
                <div key={label}>
                  <div className="stat-num">{num}</div>
                  <div className="stat-label">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Real Leaflet Map */}
          <div style={{
            background: "#fff",
            borderRadius: "24px",
            border: "2px solid #111",
            overflow: "hidden",
            boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
          }}>
            {/* Card header */}
            <div style={{
              padding: "16px 20px", borderBottom: "1px solid #f0f0f0",
              display: "flex", alignItems: "center", justifyContent: "space-between",
            }}>
              <div style={{ display: "flex", gap: "6px" }}>
                {["#ff5f57", "#febc2e", "#28c840"].map(c => (
                  <div key={c} style={{ width: "10px", height: "10px", borderRadius: "50%", background: c }} />
                ))}
              </div>
              <span className="body-sans" style={{ fontSize: "12px", color: "#aaa", fontWeight: 500 }}>
                Ulaanbaatar, Mongolia
              </span>
              <div style={{ width: "32px" }} />
            </div>

            {/* Map */}
            <div style={{ height: "320px", width: "100%" }}>
              <MapComponent />
            </div>

            {/* Card footer */}
            <div style={{ padding: "14px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span className="body-sans" style={{ fontSize: "12px", color: "#aaa" }}>Capital of Mongolia</span>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <div style={{ width: "6px", height: "6px", background: "#22c55e", borderRadius: "50%" }} />
                <span className="body-sans" style={{ fontSize: "12px", color: "#666", fontWeight: 500 }}>Active</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── FEATURED SECTION ── */}
        <div style={{ paddingBottom: "80px" }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "28px" }}>
            <h2 className="body-display" style={{ fontSize: "22px", fontWeight: 800, color: "#0a0a0a", letterSpacing: "-0.02em" }}>
              Featured
            </h2>
            <a href="/page1" className="body-sans" style={{ fontSize: "13px", fontWeight: 600, color: "#555", textDecoration: "none", display: "flex", alignItems: "center", gap: "4px", transition: "color 0.2s" }}>
              View all →
            </a>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
            <a href="/page1" className="event-card" style={{ background: "#0a0a0a", borderRadius: "20px", padding: "28px 24px", color: "#fff" }}>
              <div style={{ width: "44px", height: "44px", background: "#222", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
                  <rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
                </svg>
              </div>
              <h3 className="body-display" style={{ fontSize: "18px", fontWeight: 800, color: "#fff", marginBottom: "8px", letterSpacing: "-0.02em", lineHeight: 1.3 }}>Club Categories</h3>
              <p className="body-sans" style={{ fontSize: "13px", color: "#888", lineHeight: 1.6 }}>Browse all available clubs and activities</p>
              <div style={{ marginTop: "24px" }}>
                <span className="body-sans" style={{ fontSize: "12px", color: "#555", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>12 types →</span>
              </div>
            </a>

            <div className="event-card" style={{ background: "#fff", borderRadius: "20px", padding: "28px 24px", border: "1.5px solid #ebebeb" }}>
              <div style={{ width: "44px", height: "44px", background: "#fdf2f8", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="1.8"><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></svg>
              </div>
              <h3 className="body-display" style={{ fontSize: "18px", fontWeight: 800, color: "#111", marginBottom: "8px", letterSpacing: "-0.02em", lineHeight: 1.3 }}>Music Concert</h3>
              <p className="body-sans" style={{ fontSize: "13px", color: "#888", lineHeight: 1.6 }}>Discover amazing musical experiences in Mongolia</p>
              <div style={{ marginTop: "24px" }}>
                <span className="body-sans" style={{ fontSize: "11px", fontWeight: 700, color: "#ec4899", background: "#fdf2f8", padding: "4px 10px", borderRadius: "6px", textTransform: "uppercase", letterSpacing: "0.06em" }}>Coming soon</span>
              </div>
            </div>

            <div className="event-card" style={{ background: "#fff", borderRadius: "20px", padding: "28px 24px", border: "1.5px solid #ebebeb" }}>
              <div style={{ width: "44px", height: "44px", background: "#faf5ff", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="1.8"><circle cx="13.5" cy="6.5" r="2" /><circle cx="17.5" cy="10.5" r="1.5" /><circle cx="8.5" cy="7.5" r="1.5" /><circle cx="6.5" cy="12.5" r="1.5" /><path d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10c0 2-1 3-3 3h-2c-1 0-2 1-2 2 0 .5.2 1 .5 1.3.3.3.5.7.5 1.2 0 1.5-1 2.5-4 2.5z" /></svg>
              </div>
              <h3 className="body-display" style={{ fontSize: "18px", fontWeight: 800, color: "#111", marginBottom: "8px", letterSpacing: "-0.02em", lineHeight: 1.3 }}>Art Exhibition</h3>
              <p className="body-sans" style={{ fontSize: "13px", color: "#888", lineHeight: 1.6 }}>Discover amazing creative experiences in Mongolia</p>
              <div style={{ marginTop: "24px" }}>
                <span className="body-sans" style={{ fontSize: "11px", fontWeight: 700, color: "#a855f7", background: "#faf5ff", padding: "4px 10px", borderRadius: "6px", textTransform: "uppercase", letterSpacing: "0.06em" }}>Coming soon</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}