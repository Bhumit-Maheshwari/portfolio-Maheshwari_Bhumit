import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="page-container not-found">
      <section className="section" style={{ textAlign: "center" }}>
        <h2 className="not-found-code">404</h2>
        <p className="not-found-text">
          The page you are looking for does not exist.
        </p>
        <Link to="/" className="btn">
          Go Back Home
        </Link>
      </section>
    </div>
  );
}

export default NotFound;
