import { useState } from "react";

const MOCK_USER = {
  name: "Bat-Erdene Gantulga",
  username: "baterdenee",
  avatar: null,
  bio: "Designer & developer based in Ulaanbaatar. Passionate about Mongolian culture and digital experiences.",
  location: "Ulaanbaatar, Mongolia",
  website: "https://baterdenee.mn",
  email: "bat@baterdenee.mn",
  phone: "+976 9911 2233",
  joinedDate: "January 2024",
};

const MOCK_CLUBS = [
  { id: 1, name: "Naadam Heritage Club", category: "Culture", members: 340, enrolled: true, color: "#e8f4e8", accent: "#2d7a2d", icon: "🏹" },
  { id: 2, name: "UB Photography Circle", category: "Arts", members: 218, enrolled: true, color: "#f0eeff", accent: "#5a3fcf", icon: "📷" },
  { id: 3, name: "Mongolian Hikers", category: "Outdoors", members: 892, enrolled: false, color: "#fff4e6", accent: "#c7560a", icon: "⛰️" },
  { id: 4, name: "Tech Builders MN", category: "Technology", members: 155, enrolled: true, color: "#e6f3ff", accent: "#1a6bb5", icon: "💻" },
  { id: 5, name: "Ulaanbaatar Book Club", category: "Literature", members: 74, enrolled: false, color: "#fff0f3", accent: "#b52150", icon: "📚" },
];

// ✏️ Paste any YouTube video ID here (the part after ?v=)
const BANNER_VIDEO_ID = "QRms3dr_lYM";

function getInitials(name) {
  return name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
}

