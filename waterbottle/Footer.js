export default function Footer() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,700;0,9..144,800&family=DM+Sans:wght@400;500;600&display=swap');
        .footer-logo { font-family: 'Fraunces', serif; }
        .footer-body { font-family: 'DM Sans', sans-serif; }
        .footer-link {
          color: #888;
          text-decoration: none;
          font-size: 13px;
          transition: color 0.2s;
          display: block;
        }
        .footer-link:hover { color: #fff; }
        .social-btn {
          width: 36px;
          height: 36px;
          border: 1px solid #333;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
          font-size: 11px;
          font-weight: 700;
          color: #888;
          text-decoration: none;
        }
        .social-btn:hover {
          border-color: #fff;
          color: #fff;
          transform: translateY(-2px);
        }
      `}</style>
      <footer>
        {/* Fade bridge */}
        <div style={{
          height: "60px",
          background: "linear-gradient(to bottom, #fafaf8, #0a0a0a)",
        }} />

        <div style={{ background: "#0a0a0a" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "48px 32px 40px" }}>

            {/* Top row */}
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "48px", marginBottom: "48px" }}>
              {/* Brand */}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                  <img src="/assets/logo_white.png" alt="Logo" width={32} height={32} style={{ borderRadius: "8px" }} />
                  <span className="footer-logo" style={{ fontSize: "17px", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em" }}>
                    Duguilan.mn
                  </span>
                </div>
                <p style={{ color: "#666", fontSize: "13px", lineHeight: 1.7, maxWidth: "240px" }}>
                  Your gateway to discovering clubs, events, and experiences across Mongolia.
                </p>
                <div style={{ display: "flex", gap: "8px", marginTop: "20px" }}>
                  <a className="social-btn">FB</a>
                  <a className="social-btn">IG</a>
                  <a className="social-btn">TW</a>
                </div>
              </div>

              {/* Quick links */}
              <div>
                <h3 style={{ color: "#fff", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>
                  Navigate
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {["Home", "Categories", "Events", "About Us"].map(l => (
                    <a key={l} href="#" className="footer-link">{l}</a>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div>
                <h3 style={{ color: "#fff", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>
                  Contact
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <span style={{ color: "#666", fontSize: "13px" }}>Ulaanbaatar, Mongolia</span>
                  <span style={{ color: "#666", fontSize: "13px" }}>info@duguilan.mn</span>
                  <span style={{ color: "#666", fontSize: "13px" }}>+976 99116769</span>
                </div>
              </div>
            </div>

            {/* Bottom row */}
            <div style={{
              borderTop: "1px solid #1e1e1e",
              paddingTop: "24px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
              <p style={{ color: "#444", fontSize: "12px" }}>
                © 2026 Duguilan.mn — School Project
              </p>
              <span style={{
                fontSize: "11px",
                color: "#333",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}>
                Made in Mongolia 🇲🇳
              </span>
            </div>

          </div>
        </div>
      </footer>
    </>
  );
}