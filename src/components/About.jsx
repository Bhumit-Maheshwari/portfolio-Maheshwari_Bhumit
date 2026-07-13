function About({ college }) {
  return (
    <section id="about" className="section">
      <h2 className="section-title">About Me</h2>

      <p className="about-text">
        Hello! I am a Computer Science &amp; Engineering student at{" "}
        <strong>{college}</strong>. I enjoy learning React, JavaScript,
        and Web Development. I like building clean user interfaces and
        solving programming problems in my free time.
      </p>
    </section>
  );
}

export default About;