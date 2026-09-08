import { useState } from "react";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "Admin",
    email: "admin@gym.com",
    phone: "+91 98765 43210",
    role: "Administrator",
    gymName: "FitZone Gym",
    address: "Guwahati, Assam",
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    setIsEditing(false);
    alert("Profile updated successfully!");
  };

  return (
    <div className="profile-page">

      <div className="profile-header">
        <div>
          <h1>My Profile</h1>
          <p>View and manage your account details</p>
        </div>

        {!isEditing ? (
          <button
            className="primary-btn"
            onClick={() => setIsEditing(true)}
          >
            ✏️ Edit Profile
          </button>
        ) : (
          <button
            className="primary-btn"
            onClick={handleSave}
          >
            💾 Save Changes
          </button>
        )}
      </div>

      <div className="profile-card">

        <div className="profile-top">
          <div className="large-avatar">
            {profile.name.charAt(0)}
          </div>

          <div>
            <h2>{profile.name}</h2>
            <p>{profile.role}</p>
          </div>
        </div>

        <div className="profile-form">

          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="text"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>

          <div className="form-group">
            <label>Role</label>
            <input
              type="text"
              name="role"
              value={profile.role}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>

          <div className="form-group">
            <label>Gym Name</label>
            <input
              type="text"
              name="gymName"
              value={profile.gymName}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>

          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={profile.address}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;