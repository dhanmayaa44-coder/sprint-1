import { useState } from "react";

function Trainers() {
  const [trainers, setTrainers] = useState([
    {
      id: 1,
      name: "Arjun Singh",
      specialty: "Strength Training",
      status: "Available",
    },
    {
      id: 2,
      name: "Neha Sharma",
      specialty: "Yoga & Fitness",
      status: "Available",
    },
    {
      id: 3,
      name: "Rohan Das",
      specialty: "Cardio Training",
      status: "Busy",
    },
  ]);

  const addTrainer = () => {
    const newTrainer = {
      id: trainers.length + 1,
      name: `New Trainer ${trainers.length + 1}`,
      specialty: "General Fitness",
      status: "Available",
    };

    setTrainers([...trainers, newTrainer]);
  };

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Trainers</h1>
          <p>Manage gym trainers and their availability</p>
        </div>

        <button className="primary-btn" onClick={addTrainer}>
          + Add Trainer
        </button>
      </div>

      <div className="trainer-grid">
        {trainers.map((trainer) => (
          <div className="trainer-card" key={trainer.id}>
            <div className="trainer-avatar">
              {trainer.name.charAt(0)}
            </div>

            <h3>{trainer.name}</h3>

            <p>
              <strong>Specialty:</strong> {trainer.specialty}
            </p>

            <span
              className={
                trainer.status === "Available"
                  ? "active-status"
                  : "inactive-status"
              }
            >
              {trainer.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trainers;