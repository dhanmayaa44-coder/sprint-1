
import { useState } from "react";
import { createTrainer } from "../../services/trainerService";

function TrainerForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    specialization: "",
    experience: "",
    availability: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setSubmitted(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await createTrainer({
        ...formData,
        experience: Number(formData.experience),
      });

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        specialization: "",
        experience: "",
        availability: "",
      });
    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Unable to register trainer. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="member-registration">
      <div className="registration-header">
        <div>
          <h1>Register New Trainer</h1>
          <p>Add a trainer to the Gym Management System</p>
        </div>
      </div>

      <div className="registration-card">
        <div className="form-heading">
          <h2>Trainer Information</h2>
          <p>Enter the trainer details below.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Full Name *</label>
            <input
              type="text"
              name="name"
              placeholder="Enter full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Email Address *</label>
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Phone Number *</label>
            <input
              type="text"
              name="phone"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Specialization *</label>
            <input
              type="text"
              name="specialization"
              placeholder="e.g. Weight Training"
              value={formData.specialization}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Years of Experience *</label>
            <input
              type="number"
              name="experience"
              placeholder="Enter years of experience"
              min="0"
              value={formData.experience}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Availability *</label>
            <select
              name="availability"
              value={formData.availability}
              onChange={handleChange}
              required
            >
              <option value="">Select availability</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Weekends">Weekends</option>
            </select>
          </div>

          <div className="registration-buttons">
            <button
              type="submit"
              className="register-button"
              disabled={loading}
            >
              {loading ? "Registering..." : "Register Trainer"}
            </button>

            <button
              type="reset"
              className="reset-button"
              onClick={() =>
                setFormData({
                  name: "",
                  email: "",
                  phone: "",
                  specialization: "",
                  experience: "",
                  availability: "",
                })
              }
            >
              Clear Form
            </button>
          </div>

          {submitted && (
            <div className="success-message">
              <strong>✓ Registration Successful</strong>
              <p>Trainer has been registered successfully.</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default TrainerForm;
