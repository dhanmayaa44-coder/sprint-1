import { useState } from "react";

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

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Attendance</h1>
          <p>Track daily gym member attendance</p>
        </div>

        <button className="primary-btn" onClick={markAttendance}>
          + Mark Attendance
        </button>
      </div>

      <div className="attendance-list">
        {attendance.map((record) => (
          <div className="attendance-card" key={record.id}>
            <div>
              <h3>{record.name}</h3>
              <p>{record.date}</p>
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
        ))}
      </div>
    </div>
  );
}

export default Attendance;