function Projects() {
  const projects = [
    "Personal Blog Platform",
    "Student Management System",
    "Weather Dashboard App",
  ];

  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>

      <div className="projects-list">
        {projects.map((project, index) => (
          <div className="project-card" key={project}>
            <span className="project-number">{index + 1}</span>
            <span className="project-name">{project}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;