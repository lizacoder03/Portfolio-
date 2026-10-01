function About() {
  return (
    <section id="about" className="section">
      <div className="section-heading">
        <p>GET TO KNOW ME</p>
        <h2>About Me</h2>
      </div>

      <div className="about-grid">
        <div className="about-text">
          <h3>I'm a passionate developer.</h3>

          <p>
            My name is Liza Rima Biswas. I am currently pursuing my Bachelor of
            Computer Applications (BCA) and have a strong interest in
            software development and modern web technologies.
          </p>

          <p>
            I enjoy building websites and applications using technologies
            such as HTML, CSS, JavaScript, React, Node.js, Python and
            databases.
          </p>

          <p>
            My career goal is to become a professional Full Stack Developer
            and continuously improve my technical and problem-solving
            skills.
          </p>
        </div>

        <div className="about-info">
          <div className="info-card">
            <strong>Name</strong>
            <span>LRB</span>
          </div>

          <div className="info-card">
            <strong>Degree</strong>
            <span>BCA</span>
          </div>

          <div className="info-card">
            <strong>Career Goal</strong>
            <span>Full Stack Developer</span>
          </div>

          <div className="info-card">
            <strong>Interest</strong>
            <span>Web Development</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
