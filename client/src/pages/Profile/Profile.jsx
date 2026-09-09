import PageTitle from "../../components/ui/PageTitle";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";

function Profile() {
  return (
    <div className="profile-page">

      <div className="profile-header">
        <PageTitle
          title="My Profile"
          description="View and manage your administrator profile"
        />

        <Button onClick={() => alert("Edit profile clicked!")}>
          ✏️ Edit Profile
        </Button>
      </div>

      <div className="profile-layout">

        <Card title="Administrator Profile" description="Your account information">
          <div className="profile-main">

            <div className="large-avatar">
              A
            </div>

            <div className="profile-name">
              <h2>Admin</h2>
              <p>Administrator</p>
              <span className="profile-status">● Active Account</span>
            </div>

          </div>
        </Card>

        <Card title="Account Information" description="Basic account details">
          <div className="profile-info-list">

            <div className="profile-info-item">
              <span>👤 Full Name</span>
              <strong>Admin User</strong>
            </div>

            <div className="profile-info-item">
              <span>📧 Email</span>
              <strong>admin@gym.com</strong>
            </div>

            <div className="profile-info-item">
              <span>📱 Phone</span>
              <strong>+91 98765 43210</strong>
            </div>

            <div className="profile-info-item">
              <span>🔐 Role</span>
              <strong>Administrator</strong>
            </div>

          </div>
        </Card>

      </div>

      <div className="profile-bottom">

        <Card title="Gym Management System" description="System access and responsibilities">
          <div className="responsibility-list">
            <div>✓ Manage gym members</div>
            <div>✓ Manage trainers</div>
            <div>✓ Manage membership plans</div>
            <div>✓ Track attendance</div>
            <div>✓ Manage payments</div>
          </div>
        </Card>

      </div>

    </div>
  );
}

export default Profile;