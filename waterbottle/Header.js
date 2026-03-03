export default function Header() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,700;0,9..144,800;1,9..144,700&family=DM+Sans:wght@400;500;600&display=swap');
        .header-logo { font-family: 'Fraunces', serif; }
        .header-nav { font-family: 'DM Sans', sans-serif; }
        .nav-link {
          position: relative;
          color: #444;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.01em;
          transition: color 0.2s;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1.5px;
          background: #111;
          transition: width 0.25s ease;
        }
        .nav-link:hover { color: #111; }
        .nav-link:hover::after { width: 100%; }
        .header-signin {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: #555;
          text-decoration: none;
          transition: color 0.2s;
        }
        .header-signin:hover { color: #111; }
        .header-signup {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 600;
          background: #111;
          color: #fff;
          padding: 9px 20px;
          border-radius: 8px;
          text-decoration: none;
          letter-spacing: 0.01em;
          transition: background 0.2s, transform 0.15s;
        }
        .header-signup:hover {
          background: #333;
          transform: translateY(-1px);
        }
      `}</style>
      <header style={{
        background: "#fff",
        borderBottom: "1px solid #f0f0f0",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 32px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          {/* Logo */}
          <a href="/page" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
            <img src="/assets/logo.png" alt="Logo" width={34} height={34} style={{ borderRadius: "9px" }} />
            <span className="header-logo" style={{ fontSize: "18px", fontWeight: 800, color: "#0a0a0a", letterSpacing: "-0.02em" }}>
              Duguilan.mn
            </span>
          </a>

          {/* Nav */}
          <nav className="header-nav" style={{ display: "flex", alignItems: "center", gap: "32px" }}>
            <a href="/page1" className="nav-link">Categories</a>
            <a href="#" className="nav-link">Events</a>
            <a href="#" className="nav-link">About</a>
          </nav>

          {/* Actions */}
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <a href="/signin" className="header-signin">Sign in</a>
            <a href="/signup" className="header-signup">Sign up</a>
          </div>
        </div>
      </header>
    </>
  );
}