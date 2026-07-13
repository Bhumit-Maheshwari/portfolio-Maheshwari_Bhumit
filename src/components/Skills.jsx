function Skills({ skillList }) {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills</h2>

      <div className="skills-grid">
        {skillList.map((skill) => (
          <span className="skill-tag" key={skill}>
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;