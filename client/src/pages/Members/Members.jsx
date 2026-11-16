
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import PageTitle from "../../components/ui/PageTitle";
import Card from "../../components/ui/Card";

function Members() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Fetch members from MongoDB
  const fetchMembers = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        "http://localhost:5000/api/members"
      );

      setMembers(response.data.members || []);
      setError("");

    } catch (err) {
      setError("Unable to load members. Please check the backend server.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  const activeMembers = members.length;

  const premiumMembers = members.filter(
    (member) => member.plan === "Premium"
  ).length;

  return (
    <div className="members-page">

      {/* Page Header */}
      <div className="members-header">
        <PageTitle
          title="Gym Members"
          description="View and manage all registered gym members"
        />

        <button
          className="register-button"
          onClick={() => navigate("/members/register")}
        >
          + Add Member
        </button>
      </div>

      {/* Member Summary */}
      <div className="member-summary">

        <Card
          title="Total Members"
          description="All registered members"
        >
          <div className="member-summary-value">
            👥 {members.length}
          </div>
        </Card>

        <Card
          title="Active Members"
          description="Currently registered"
        >
          <div className="member-summary-value">
            🟢 {activeMembers}
          </div>
        </Card>

        <Card
          title="Premium Members"
          description="Members with Premium plan"
        >
          <div className="member-summary-value">
            ⭐ {premiumMembers}
          </div>
        </Card>

      </div>

      {/* Members Section */}
      <div className="members-section">

        <div className="section-heading">
          <div>
            <h2>Member Directory</h2>
            <p>Member information and membership status</p>
          </div>
        </div>

        {loading && <p>Loading members...</p>}

        {error && <p className="input-error">{error}</p>}

        {!loading && !error && members.length === 0 && (
          <p>No members registered yet.</p>
        )}

        <div className="member-grid">

          {members.map((member) => (
            <Card
              key={member._id}
              title={member.name}
              description={`Membership Plan: ${member.plan}`}
            >

              <div className="member-card-content">

                <div className="member-avatar">
                  {member.name.charAt(0).toUpperCase()}
                </div>

                <div className="member-details">

                  <span className="member-plan">
                    {member.plan} Plan
                  </span>

                  <span className="active-status">
                    Registered
                  </span>

                </div>

              </div>

            </Card>
          ))}

        </div>

      </div>

    </div>
  );
}

export default Members;
