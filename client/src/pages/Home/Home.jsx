import PageTitle from "../../components/ui/PageTitle";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";

function Home() {
  return (
    <div className="home-page">

      {/* Page Title */}
      <PageTitle
        title="Welcome to Smart Gym Management"
        description="Manage your gym members, trainers, plans, attendance, and payments from one convenient platform."
      />

      {/* Hero Section */}
      <div className="home-hero">

        <div className="home-content">

          <span className="home-badge">
            💪 Gym Management System
          </span>

          <h1>
            Welcome to Your
            <br />
            <span>Smart Gym Management</span>
          </h1>

          <p>
            Our Gym Management System is a web-based application
            designed to make gym administration simple, organized,
            and efficient.
          </p>

          <p>
            It helps gym administrators manage members, trainers,
            membership plans, attendance, and payments from one
            convenient platform.
          </p>

          <div className="home-actions">

            <Button
              onClick={() => {
                window.location.href = "/dashboard";
              }}
            >
              📊 Go to Dashboard
            </Button>

            <Button
              className="home-secondary-btn"
              onClick={() => {
                window.location.href = "/members";
              }}
            >
              👥 View Members
            </Button>

          </div>

        </div>

        <div className="home-illustration">

          <div className="gym-circle">
            🏋️
          </div>

          <h3>Manage Your Gym</h3>

          <p>
            Simple • Organized • Efficient
          </p>

        </div>

      </div>

      {/* Features */}
      <div className="home-features">

        <Card
          title="Member Management"
          description="Easily manage member details, membership plans, and account status."
        >
          <div className="feature-icon">
            👥
          </div>
        </Card>

        <Card
          title="Trainer Management"
          description="Keep track of trainers, their specialties, and availability."
        >
          <div className="feature-icon">
            🏋️
          </div>
        </Card>

        <Card
          title="Attendance Tracking"
          description="Record and monitor daily attendance of gym members."
        >
          <div className="feature-icon">
            📅
          </div>
        </Card>

        <Card
          title="Payment Management"
          description="Manage membership payments and keep transaction records organized."
        >
          <div className="feature-icon">
            💰
          </div>
        </Card>

      </div>

    </div>
  );
}

export default Home;