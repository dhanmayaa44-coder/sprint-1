import { useState } from "react";

import PageTitle from "../../components/ui/PageTitle";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import WelcomeMessage from "../../components/ui/WelcomeMessage";

function Dashboard() {
  const [notificationCount, setNotificationCount] = useState(3);
  const [showDetails, setShowDetails] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [isGymOpen, setIsGymOpen] = useState(true);

  const members = [
    "Karma Wangchuk",
    "Pema Dorji",
    "Sonam Choden",
    "Tashi Lhamo",
  ];

  const filteredMembers = members.filter((member) =>
    member.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <PageTitle
        title="Dashboard"
        description="Overview of your Gym Management System"
      />

      <WelcomeMessage
        userName="Admin"
        role="Administrator"
        gymName="FitLife Gym"
      />

      {/* Notifications */}
      <Card
        title="Notifications"
        description={`You currently have ${notificationCount} notification(s).`}
      >
        <Button
          text="Clear Notifications"
          onClick={() => setNotificationCount(0)}
          disabled={notificationCount === 0}
        />
      </Card>

      {/* Gym Status */}
      <Card
        title="Gym Status"
        description={
          isGymOpen
            ? "The gym is currently open."
            : "The gym is currently closed."
        }
      >
        <span
          className={
            isGymOpen ? "active-status" : "inactive-status"
          }
        >
          {isGymOpen ? "OPEN" : "CLOSED"}
        </span>

        <br />
        <br />

        <Button
          text={isGymOpen ? "Close Gym" : "Open Gym"}
          onClick={() => setIsGymOpen(!isGymOpen)}
        />
      </Card>

      {/* Member Search */}
      <Card
        title="Search Members"
        description="Type a name to search the member list."
      >
        <input
          type="text"
          className="dashboard-search"
          placeholder="Search member..."
          value={searchText}
          onChange={(event) =>
            setSearchText(event.target.value)
          }
        />

        <div className="member-search-results">
          {filteredMembers.length > 0 ? (
            filteredMembers.map((member) => (
              <p key={member}>👤 {member}</p>
            ))
          ) : (
            <p>No member found.</p>
          )}
        </div>
      </Card>

      {/* Today's Information */}
      <Card
        title="Today's Gym Information"
        description="View or hide today's gym information."
      >
        <Button
          text={showDetails ? "Hide Details" : "Show Details"}
          onClick={() => setShowDetails(!showDetails)}
        />

        {showDetails && (
          <div className="dashboard-details">
            <p>👥 Total Members: 120</p>
            <p>🏋️ Active Trainers: 8</p>
            <p>📅 Today's Attendance: 76</p>
            <p>💰 Today's Payments: Nu. 15,500</p>
          </div>
        )}
      </Card>
    </div>
  );
}

export default Dashboard;