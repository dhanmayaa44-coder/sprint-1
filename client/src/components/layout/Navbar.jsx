import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2>GYM</h2>
        <span>Management System</span>
      </div>

      <div className="navbar-right">

        <div className="search-box">
          <span>🔍</span>
          <input type="text" placeholder="Search..." />
        </div>

        <button className="notification-btn">
          🔔
        </button>

        <div className="profile-area">

          <button
            className="profile-btn"
            onClick={() => setShowMenu(!showMenu)}
          >
            <div className="profile-avatar">
              A
            </div>

            <div className="profile-info">
              <strong>Admin</strong>
              <small>Administrator</small>
            </div>

            <span>⌄</span>
          </button>

          {showMenu && (
            <div className="profile-menu">

              <button onClick={() => navigate("/profile")}>
                👤 My Profile
              </button>

              <button
                onClick={() => alert("Settings coming soon!")}
              >
                ⚙️ Settings
              </button>

              <button
                onClick={() => alert("Logged out successfully!")}
              >
                🚪 Logout
              </button>

            </div>
          )}

        </div>

      </div>
    </nav>
  );
}

export default Navbar;