import { useState } from "react";

function Members() {
  const [members, setMembers] = useState([
    { id: 1, name: "Rahul Sharma", plan: "Premium", status: "Active" },
    { id: 2, name: "Priya Das", plan: "Standard", status: "Active" },
    { id: 3, name: "Aman Kumar", plan: "Basic", status: "Inactive" },
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
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Members</h1>
          <p>Manage your gym members</p>
        </div>

        <button className="primary-btn" onClick={addMember}>
          + Add Member
        </button>
      </div>

      <div className="member-grid">
        {members.map((member) => (
          <div className="member-card" key={member.id}>
            <h3>{member.name}</h3>
            <p>Membership: {member.plan}</p>
            <span className={member.status === "Active" ? "active-status" : "inactive-status"}>
              {member.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Members;