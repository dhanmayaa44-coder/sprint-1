import { useState } from "react";
import PageTitle from "../../components/ui/PageTitle";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";

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
    <div className="trainers-page">

      {/* Page Header */}
      <div className="trainers-header">
        <PageTitle
          title="Our Trainers"
          description="Manage trainers, specialties and availability"
        />

        <Button onClick={addTrainer}>
          + Add Trainer
        </Button>
      </div>

      {/* Trainer Summary */}
      <div className="trainer-summary">

        <Card
          title="Total Trainers"
          description="Registered trainers"
        >
          <div className="trainer-summary-value">
            🏋️ {trainers.length}
          </div>
        </Card>

        <Card
          title="Available"
          description="Ready for members"
        >
          <div className="trainer-summary-value">
            🟢 {trainers.filter(
              (trainer) => trainer.status === "Available"
            ).length}
          </div>
        </Card>

        <Card
          title="Currently Busy"
          description="Trainers in sessions"
        >
          <div className="trainer-summary-value">
            🔴 {trainers.filter(
              (trainer) => trainer.status === "Busy"
            ).length}
          </div>
        </Card>

      </div>

      {/* Trainer Directory */}
      <div className="trainers-section">

        <div className="section-heading">
          <div>
            <h2>Trainer Directory</h2>
            <p>View trainer profiles and current availability</p>
          </div>
        </div>

        <div className="trainer-grid">

          {trainers.map((trainer) => (
            <Card
              key={trainer.id}
              title={trainer.name}
              description={trainer.specialty}
            >

              <div className="trainer-card-content">

                <div className="trainer-avatar">
                  {trainer.name.charAt(0)}
                </div>

                <div className="trainer-details">

                  <span className="trainer-specialty">
                    {trainer.specialty}
                  </span>

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

              </div>

            </Card>
          ))}

        </div>

      </div>

    </div>
  );
}

export default Trainers;