import { NavLink } from "react-router-dom";

function Sidebar() {
  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: "📊" },
    { name: "Members", path: "/members", icon: "👥" },
    { name: "Trainers", path: "/trainers", icon: "🏋️" },
    { name: "Membership Plans", path: "/plans", icon: "💳" },
    { name: "Attendance", path: "/attendance", icon: "📅" },
    { name: "Payments", path: "/payments", icon: "💰" },
    { name: "Profile", path: "/profile", icon: "👤" },
  ];

  return (
    <aside className="sidebar">

      <div>

        <div className="sidebar-header">
          <div className="sidebar-logo">G</div>

          <div>
            <h2>GYM</h2>
            <p>Management System</p>
          </div>
        </div>

        <div className="sidebar-title">
          MAIN MENU
        </div>

        <nav>
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "sidebar-link active"
                  : "sidebar-link"
              }
            >
              <span className="sidebar-icon">
                {item.icon}
              </span>

              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>

      </div>

      <div className="sidebar-bottom">
        <div className="sidebar-help">
          <span>💡</span>
          <div>
            <strong>Need Help?</strong>
            <small>Contact administrator</small>
          </div>
        </div>

        <p>Logged in as Admin</p>
      </div>

    </aside>
  );
}

export default Sidebar;