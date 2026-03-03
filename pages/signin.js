"use client";

import { useState } from "react";

export default function SignInForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "radial-gradient(ellipse at 20% 30%, #ddd6fe 0%, #ede9fe 30%, #f5f3ff 55%, #faf5ff 75%, #ffffff 100%)",
      fontFamily: "'Segoe UI', system-ui, sans-serif",
    }}>
      <div style={{ position: "relative", width: "100%", maxWidth: "420px", margin: "0 16px" }}>
        <div style={{
          position: "absolute",
          inset: 0,
          borderRadius: "20px",
          background: "#111",
          transform: "translate(6px, 8px)",
          zIndex: 0,
        }} />
        <div style={{
          position: "relative",
          zIndex: 1,
          borderRadius: "20px",
          border: "2.5px solid #111",
          background: "rgba(255,255,255,0.97)",
          padding: "40px 36px 36px",
          boxShadow: "0 4px 32px rgba(0,0,0,0.10)",
        }}>
          {/* Logo */}
          <a href="/page" style={{ display: "flex", justifyContent: "center", marginBottom: "18px" }}>
            <img src="/assets/logo.png" alt="Logo" width={48} height={48} style={{ borderRadius: "10px" }} />
          </a>
          <h1 style={{
            margin: "0 0 6px",
            textAlign: "center",
            fontSize: "22px",
            fontWeight: "700",
            color: "#111827",
            letterSpacing: "-0.3px",
          }}>
            Welcome back
          </h1>
          <p style={{
            margin: "0 0 28px",
            textAlign: "center",
            fontSize: "13px",
            color: "#9ca3af",
          }}>
            To Duguilan.mn
          </p>
          <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <input
              type="text"
              placeholder="User name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                width: "100%",
                padding: "13px 16px",
                border: "1.5px solid #e5e7eb",
                borderRadius: "10px",
                fontSize: "14px",
                color: "#111827",
                background: "#fff",
                outline: "none",
                boxSizing: "border-box",
                transition: "border-color 0.2s",
              }}
              onFocus={(e) => e.target.style.borderColor = "#111"}
              onBlur={(e) => e.target.style.borderColor = "#e5e7eb"}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                padding: "13px 16px",
                border: "1.5px solid #e5e7eb",
                borderRadius: "10px",
                fontSize: "14px",
                color: "#111827",
                background: "#fff",
                outline: "none",
                boxSizing: "border-box",
                transition: "border-color 0.2s",
              }}
              onFocus={(e) => e.target.style.borderColor = "#111"}
              onBlur={(e) => e.target.style.borderColor = "#e5e7eb"}
            />
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "13px",
                background: "#111",
                color: "#fff",
                border: "none",
                borderRadius: "10px",
                fontSize: "14px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "background 0.2s",
                marginTop: "2px",
              }}
              onMouseEnter={(e) => e.target.style.background = "#333"}
              onMouseLeave={(e) => e.target.style.background = "#111"}
            >
              Continue
            </button>
          </form>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", margin: "22px 0" }}>
            <div style={{ flex: 1, height: "1px", background: "#e5e7eb" }} />
            <span style={{ fontSize: "13px", color: "#9ca3af" }}>or</span>
            <div style={{ flex: 1, height: "1px", background: "#e5e7eb" }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <button
              style={{
                width: "100%",
                padding: "13px",
                background: "#1877F2",
                color: "#fff",
                border: "none",
                borderRadius: "10px",
                fontSize: "14px",
                fontWeight: "500",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = "#166fe5"}
              onMouseLeave={(e) => e.currentTarget.style.background = "#1877F2"}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Continue with Facebook
            </button>
            <button
              style={{
                width: "100%",
                padding: "13px",
                background: "#fff",
                color: "#374151",
                border: "1.5px solid #e5e7eb",
                borderRadius: "10px",
                fontSize: "14px",
                fontWeight: "500",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = "#f9fafb"}
              onMouseLeave={(e) => e.currentTarget.style.background = "#fff"}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              Continue with Gmail
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}