import { useState } from "react";
import PageTitle from "../../components/ui/PageTitle";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";

function Attendance() {
  const [attendance, setAttendance] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      date: "20 Aug 2026",
      status: "Present",
    },
    {
      id: 2,
      name: "Priya Das",
      date: "20 Aug 2026",
      status: "Present",
    },
    {
      id: 3,
      name: "Aman Kumar",
      date: "20 Aug 2026",
      status: "Absent",
    },
  ]);

  const markAttendance = () => {
    const newRecord = {
      id: attendance.length + 1,
      name: `Member ${attendance.length + 1}`,
      date: "20 Aug 2026",
      status: "Present",
    };

    setAttendance([...attendance, newRecord]);
  };

  const presentCount = attendance.filter(
    (record) => record.status === "Present"
  ).length;

  const absentCount = attendance.filter(
    (record) => record.status === "Absent"
  ).length;

  return (
    <div className="attendance-page">

      {/* Header */}
      <div className="attendance-header">
        <PageTitle
          title="Attendance"
          description="Track and manage daily gym member attendance"
        />

        <Button onClick={markAttendance}>
          + Mark Attendance
        </Button>
      </div>

      {/* Attendance Summary */}
      <div className="attendance-summary">

        <Card
          title="Total Records"
          description="Today's attendance"
        >
          <div className="attendance-summary-value">
            📋 {attendance.length}
          </div>
        </Card>

        <Card
          title="Present"
          description="Members checked in"
        >
          <div className="attendance-summary-value present-value">
            🟢 {presentCount}
          </div>
        </Card>

        <Card
          title="Absent"
          description="Members not present"
        >
          <div className="attendance-summary-value absent-value">
            🔴 {absentCount}
          </div>
        </Card>

      </div>

      {/* Attendance Records */}
      <div className="attendance-section">

        <div className="section-heading">
          <div>
            <h2>Today's Attendance</h2>
            <p>Member check-in records</p>
          </div>
        </div>

        <div className="attendance-list">

          {attendance.map((record) => (
            <Card
              key={record.id}
              title={record.name}
              description={`Date: ${record.date}`}
            >
              <div className="attendance-record">

                <div className="attendance-member">
                  <div className="attendance-avatar">
                    {record.name.charAt(0)}
                  </div>

                  <div>
                    <strong>{record.name}</strong>
                    <span>{record.date}</span>
                  </div>
                </div>

                <span
                  className={
                    record.status === "Present"
                      ? "active-status"
                      : "inactive-status"
                  }
                >
                  {record.status}
                </span>

              </div>
            </Card>
          ))}

        </div>

      </div>

    </div>
  );
}

export default Attendance;