function WelcomeMessage({ userName, role, gymName }) {
  return (
    <div className="welcome-message">
      <h2>Welcome, {userName}! 👋</h2>

      <p>
        You are logged in as <strong>{role}</strong> at{" "}
        <strong>{gymName}</strong>.
      </p>
    </div>
  );
}

export default WelcomeMessage;