export default function ProfilePage({ user = MOCK_USER }) {
  const [activeTab, setActiveTab] = useState("clubs");
  const [editOpen, setEditOpen] = useState(false);
  const [editData, setEditData] = useState({ ...user });
  const [saved, setSaved] = useState({ ...user });
  const [clubs, setClubs] = useState(MOCK_CLUBS);

  function handleSave() {
    setSaved({ ...editData });
    setEditOpen(false);
  }

  function toggleEnroll(id) {
    setClubs((prev) => prev.map((c) => c.id === id ? { ...c, enrolled: !c.enrolled } : c));
  }

  const enrolledClubs = clubs.filter((c) => c.enrolled);
  const followedClubs = clubs.filter((c) => !c.enrolled);

  // YouTube embed URL: autoplay + loop + mute + no controls + no branding
  const ytSrc = `https://www.youtube.com/embed/${BANNER_VIDEO_ID}?autoplay=1&loop=1&mute=1&playlist=${BANNER_VIDEO_ID}&controls=0&showinfo=0&modestbranding=1&rel=0&disablekb=1&fs=0`;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,700&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&display=swap');

        @keyframes pp-fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes pp-slideUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }

        .pp-root {
          min-height: 100vh;
          background: #f7f6f3;
          font-family: 'DM Sans', sans-serif;
        }
        .pp-root *, .pp-root *::before, .pp-root *::after {
          box-sizing: border-box;
        }

        /* ── Banner ── */
        .pp-banner {
          height: 220px;
          position: relative;
          background: #111;
          overflow: hidden; /* clips the oversized iframe */
        }
        /* iframe is scaled up + centered to hide letterbox bars */
        .pp-banner-iframe {
          position: absolute;
          /* 16:9 ratio trick: make iframe 100vw wide, height = 100vw * (9/16)      */
          /* Then scale UP by 1.5x so black letterbox bars are pushed off-screen     */
          top: 50%;
          left: 50%;
          width: 100vw;
          height: calc(100vw * 9 / 16);
          min-height: 400%;
          transform: translate(-50%, -62%) scale(1.5);
          border: none;
          pointer-events: none;
        }
        /* Back button */
        .pp-back-btn {
          position: absolute;
          top: 16px;
          left: 20px;
          z-index: 10;
          display: flex;
          align-items: center;
          gap: 7px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: #fff;
          background: rgba(0,0,0,0.35);
          border: 1px solid rgba(255,255,255,0.18);
          backdrop-filter: blur(8px);
          border-radius: 8px;
          padding: 7px 14px;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.2s, transform 0.15s;
          line-height: 1;
        }
        .pp-back-btn:hover {
          background: rgba(0,0,0,0.55);
          transform: translateY(-1px);
        }

        /* dark gradient so content below stays readable */
        .pp-banner-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0,0,0,0.08) 0%,
            rgba(0,0,0,0.45) 100%
          );
          pointer-events: none;
          z-index: 1;
        }

        .pp-body {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 28px 80px;
        }

        .pp-avatar-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-top: -48px;
          padding-bottom: 20px;
          position: relative;
          z-index: 10;
        }
        .pp-avatar {
          width: 96px; height: 96px;
          border-radius: 50%;
          border: 5px solid #f7f6f3;
          background: #111;
          color: #fff;
          font-family: 'Fraunces', serif;
          font-size: 28px; font-weight: 800;
          display: flex; align-items: center; justify-content: center;
          overflow: hidden;
          box-shadow: 0 4px 24px rgba(0,0,0,0.14);
          flex-shrink: 0;
          position: relative;
          z-index: 10;
        }
        .pp-avatar img { width: 100%; height: 100%; object-fit: cover; }

        .pp-edit-btn {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px; font-weight: 600;
          padding: 8px 18px; border-radius: 8px;
          border: 1.5px solid #ddd;
          background: #fff; color: #333;
          cursor: pointer;
          transition: border-color 0.2s, background 0.2s, transform 0.15s;
          display: flex; align-items: center; gap: 6px;
          margin-bottom: 4px; line-height: 1;
        }
        .pp-edit-btn:hover { border-color: #aaa; background: #fafafa; transform: translateY(-1px); }

        .pp-name {
          font-family: 'Fraunces', serif;
          font-size: 22px; font-weight: 800;
          color: #0a0a0a; letter-spacing: -0.03em; margin: 0;
        }
        .pp-username { font-size: 13.5px; color: #999; font-weight: 500; margin-top: 2px; }
        .pp-bio { font-size: 13.5px; color: #666; line-height: 1.65; margin-top: 10px; max-width: 480px; }

        .pp-meta { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 14px; }
        .pp-meta-pill {
          display: flex; align-items: center; gap: 5px;
          font-size: 12.5px; color: #777; font-weight: 500;
          background: #fff; border: 1px solid #e8e8e8;
          border-radius: 20px; padding: 4px 10px;
        }
        .pp-meta-pill a { color: #111; text-decoration: none; font-weight: 600; }
        .pp-meta-pill a:hover { text-decoration: underline; }

        .pp-tabs { display: flex; border-bottom: 1px solid #e8e7e4; margin-top: 24px; }
        .pp-tab {
          font-family: 'DM Sans', sans-serif;
          font-size: 13.5px; font-weight: 500;
          color: #999; background: none; border: none;
          padding: 12px 20px; cursor: pointer;
          position: relative; transition: color 0.2s; line-height: 1;
        }
        .pp-tab.active { color: #111; font-weight: 700; }
        .pp-tab.active::after {
          content: ''; position: absolute;
          bottom: -1px; left: 0; right: 0;
          height: 2px; background: #111;
          border-radius: 2px 2px 0 0;
        }
        .pp-tab:hover:not(.active) { color: #555; }

        .pp-section-label {
          font-size: 11px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.09em;
          color: #aaa; margin: 28px 0 12px;
        }

        .club-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        @media (max-width: 600px) { .club-grid { grid-template-columns: 1fr; } }

        .club-card {
          background: #fff; border: 1px solid #ebebeb;
          border-radius: 14px; padding: 16px 18px;
          display: flex; align-items: flex-start; gap: 14px;
          transition: box-shadow 0.2s, transform 0.15s, border-color 0.2s;
          position: relative;
        }
        .club-card:hover { box-shadow: 0 6px 20px rgba(0,0,0,0.07); transform: translateY(-1px); border-color: #ddd; }

        .club-icon-wrap {
          width: 42px; height: 42px; border-radius: 11px;
          display: flex; align-items: center; justify-content: center;
          font-size: 20px; flex-shrink: 0;
        }
        .club-name {
          font-family: 'Fraunces', serif; font-size: 15px; font-weight: 700;
          color: #0a0a0a; letter-spacing: -0.01em; line-height: 1.25; margin: 0;
        }
        .club-cat {
          display: inline-block; font-size: 10.5px; font-weight: 600;
          text-transform: uppercase; letter-spacing: 0.06em;
          border-radius: 4px; padding: 2px 7px; margin-top: 4px;
        }
        .club-members { font-size: 12px; color: #aaa; margin-top: 6px; font-weight: 500; }

        .club-leave-btn {
          position: absolute; top: 12px; right: 14px;
          font-size: 11.5px; font-weight: 600;
          background: none; border: 1px solid #e8e8e8;
          border-radius: 6px; padding: 4px 10px;
          color: #aaa; cursor: pointer;
          transition: border-color 0.2s, color 0.2s, background 0.2s; line-height: 1;
        }
        .club-leave-btn:hover { border-color: #f5c6c6; color: #c0392b; background: #fff5f5; }

        .club-join-btn {
          position: absolute; top: 12px; right: 14px;
          font-size: 11.5px; font-weight: 600;
          background: #111; border: none;
          border-radius: 6px; padding: 4px 10px;
          color: #fff; cursor: pointer; transition: background 0.2s; line-height: 1;
        }
        .club-join-btn:hover { background: #333; }

        .pp-empty { padding: 48px 0; text-align: center; color: #ccc; font-size: 14px; }
        .pp-empty-icon { font-size: 32px; opacity: 0.35; margin-bottom: 10px; }

        .pp-activity-item {
          display: flex; align-items: center; gap: 14px;
          padding: 14px 18px; background: #fff;
          border: 1px solid #ebebeb; border-radius: 12px; margin-bottom: 10px;
        }
        .pp-about-item {
          display: flex; align-items: center; gap: 14px;
          padding: 14px 18px; background: #fff;
          border: 1px solid #ebebeb; border-radius: 12px; margin-bottom: 10px;
        }

        .pp-modal-overlay {
          position: fixed; inset: 0;
          background: rgba(0,0,0,0.35);
          backdrop-filter: blur(4px);
          z-index: 3000;
          display: flex; align-items: center; justify-content: center;
          padding: 20px; animation: pp-fadeIn 0.15s ease;
        }
        .pp-modal {
          background: #fff; border-radius: 18px; padding: 32px;
          width: 100%; max-width: 480px; max-height: 90vh; overflow-y: auto;
          box-shadow: 0 24px 80px rgba(0,0,0,0.18);
          animation: pp-slideUp 0.2s cubic-bezier(.22,.68,0,1.2);
        }
        .pp-modal-title {
          font-family: 'Fraunces', serif; font-size: 20px; font-weight: 800;
          color: #0a0a0a; letter-spacing: -0.02em; margin: 0 0 24px;
        }
        .pp-field { margin-bottom: 16px; }
        .pp-label {
          display: block; font-size: 11.5px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.07em; color: #aaa; margin-bottom: 6px;
        }
        .pp-input {
          width: 100%; font-family: 'DM Sans', sans-serif;
          font-size: 14px; font-weight: 500; color: #111;
          background: #fafafa; border: 1.5px solid #e8e8e8;
          border-radius: 9px; padding: 10px 13px; outline: none;
          transition: border-color 0.2s, background 0.2s;
        }
        .pp-input:focus { border-color: #aaa; background: #fff; }
        .pp-textarea { resize: vertical; min-height: 80px; line-height: 1.6; }

        .pp-modal-actions { display: flex; gap: 10px; justify-content: flex-end; margin-top: 24px; }
        .pp-cancel-btn {
          font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 600;
          padding: 9px 18px; border-radius: 8px;
          border: 1.5px solid #e0e0e0; background: #fff; color: #666;
          cursor: pointer; transition: border-color 0.2s;
        }
        .pp-cancel-btn:hover { border-color: #bbb; }
        .pp-save-btn {
          font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 700;
          padding: 9px 22px; border-radius: 8px;
          border: none; background: #111; color: #fff;
          cursor: pointer; transition: background 0.2s, transform 0.15s;
        }
        .pp-save-btn:hover { background: #333; transform: translateY(-1px); }
      `}</style>

      <div className="pp-root">

        {/* ── Video Banner ── */}
        <div className="pp-banner">
          <a href="/page" className="pp-back-btn">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
            Back
          </a>
          <iframe
            className="pp-banner-iframe"
            src={ytSrc}
            title="Banner video"
            allow="autoplay; encrypted-media"
            allowFullScreen={false}
          />
          <div className="pp-banner-overlay" />
        </div>

        <div className="pp-body">
          <div className="pp-avatar-row">
            <div className="pp-avatar">
              {saved.avatar
                ? <img src={saved.avatar} alt={saved.name} />
                : getInitials(saved.name)
              }
            </div>
            <button className="pp-edit-btn" onClick={() => { setEditData({ ...saved }); setEditOpen(true); }}>
              <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
              </svg>
              Edit profile
            </button>
          </div>

          <div className="pp-name">{saved.name}</div>
          <div className="pp-username">@{saved.username}</div>
          {saved.bio && <p className="pp-bio">{saved.bio}</p>}

          <div className="pp-meta">
            {saved.location && (
              <span className="pp-meta-pill">
                <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                {saved.location}
              </span>
            )}
            {saved.website && (
              <span className="pp-meta-pill">
                <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                <a href={saved.website} target="_blank" rel="noopener noreferrer">
                  {saved.website.replace(/^https?:\/\//, "")}
                </a>
              </span>
            )}
            {saved.joinedDate && (
              <span className="pp-meta-pill">
                <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                Joined {saved.joinedDate}
              </span>
            )}
          </div>

          <div className="pp-tabs">
            {[
              { key: "clubs", label: "My Clubs" },
              { key: "activity", label: "Activity" },
              { key: "about", label: "About" },
            ].map(({ key, label }) => (
              <button
                key={key}
                className={`pp-tab${activeTab === key ? " active" : ""}`}
                onClick={() => setActiveTab(key)}
              >
                {label}
              </button>
            ))}
          </div>

          {activeTab === "clubs" && (
            <div>
              <div className="pp-section-label">Enrolled in ({enrolledClubs.length})</div>
              {enrolledClubs.length === 0 ? (
                <div className="pp-empty"><div className="pp-empty-icon">🏛️</div><div>Not enrolled in any clubs yet</div></div>
              ) : (
                <div className="club-grid">
                  {enrolledClubs.map((club) => (
                    <div key={club.id} className="club-card">
                      <div className="club-icon-wrap" style={{ background: club.color }}>{club.icon}</div>
                      <div style={{ flex: 1, minWidth: 0, paddingRight: "56px" }}>
                        <div className="club-name">{club.name}</div>
                        <span className="club-cat" style={{ background: club.color, color: club.accent }}>{club.category}</span>
                        <div className="club-members">{club.members.toLocaleString()} members</div>
                      </div>
                      <button className="club-leave-btn" onClick={() => toggleEnroll(club.id)}>Leave</button>
                    </div>
                  ))}
                </div>
              )}
              <div className="pp-section-label">Following ({followedClubs.length})</div>
              {followedClubs.length === 0 ? (
                <div className="pp-empty"><div className="pp-empty-icon">🔍</div><div>Not following any clubs</div></div>
              ) : (
                <div className="club-grid">
                  {followedClubs.map((club) => (
                    <div key={club.id} className="club-card">
                      <div className="club-icon-wrap" style={{ background: club.color }}>{club.icon}</div>
                      <div style={{ flex: 1, minWidth: 0, paddingRight: "56px" }}>
                        <div className="club-name">{club.name}</div>
                        <span className="club-cat" style={{ background: club.color, color: club.accent }}>{club.category}</span>
                        <div className="club-members">{club.members.toLocaleString()} members</div>
                      </div>
                      <button className="club-join-btn" onClick={() => toggleEnroll(club.id)}>Join</button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === "activity" && (
            <div>
              <div className="pp-section-label">Recent</div>
              {[
                { icon: "🏹", text: "Joined Naadam Heritage Club", time: "2 days ago" },
                { icon: "📷", text: "Enrolled in UB Photography Circle", time: "1 week ago" },
                { icon: "💻", text: "Joined Tech Builders MN", time: "3 weeks ago" },
              ].map((item, i) => (
                <div key={i} className="pp-activity-item">
                  <span style={{ fontSize: "20px" }}>{item.icon}</span>
                  <span style={{ flex: 1, fontSize: "14px", color: "#333", fontWeight: 500 }}>{item.text}</span>
                  <span style={{ fontSize: "12px", color: "#bbb", whiteSpace: "nowrap" }}>{item.time}</span>
                </div>
              ))}
            </div>
          )}

          {activeTab === "about" && (
            <div style={{ paddingTop: "24px" }}>
              {[
                { label: "Full name", value: saved.name, icon: "👤" },
                { label: "Email", value: saved.email, icon: "✉️" },
                { label: "Phone", value: saved.phone, icon: "📞" },
                { label: "Location", value: saved.location, icon: "📍" },
                { label: "Website", value: saved.website, icon: "🌐", link: true },
              ].map(({ label, value, icon, link }) => value ? (
                <div key={label} className="pp-about-item">
                  <span style={{ fontSize: "18px", width: "24px", textAlign: "center" }}>{icon}</span>
                  <div>
                    <div style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.07em", color: "#bbb", marginBottom: "2px" }}>{label}</div>
                    {link
                      ? <a href={value} target="_blank" rel="noopener noreferrer" style={{ fontSize: "14px", fontWeight: 500, color: "#111", textDecoration: "none" }}>{value.replace(/^https?:\/\//, "")}</a>
                      : <div style={{ fontSize: "14px", fontWeight: 500, color: "#222" }}>{value}</div>
                    }
                  </div>
                </div>
              ) : null)}
            </div>
          )}
        </div>
      </div>

      {editOpen && (
        <div className="pp-modal-overlay" onClick={(e) => e.target === e.currentTarget && setEditOpen(false)}>
          <div className="pp-modal">
            <div className="pp-modal-title">Edit Profile</div>
            {[
              { key: "name", label: "Full Name", type: "text" },
              { key: "username", label: "Username", type: "text" },
              { key: "email", label: "Email", type: "email" },
              { key: "phone", label: "Phone", type: "text" },
              { key: "location", label: "Location", type: "text" },
              { key: "website", label: "Website", type: "url" },
            ].map(({ key, label, type }) => (
              <div className="pp-field" key={key}>
                <label className="pp-label">{label}</label>
                <input
                  className="pp-input"
                  type={type}
                  value={editData[key] || ""}
                  onChange={(e) => setEditData((d) => ({ ...d, [key]: e.target.value }))}
                />
              </div>
            ))}
            <div className="pp-field">
              <label className="pp-label">Bio</label>
              <textarea
                className="pp-input pp-textarea"
                value={editData.bio || ""}
                onChange={(e) => setEditData((d) => ({ ...d, bio: e.target.value }))}
              />
            </div>
            <div className="pp-modal-actions">
              <button className="pp-cancel-btn" onClick={() => setEditOpen(false)}>Cancel</button>
              <button className="pp-save-btn" onClick={handleSave}>Save changes</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}