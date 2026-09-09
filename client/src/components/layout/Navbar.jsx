import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Members", path: "/members" },
    { name: "Trainers", path: "/trainers" },
    { name: "Plans", path: "/plans" },
    { name: "Attendance", path: "/attendance" },
    { name: "Payments", path: "/payments" },
  ];

  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="navbar-left">
        <div className="gym-logo">G</div>

        <div className="navbar-brand">
          <h2>GYM</h2>
          <span>Management System</span>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="navbar-links">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) =>
              isActive
                ? "navbar-link active"
                : "navbar-link"
            }
          >
            {item.name}
          </NavLink>
        ))}

        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive
              ? "navbar-link login-link active"
              : "navbar-link login-link"
          }
        >
          🔐 Login
        </NavLink>
      </div>

      {/* Right Side */}
      <div className="navbar-right">

        {/* Search */}
        <div className="search-box">
          <span>🔍</span>
          <input
            type="text"
            placeholder="Search..."
          />
        </div>

        {/* Notification */}
        <button
          className="notification-btn"
          type="button"
        >
          🔔
        </button>

        {/* Profile */}
        <div className="profile-area">

          <button
            className="profile-btn"
            type="button"
            onClick={() => setShowMenu(!showMenu)}
          >
            <div className="profile-avatar">
              A
            </div>

            <div className="profile-info">
              <strong>Admin</strong>
              <small>Administrator</small>
            </div>

            <span className="profile-arrow">
              {showMenu ? "⌃" : "⌄"}
            </span>
          </button>

          {showMenu && (
            <div className="profile-menu">

              <button
                type="button"
                onClick={() => {
                  setShowMenu(false);
                  navigate("/profile");
                }}
              >
                👤 My Profile
              </button>

              <button
                type="button"
                onClick={() => {
                  alert("Settings coming soon!");
                  setShowMenu(false);
                }}
              >
                ⚙️ Settings
              </button>

              <button
                type="button"
                onClick={() => {
                  alert("Logged out successfully!");
                  setShowMenu(false);
                }}
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