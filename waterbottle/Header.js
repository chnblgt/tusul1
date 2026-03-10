import { useState, useRef, useEffect } from "react";

export default function Header({ user = null }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [signinHover, setSigninHover] = useState(false);
  const [signupHover, setSignupHover] = useState(false);
  const [pfpHover, setPfpHover] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const loggedIn = user !== null;
  const displayUser = user || { name: "Bat-Erdene", username: "baterdenee", avatar: null };

  function getInitials(name) {
    return name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
  }

  const navLinks = [
    { label: "Categories", href: "/page1" },
    { label: "Events", href: "#" },
    { label: "About", href: "#" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,700;0,9..144,800;1,9..144,700&family=DM+Sans:wght@400;500;600&display=swap');
        @keyframes dropIn {
          from { opacity: 0; transform: translateY(-6px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>

      <header style={{
        background: "#fff",
        borderBottom: "1px solid #f0f0f0",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        fontFamily: "'DM Sans', sans-serif",
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
            <span style={{
              fontFamily: "'Fraunces', serif",
              fontSize: "18px",
              fontWeight: 800,
              color: "#0a0a0a",
              letterSpacing: "-0.02em",
            }}>
              Duguilan.mn
            </span>
          </a>

          {/* Nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: "32px" }}>
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onMouseEnter={() => setHoveredLink(label)}
                onMouseLeave={() => setHoveredLink(null)}
                style={{
                  position: "relative",
                  color: hoveredLink === label ? "#111" : "#444",
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: 500,
                  letterSpacing: "0.01em",
                  transition: "color 0.2s",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {label}
                <span style={{
                  position: "absolute",
                  bottom: "-2px",
                  left: 0,
                  width: hoveredLink === label ? "100%" : "0%",
                  height: "1.5px",
                  background: "#111",
                  transition: "width 0.25s ease",
                  display: "block",
                }} />
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>

            {/* Sign in / Sign up — only when logged out */}
            {!loggedIn && (
              <>
                <a
                  href="/signin"
                  onMouseEnter={() => setSigninHover(true)}
                  onMouseLeave={() => setSigninHover(false)}
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "14px",
                    fontWeight: 500,
                    color: signinHover ? "#111" : "#555",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                >
                  Sign in
                </a>
                <a
                  href="/signup"
                  onMouseEnter={() => setSignupHover(true)}
                  onMouseLeave={() => setSignupHover(false)}
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "13px",
                    fontWeight: 600,
                    background: signupHover ? "#333" : "#111",
                    color: "#fff",
                    padding: "9px 20px",
                    borderRadius: "8px",
                    textDecoration: "none",
                    letterSpacing: "0.01em",
                    transition: "background 0.2s, transform 0.15s",
                    transform: signupHover ? "translateY(-1px)" : "none",
                    display: "inline-block",
                  }}
                >
                  Sign up
                </a>
              </>
            )}

            {/* PFP button — always visible */}
            <div ref={dropdownRef} style={{ position: "relative" }}>
              <button
                onMouseEnter={() => setPfpHover(true)}
                onMouseLeave={() => setPfpHover(false)}
                onClick={() => loggedIn ? setDropdownOpen((v) => !v) : window.location.href = "/profile"}
                aria-label="Profile menu"
                style={{
                  width: "36px",
                  height: "36px",
                  minWidth: "36px",
                  borderRadius: "50%",
                  border: `2px solid ${pfpHover ? "#bbb" : "#e8e8e8"}`,
                  background: "#111",
                  color: "#fff",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "13px",
                  fontWeight: 600,
                  cursor: "pointer",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "border-color 0.2s, transform 0.15s",
                  transform: pfpHover ? "translateY(-1px)" : "none",
                  padding: 0,
                  outline: "none",
                  flexShrink: 0,
                }}
              >
                {loggedIn && displayUser.avatar ? (
                  <img src={displayUser.avatar} alt={displayUser.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                ) : loggedIn ? (
                  getInitials(displayUser.name)
                ) : (
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                  </svg>
                )}
              </button>

              {/* Dropdown */}
              {loggedIn && dropdownOpen && (
                <div style={{
                  position: "absolute",
                  top: "calc(100% + 10px)",
                  right: 0,
                  background: "#fff",
                  border: "1px solid #ebebeb",
                  borderRadius: "12px",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
                  minWidth: "200px",
                  zIndex: 2000,
                  overflow: "hidden",
                  animation: "dropIn 0.18s cubic-bezier(.22,.68,0,1.2)",
                }}>
                  <div style={{ padding: "14px 16px 10px", borderBottom: "1px solid #f3f3f3" }}>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "14px", color: "#111", margin: "0 0 2px" }}>
                      {displayUser.name}
                    </p>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "#888", margin: 0 }}>
                      @{displayUser.username}
                    </p>
                  </div>

                  {[
                    { label: "My Profile", href: "/profile", icon: <><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></> },
                    { label: "Settings", href: "/settings", icon: <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l-.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></> },
                  ].map(({ label, href, icon }) => (
                    <a key={label} href={href}
                      onMouseEnter={e => e.currentTarget.style.background = "#f7f7f7"}
                      onMouseLeave={e => e.currentTarget.style.background = "none"}
                      style={{
                        display: "flex", alignItems: "center", gap: "10px",
                        padding: "10px 16px",
                        fontFamily: "'DM Sans', sans-serif", fontSize: "13.5px", fontWeight: 500,
                        color: "#333", textDecoration: "none",
                      }}
                    >
                      <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">{icon}</svg>
                      {label}
                    </a>
                  ))}

                  <div style={{ height: "1px", background: "#f3f3f3", margin: "2px 0" }} />

                  <button
                    onClick={() => {/* sign out */}}
                    onMouseEnter={e => e.currentTarget.style.background = "#fff5f5"}
                    onMouseLeave={e => e.currentTarget.style.background = "none"}
                    style={{
                      display: "flex", alignItems: "center", gap: "10px",
                      padding: "10px 16px", width: "100%",
                      fontFamily: "'DM Sans', sans-serif", fontSize: "13.5px", fontWeight: 500,
                      color: "#c0392b", background: "none", border: "none",
                      textAlign: "left", cursor: "pointer",
                    }}
                  >
                    <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                      <polyline points="16 17 21 12 16 7"/>
                      <line x1="21" y1="12" x2="9" y2="12"/>
                    </svg>
                    Sign out
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>
      </header>
    </>
  );
}