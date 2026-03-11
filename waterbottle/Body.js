import dynamic from "next/dynamic";
const MapComponent = dynamic(() => import("./MapComponent"), { ssr: false });

export default function Body() {
  return (
    <main style={{ flex: 1, background: "#fff" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,700;0,9..144,800;1,9..144,700&family=DM+Sans:wght@400;500;600&display=swap');
        .body-display { font-family: 'Fraunces', serif; }
        .body-sans { font-family: 'DM Sans', sans-serif; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-animate { animation: fadeUp 0.65s cubic-bezier(0.22,1,0.36,1) forwards; }
        .hero-animate-2 { animation: fadeUp 0.65s cubic-bezier(0.22,1,0.36,1) 0.12s forwards; opacity: 0; }
        .hero-animate-3 { animation: fadeUp 0.65s cubic-bezier(0.22,1,0.36,1) 0.24s forwards; opacity: 0; }
        .hero-animate-4 { animation: fadeUp 0.65s cubic-bezier(0.22,1,0.36,1) 0.36s forwards; opacity: 0; }

        .event-card {
          transition: transform 0.22s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.22s ease;
          text-decoration: none;
          display: block;
        }
        .event-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 48px rgba(26,5,51,0.12);
        }

        .hero-cta {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px; font-weight: 600;
          background: #1a0533; color: #fff;
          padding: 13px 26px; border-radius: 7px;
          text-decoration: none; display: inline-block;
          transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
          letter-spacing: 0.02em;
          box-shadow: 0 4px 16px rgba(26,5,51,0.2);
        }
        .hero-cta:hover {
          background: #7c3aed;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(124,58,237,0.35);
        }

        .hero-secondary {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px; font-weight: 500;
          color: #1a0533; padding: 13px 26px;
          border-radius: 7px; border: 1.5px solid rgba(26,5,51,0.2);
          text-decoration: none; display: inline-block;
          transition: border-color 0.2s, color 0.2s, background 0.2s;
        }
        .hero-secondary:hover {
          border-color: #7c3aed;
          color: #7c3aed;
          background: rgba(124,58,237,0.04);
        }

        .stat-num {
          font-family: 'Fraunces', serif;
          font-size: 30px; font-weight: 800;
          color: #1a0533; letter-spacing: -0.04em;
          line-height: 1;
        }
        .stat-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 11.5px; color: #9879d4;
          font-weight: 500; margin-top: 4px;
          text-transform: uppercase; letter-spacing: 0.06em;
        }

        .feat-badge {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.1em;
          padding: 3px 9px; border-radius: 4px;
          display: inline-block; margin-top: 20px;
        }
      `}</style>
      <div style={{ height: "2px", background: "linear-gradient(90deg, #4c1d95, #7c3aed, #c4b5fd, #7c3aed, #4c1d95)" }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 36px" }}>
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: "48px", alignItems: "center", padding: "80px 0 64px",
        }}>
          <div>
            <div className="hero-animate" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "#f5f0ff",
              border: "1px solid rgba(124,58,237,0.15)",
              padding: "6px 14px", borderRadius: "20px", marginBottom: "32px",
            }}>
              <div style={{
                width: "6px", height: "6px", background: "#7c3aed", borderRadius: "50%",
                boxShadow: "0 0 0 3px rgba(124,58,237,0.2)",
              }} />
              <span className="body-sans" style={{ fontSize: "11.5px", fontWeight: 600, color: "#7c3aed", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                Now live in Ulaanbaatar
              </span>
            </div>

            <h1 className="body-display hero-animate-2" style={{
              fontSize: "clamp(2.8rem, 5vw, 4.2rem)", fontWeight: 800, lineHeight: 1.15,
              color: "#1a0533", letterSpacing: "-0.04em", marginBottom: "32px",
            }}>
              <span style={{ fontStyle: "italic", }}>Түүхээ</span>{" "}
              <span style={{ fontStyle: "italic" }}>эхлүүл,</span><br />
              <span style={{ fontStyle: "italic", }}>тэмүүлэлдээ</span><br />
              <span style={{ fontStyle: "italic" }}>нэгд.</span>
            </h1>

            <div className="hero-animate-3" style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="/page1" className="hero-cta">Browse Clubs</a>
              <a href="/signup" className="hero-secondary">Create Account</a>
            </div>

            <div className="hero-animate-4" style={{
              display: "flex", gap: "40px", marginTop: "52px", paddingTop: "36px",
              borderTop: "1px solid rgba(26,5,51,0.08)",
            }}>
              {[["6+", "Club types"], ["5+", "Members"], ["Free", "To join"]].map(([num, label]) => (
                <div key={label}>
                  <div className="stat-num">{num}</div>
                  <div className="stat-label">{label}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{
            background: "#fff",
            borderRadius: "20px",
            border: "1.5px solid rgba(124,58,237,0.15)",
            overflow: "hidden",
            boxShadow: "0 12px 48px rgba(26,5,51,0.1), 0 2px 8px rgba(124,58,237,0.06)",
          }}>
            <div style={{
              padding: "14px 18px",
              borderBottom: "1px solid rgba(124,58,237,0.08)",
              display: "flex", alignItems: "center", justifyContent: "space-between",
              background: "#fdfcff",
            }}>
              <div style={{ display: "flex", gap: "6px" }}>
                {["#ff5f57", "#febc2e", "#28c840"].map(c => (
                  <div key={c} style={{ width: "10px", height: "10px", borderRadius: "50%", background: c }} />
                ))}
              </div>
              <span className="body-sans" style={{ fontSize: "11.5px", color: "#9879d4", fontWeight: 500, letterSpacing: "0.02em" }}>
                Ulaanbaatar, Mongolia
              </span>
              <div style={{ width: "32px" }} />
            </div>

            <div style={{ height: "320px", width: "100%", position: "relative", zIndex: 0 }}>
              <MapComponent />
            </div>

            <div style={{
              padding: "12px 18px",
              borderTop: "1px solid rgba(124,58,237,0.08)",
              display: "flex", alignItems: "center", justifyContent: "space-between",
              background: "#fdfcff",
            }}>
              <span className="body-sans" style={{ fontSize: "11.5px", color: "#9879d4", fontWeight: 500 }}>Capital of Mongolia</span>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <div style={{
                  width: "6px", height: "6px", background: "#22c55e", borderRadius: "50%",
                  boxShadow: "0 0 0 3px rgba(34,197,94,0.2)",
                }} />
                <span className="body-sans" style={{ fontSize: "11.5px", color: "#22c55e", fontWeight: 600 }}>Active</span>
              </div>
            </div>
          </div>
        </div>
        <div style={{ paddingBottom: "96px" }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "32px" }}>
            <div>
              <p className="body-sans" style={{ fontSize: "10.5px", fontWeight: 700, color: "#9879d4", letterSpacing: "0.12em", textTransform: "uppercase", margin: "0 0 6px" }}>
                Explore
              </p>
              <h2 className="body-display" style={{ fontSize: "24px", fontWeight: 800, color: "#1a0533", letterSpacing: "-0.03em", margin: 0 }}>
                Featured
              </h2>
            </div>
            <a href="/page1" className="body-sans" style={{
              fontSize: "13px", fontWeight: 600, color: "#7c3aed",
              textDecoration: "none", display: "flex", alignItems: "center", gap: "4px",
              transition: "gap 0.2s",
            }}>
              View all →
            </a>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
            <a href="/page1" className="event-card" style={{
              background: "linear-gradient(135deg, #1a0533 0%, #3b0764 100%)",
              borderRadius: "18px", padding: "28px 24px", color: "#fff",
              border: "1px solid rgba(167,139,250,0.15)",
            }}>
              <div style={{
                width: "42px", height: "42px",
                background: "rgba(124,58,237,0.35)",
                border: "1px solid rgba(167,139,250,0.25)",
                borderRadius: "11px",
                display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px",
              }}>
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#c4b5fd" strokeWidth="1.8">
                  <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
                  <rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
                </svg>
              </div>
              <h3 className="body-display" style={{ fontSize: "19px", fontWeight: 800, color: "#fff", marginBottom: "8px", letterSpacing: "-0.02em", lineHeight: 1.25 }}>
                Club Categories
              </h3>
              <p className="body-sans" style={{ fontSize: "13px", color: "#a78bfa", lineHeight: 1.65, margin: 0 }}>
                Browse all available clubs and activities
              </p>
              <div style={{ marginTop: "24px" }}>
                <span className="body-sans" style={{ fontSize: "11.5px", color: "#c4b5fd", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  12 types →
                </span>
              </div>
            </a>
            <div className="event-card" style={{
              background: "#fff", borderRadius: "18px", padding: "28px 24px",
              border: "1.5px solid rgba(26,5,51,0.08)",
            }}>
              <div style={{
                width: "42px", height: "42px", background: "#fdf2f8",
                border: "1px solid rgba(236,72,153,0.12)",
                borderRadius: "11px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px",
              }}>
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="1.8">
                  <path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" />
                </svg>
              </div>
              <h3 className="body-display" style={{ fontSize: "19px", fontWeight: 800, color: "#1a0533", marginBottom: "8px", letterSpacing: "-0.02em", lineHeight: 1.25 }}>
                Music Concert
              </h3>
              <p className="body-sans" style={{ fontSize: "13px", color: "#888", lineHeight: 1.65, margin: 0 }}>
                Discover amazing musical experiences in Mongolia
              </p>
              <span className="feat-badge" style={{ color: "#ec4899", background: "#fdf2f8", border: "1px solid rgba(236,72,153,0.12)" }}>
                Coming soon
              </span>
            </div>
            <div className="event-card" style={{
              background: "#fff", borderRadius: "18px", padding: "28px 24px",
              border: "1.5px solid rgba(26,5,51,0.08)",
            }}>
              <div style={{
                width: "42px", height: "42px", background: "#f8f4ff",
                border: "1px solid rgba(124,58,237,0.1)",
                borderRadius: "11px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px",
              }}>
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.8">
                  <circle cx="13.5" cy="6.5" r="2" /><circle cx="17.5" cy="10.5" r="1.5" />
                  <circle cx="8.5" cy="7.5" r="1.5" /><circle cx="6.5" cy="12.5" r="1.5" />
                  <path d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10c0 2-1 3-3 3h-2c-1 0-2 1-2 2 0 .5.2 1 .5 1.3.3.3.5.7.5 1.2 0 1.5-1 2.5-4 2.5z" />
                </svg>
              </div>
              <h3 className="body-display" style={{ fontSize: "19px", fontWeight: 800, color: "#1a0533", marginBottom: "8px", letterSpacing: "-0.02em", lineHeight: 1.25 }}>
                Art Exhibition
              </h3>
              <p className="body-sans" style={{ fontSize: "13px", color: "#888", lineHeight: 1.65, margin: 0 }}>
                Discover amazing creative experiences in Mongolia
              </p>
              <span className="feat-badge" style={{ color: "#7c3aed", background: "#f8f4ff", border: "1px solid rgba(124,58,237,0.12)" }}>
                Coming soon
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}