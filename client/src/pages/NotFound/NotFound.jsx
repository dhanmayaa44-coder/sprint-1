import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="not-found-page">

      <div className="not-found-icon">
        🔍
      </div>

      <h1>404</h1>

      <h2>Oops! Page Not Found</h2>

      <p>
        The page you are looking for does not exist
        or may have been moved.
      </p>

      <button
        className="primary-btn"
        onClick={() => navigate("/")}
      >
        🏠 Back to Home
      </button>

    </div>
  );
}

export default NotFound;