import { useState } from "react";
import PageTitle from "../../components/ui/PageTitle";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";

function Members() {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      plan: "Premium",
      status: "Active",
    },
    {
      id: 2,
      name: "Priya Das",
      plan: "Standard",
      status: "Active",
    },
    {
      id: 3,
      name: "Aman Kumar",
      plan: "Basic",
      status: "Inactive",
    },
  ]);

  const addMember = () => {
    const newMember = {
      id: members.length + 1,
      name: `New Member ${members.length + 1}`,
      plan: "Basic",
      status: "Active",
    };

    setMembers([...members, newMember]);
  };

  return (
    <div className="members-page">

      {/* Page Header */}
      <div className="members-header">
        <PageTitle
          title="Gym Members"
          description="View and manage all registered gym members"
        />

        <Button onClick={addMember}>
          + Add Member
        </Button>
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
          description="Currently active"
        >
          <div className="member-summary-value">
            🟢 {members.filter(
              (member) => member.status === "Active"
            ).length}
          </div>
        </Card>

        <Card
          title="Premium Members"
          description="Members with Premium plan"
        >
          <div className="member-summary-value">
            ⭐ {members.filter(
              (member) => member.plan === "Premium"
            ).length}
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

        <div className="member-grid">

          {members.map((member) => (
            <Card
              key={member.id}
              title={member.name}
              description={`Membership Plan: ${member.plan}`}
            >

              <div className="member-card-content">

                <div className="member-avatar">
                  {member.name.charAt(0)}
                </div>

                <div className="member-details">

                  <span className="member-plan">
                    {member.plan} Plan
                  </span>

                  <span
                    className={
                      member.status === "Active"
                        ? "active-status"
                        : "inactive-status"
                    }
                  >
                    {member.status}
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