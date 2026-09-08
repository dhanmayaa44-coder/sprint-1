function Home() {
  return (
    <div className="home-page">

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
            and efficient. It helps gym administrators manage
            members, trainers, membership plans, attendance, and
            payments from one convenient platform.
          </p>

          <p>
            With everything available in one place, gym staff can
            easily keep track of daily activities, monitor member
            information, manage subscriptions, and maintain payment
            records.
          </p>

          <div className="home-actions">
            <a href="/dashboard" className="primary-btn">
              📊 Go to Dashboard
            </a>

            <a href="/members" className="secondary-btn">
              👥 View Members
            </a>
          </div>
        </div>

        <div className="home-illustration">
          <div className="gym-circle">
            🏋️
          </div>
          <h3>Manage Your Gym</h3>
          <p>Simple • Organized • Efficient</p>
        </div>
      </div>

      <div className="home-features">

        <div className="home-feature-card">
          <div className="feature-icon">👥</div>
          <h3>Member Management</h3>
          <p>
            Easily manage member details, membership plans,
            and account status.
          </p>
        </div>

        <div className="home-feature-card">
          <div className="feature-icon">🏋️</div>
          <h3>Trainer Management</h3>
          <p>
            Keep track of trainers, their specialties,
            and availability.
          </p>
        </div>

        <div className="home-feature-card">
          <div className="feature-icon">📅</div>
          <h3>Attendance Tracking</h3>
          <p>
            Record and monitor daily attendance of gym members.
          </p>
        </div>

        <div className="home-feature-card">
          <div className="feature-icon">💰</div>
          <h3>Payment Management</h3>
          <p>
            Manage membership payments and keep transaction
            records organized.
          </p>
        </div>

      </div>

    </div>
  );
}

export default Home;