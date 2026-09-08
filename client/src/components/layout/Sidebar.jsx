import { NavLink } from "react-router-dom";

function Sidebar() {
  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard"
    },
    {
      name: "Members",
      path: "/members"
    },
    {
      name: "Trainers",
      path: "/trainers"
    },
    {
      name: "Membership Plans",
      path: "/plans"
    },
    {
      name: "Attendance",
      path: "/attendance"
    },
    {
      name: "Payments",
      path: "/payments"
    },
    {
      name: "Profile",
      path: "/profile"
    }
  ];

  return (
    <aside className="sidebar">

      <div>

        <div className="sidebar-header">
          <h2>GYM</h2>
          <p>Management System</p>
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
              {item.name}
            </NavLink>
          ))}

        </nav>

      </div>

      <div className="sidebar-bottom">
        <p>Logged in as Admin</p>
      </div>

    </aside>
  );
}

export default Sidebar;