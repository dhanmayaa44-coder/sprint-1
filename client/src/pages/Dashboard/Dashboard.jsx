import { useState } from "react";

function Dashboard() {
  const [stats, setStats] = useState({
    members: 120,
    trainers: 8,
    attendance: 86,
    payments: 45000,
  });

  const refreshStats = () => {
    setStats({
      members: stats.members + 1,
      trainers: stats.trainers,
      attendance: stats.attendance + 1,
      payments: stats.payments + 1000,
    });
  };

  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <div>
          <h1>Dashboard</h1>
          <p>Welcome back, Admin 👋</p>
        </div>

        <button className="primary-btn" onClick={refreshStats}>
          Refresh Data
        </button>
      </div>

      <div className="stats-grid">

        <div className="stat-card">
          <div className="stat-icon">👥</div>
          <div>
            <p>Total Members</p>
            <h2>{stats.members}</h2>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">🏋️</div>
          <div>
            <p>Total Trainers</p>
            <h2>{stats.trainers}</h2>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">📅</div>
          <div>
            <p>Today's Attendance</p>
            <h2>{stats.attendance}</h2>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">💰</div>
          <div>
            <p>Total Payments</p>
            <h2>₹{stats.payments.toLocaleString()}</h2>
          </div>
        </div>

      </div>

      <div className="dashboard-section">
        <h2>Gym Overview</h2>

        <div className="overview-card">
          <div>
            <h3>Membership Activity</h3>
            <p>Most members are currently using Premium plans.</p>
          </div>

          <div className="progress-container">
            <div className="progress-bar"></div>
          </div>

          <p>78% Active Members</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;