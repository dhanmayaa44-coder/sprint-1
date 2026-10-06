import { useState } from "react";

function MemberForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    plan: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });

    setSubmitted(false);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Member name is required";
    } else if (formData.name.length < 3) {
      newErrors.name = "Name must contain at least 3 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must contain 10 digits";
    }

    if (!formData.age) {
      newErrors.age = "Age is required";
    } else if (Number(formData.age) < 16) {
      newErrors.age = "Member must be at least 16 years old";
    }

    if (!formData.plan) {
      newErrors.plan = "Please select a membership plan";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      age: "",
      plan: "",
    });

    setErrors({});
    setSubmitted(false);
  };

  return (
    <div className="member-registration">

      <div className="registration-header">
        <div>
          <h1>Register New Member</h1>
          <p>Add a new member to the Gym Management System</p>
        </div>
      </div>

      <div className="registration-card">

        <div className="form-heading">
          <h2>Member Information</h2>
          <p>Enter the member details below.</p>
        </div>

        <form onSubmit={handleSubmit}>

          {/* Name */}
          <div className="input-group">
            <label>Full Name *</label>

            <input
              type="text"
              name="name"
              placeholder="Enter full name"
              value={formData.name}
              onChange={handleChange}
            />

            {errors.name && (
              <span className="input-error">
                {errors.name}
              </span>
            )}
          </div>

          {/* Email */}
          <div className="input-group">
            <label>Email Address *</label>

            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              value={formData.email}
              onChange={handleChange}
            />

            {errors.email && (
              <span className="input-error">
                {errors.email}
              </span>
            )}
          </div>

          {/* Phone */}
          <div className="input-group">
            <label>Phone Number *</label>

            <input
              type="text"
              name="phone"
              placeholder="10 digit phone number"
              value={formData.phone}
              onChange={handleChange}
            />

            {errors.phone && (
              <span className="input-error">
                {errors.phone}
              </span>
            )}
          </div>

          {/* Age */}
          <div className="input-group">
            <label>Age *</label>

            <input
              type="number"
              name="age"
              placeholder="Enter age"
              value={formData.age}
              onChange={handleChange}
            />

            {errors.age && (
              <span className="input-error">
                {errors.age}
              </span>
            )}
          </div>

          {/* Membership Plan */}
          <div className="input-group">
            <label>Membership Plan *</label>

            <select
              name="plan"
              value={formData.plan}
              onChange={handleChange}
            >
              <option value="">
                Select membership plan
              </option>

              <option value="Basic">
                Basic - ₹999/month
              </option>

              <option value="Standard">
                Standard - ₹1499/month
              </option>

              <option value="Premium">
                Premium - ₹1999/month
              </option>
            </select>

            {errors.plan && (
              <span className="input-error">
                {errors.plan}
              </span>
            )}
          </div>

          {/* Buttons */}
          <div className="registration-buttons">

            <button
              type="submit"
              className="register-button"
            >
              Register Member
            </button>

            <button
              type="button"
              className="reset-button"
              onClick={handleReset}
            >
              Clear Form
            </button>

          </div>

          {/* Success */}
          {submitted && (
            <div className="success-message">
              <strong>✓ Registration Successful</strong>
              <p>
                {formData.name} has been registered successfully.
              </p>
            </div>
          )}

        </form>
      </div>
    </div>
  );
}

export default MemberForm;