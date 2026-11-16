
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import PageTitle from "../../components/ui/PageTitle";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";

import {
  getTrainers,
  updateTrainer,
  deleteTrainer,
} from "../../services/trainerService";

function Trainers() {
  const navigate = useNavigate();

  const [trainers, setTrainers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadTrainers();
  }, []);

  const loadTrainers = async () => {
    try {
      setLoading(true);
      const data = await getTrainers();
      setTrainers(data);
      setError("");
    } catch (err) {
      setError("Unable to load trainers. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Edit trainer name
  const handleEdit = async (trainer) => {
    const name = window.prompt(
      "Enter trainer name:",
      trainer.name
    );

    if (name === null || !name.trim()) {
      return;
    }

    try {
      await updateTrainer(trainer._id, {
        ...trainer,
        name: name.trim(),
      });

      alert("Trainer updated successfully!");
      loadTrainers();
    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Unable to update trainer."
      );
    }
  };

  // Delete trainer
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this trainer?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      await deleteTrainer(id);
      alert("Trainer deleted successfully!");
      loadTrainers();
    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Unable to delete trainer."
      );
    }
  };

  return (
    <div className="trainers-page">

      {/* Page Header */}
      <div className="trainers-header">
        <PageTitle
          title="Our Trainers"
          description="Manage trainers, specialties and availability"
        />

        <Button onClick={() => navigate("/trainers/register")}>
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
            {trainers.length}
          </div>
        </Card>

        <Card
          title="Full-time"
          description="Full-time trainers"
        >
          <div className="trainer-summary-value">
            {trainers.filter(
              (trainer) =>
                trainer.availability === "Full-time"
            ).length}
          </div>
        </Card>

        <Card
          title="Part-time"
          description="Part-time trainers"
        >
          <div className="trainer-summary-value">
            {trainers.filter(
              (trainer) =>
                trainer.availability === "Part-time"
            ).length}
          </div>
        </Card>

      </div>

      {/* Trainer Directory */}
      <div className="trainers-section">

        <div className="section-heading">
          <div>
            <h2>Trainer Directory</h2>
            <p>View trainer profiles and availability</p>
          </div>
        </div>

        {loading && <p>Loading trainers...</p>}

        {error && <p>{error}</p>}

        {!loading && !error && trainers.length === 0 && (
          <p>No trainers registered yet.</p>
        )}

        {!loading && !error && (
          <div className="trainer-grid">

            {trainers.map((trainer) => (
              <Card
                key={trainer._id}
                title={trainer.name}
                description={trainer.specialization}
              >

                <div className="trainer-card-content">

                  <div className="trainer-avatar">
                    {trainer.name.charAt(0).toUpperCase()}
                  </div>

                  <div className="trainer-details">

                    <span className="trainer-specialty">
                      {trainer.specialization}
                    </span>

                    <span>
                      Experience: {trainer.experience} years
                    </span>

                    <span>
                      Availability: {trainer.availability}
                    </span>

                    <span>
                      Email: {trainer.email}
                    </span>

                    <span>
                      Phone: {trainer.phone}
                    </span>

                  </div>

                </div>

                {/* Edit and Delete Buttons */}
                <div className="trainer-actions">

                  <button
                    type="button"
                    onClick={() => handleEdit(trainer)}
                  >
                    Edit
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDelete(trainer._id)}
                  >
                    Delete
                  </button>

                </div>

              </Card>
            ))}

          </div>
        )}

      </div>

    </div>
  );
}

export default Trainers;
