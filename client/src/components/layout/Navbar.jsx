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

        <div>
          <h2>GYM</h2>
          <span>Management System</span>
        </div>
      </div>

      {/* Main Navigation */}
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

        {/* Login */}
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
        <button className="notification-btn">
          🔔
        </button>

        {/* Profile */}
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

          {/* Profile Dropdown */}
          {showMenu && (
            <div className="profile-menu">

              <button
                onClick={() => {
                  setShowMenu(false);
                  navigate("/profile");
                }}
              >
                👤 My Profile
              </button>

              <button
                onClick={() => {
                  alert("Settings coming soon!");
                  setShowMenu(false);
                }}
              >
                ⚙️ Settings
              </button>

              <button
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