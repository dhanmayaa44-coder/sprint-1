import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password.");
      return;
    }

    alert("Login successful!");
  };

  return (
    <div className="login-page">

      <div className="login-card">

        <div className="login-logo">
          G
        </div>

        <h1>Welcome Back!</h1>

        <p className="login-description">
          Login to manage your gym efficiently.
        </p>

        <form onSubmit={handleLogin}>

          <div className="form-group">
            <label>Email Address</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="login-btn"
          >
            🔐 Login
          </button>

        </form>

        <p className="login-note">
          Gym Management System
        </p>

      </div>

    </div>
  );
}

export default Login;