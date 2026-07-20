import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";
import RepoList from "../components/RepoList";

function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  function fetchRepos() {
    setLoading(true);
    setError(null);

    fetch("https://api.github.com/repos/Bhumit-Maheshwari/portfolio-Maheshwari_Bhumit")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch repositories (status " + res.status + ")");
        }
        return res.json();
      })
      .then((data) => {
        setRepos(data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchRepos();
  }, []);

  const filteredRepos = repos.filter((repo) =>
    repo.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page-container">
      <section className="section">
        <h2 className="section-title">GitHub Repositories</h2>

        {loading && <Spinner />}

        {error && <ErrorMessage message={error} onRetry={fetchRepos} />}

        {!loading && !error && (
          <>
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search repositories..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            {filteredRepos.length > 0 ? (
              <RepoList data={filteredRepos} />
            ) : (
              <p className="no-results">
                No repositories found matching &ldquo;{search}&rdquo;
              </p>
            )}
          </>
        )}
      </section>
    </div>
  );
}

export default Projects;
