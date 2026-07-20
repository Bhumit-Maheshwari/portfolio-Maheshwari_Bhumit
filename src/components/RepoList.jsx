function RepoList({ data }) {
  return (
    <div className="projects-list">
      {data.map((repo) => (
        <a
          className="project-card repo-card"
          key={repo.id}
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="repo-info">
            <span className="project-name">{repo.name}</span>
            <p className="project-desc">
              {repo.description || "No description provided."}
            </p>
          </div>

          <div className="repo-meta">
            {repo.language && (
              <span className="repo-lang">{repo.language}</span>
            )}
            <span className="repo-stars">⭐ {repo.stargazers_count}</span>
          </div>
        </a>
      ))}
    </div>
  );
}

export default RepoList;
