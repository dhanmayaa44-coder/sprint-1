import { useState } from "react";
import PageTitle from "../../components/ui/PageTitle";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";

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

      {/* Welcome Section */}
      <div className="dashboard-welcome">
        <div>
          <span className="welcome-label">
            GYM MANAGEMENT SYSTEM
          </span>

          <h1>Welcome back, Admin 👋</h1>

          <p>
            Here's what's happening with your gym today.
            Manage your members, trainers and payments easily.
          </p>
        </div>

        <div className="welcome-icon">
          🏋️
        </div>
      </div>

      {/* Page Header */}
      <div className="dashboard-header">
        <PageTitle
          title="Dashboard Overview"
          description="Monitor your gym activities and performance"
        />

        <Button onClick={refreshStats}>
          🔄 Refresh Data
        </Button>
      </div>

      {/* Statistics */}
      <div className="stats-grid">

        <Card
          title="Total Members"
          description="Registered gym members"
        >
          <div className="stat-content">
            <div className="stat-icon member-icon">
              👥
            </div>

            <div>
              <h2>{stats.members}</h2>
              <span className="stat-change">
                ↑ 12% this month
              </span>
            </div>
          </div>
        </Card>

        <Card
          title="Total Trainers"
          description="Available gym trainers"
        >
          <div className="stat-content">
            <div className="stat-icon trainer-icon">
              🏋️
            </div>

            <div>
              <h2>{stats.trainers}</h2>
              <span className="stat-change">
                ↑ 2 new trainers
              </span>
            </div>
          </div>
        </Card>

        <Card
          title="Today's Attendance"
          description="Members attended today"
        >
          <div className="stat-content">
            <div className="stat-icon attendance-icon">
              📅
            </div>

            <div>
              <h2>{stats.attendance}</h2>
              <span className="stat-change">
                ↑ 8% from yesterday
              </span>
            </div>
          </div>
        </Card>

        <Card
          title="Total Payments"
          description="Collected payments"
        >
          <div className="stat-content">
            <div className="stat-icon payment-icon">
              💰
            </div>

            <div>
              <h2>₹{stats.payments.toLocaleString()}</h2>
              <span className="stat-change">
                ↑ 15% this month
              </span>
            </div>
          </div>
        </Card>

      </div>

      {/* Lower Section */}
      <div className="dashboard-lower">

        {/* Membership Activity */}
        <Card
          title="Membership Activity"
          description="Current membership performance"
        >
          <div className="activity-top">
            <div>
              <strong>78%</strong>
              <span>Active Members</span>
            </div>

            <div className="activity-badge">
              Healthy
            </div>
          </div>

          <div className="progress-container">
            <div className="progress-bar"></div>
          </div>

          <div className="activity-info">
            <span>94 Active</span>
            <span>26 Inactive</span>
          </div>
        </Card>

        {/* Quick Actions */}
        <Card
          title="Quick Actions"
          description="Frequently used options"
        >
          <div className="quick-actions">

            <Button
              onClick={() => {
                window.location.href = "/members";
              }}
            >
              👥 Add Member
            </Button>

            <Button
              onClick={() => {
                window.location.href = "/attendance";
              }}
            >
              📅 Mark Attendance
            </Button>

            <Button
              onClick={() => {
                window.location.href = "/payments";
              }}
            >
              💰 Add Payment
            </Button>

          </div>
        </Card>

      </div>

    </div>
  );
}

export default Dashboard;