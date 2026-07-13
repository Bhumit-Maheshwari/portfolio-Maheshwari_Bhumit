function Projects() {
  const projects = [
    {
      title: "Personal Blog Platform",
      description: "A full-stack blog app with user authentication and markdown support.",
    },
    {
      title: "Student Management System",
      description: "CRUD application to manage student records with search and filter.",
    },
    {
      title: "Weather Dashboard App",
      description: "Real-time weather data display using a public API with location search.",
    },
  ];

  return (
    <div className="page-container">
      <section className="section">
        <h2 className="section-title">My Projects</h2>

        <div className="projects-list">
          {projects.map((project, index) => (
            <div className="project-card" key={project.title}>
              <span className="project-number">{index + 1}</span>
              <div>
                <span className="project-name">{project.title}</span>
                <p className="project-desc">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;
