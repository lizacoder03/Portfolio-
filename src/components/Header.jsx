function Header() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-small">WELCOME TO MY PORTFOLIO</p>

        <h1>
          Hi, I'm <span>Liza Rima Biswas</span>
        </h1>

        <h2>Full Stack Developer</h2>

        <p className="hero-description">
          I'm a BCA student passionate about web development, programming,
          and creating modern digital experiences.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="btn primary-btn">
            Contact Me
          </a>

          <a href="#about" className="btn secondary-btn">
            Explore More
          </a>
        </div>
      </div>

      <div className="hero-card">
        <div className="profile-circle">
          LRB
        </div>

        <h3>Liza Rima Biswas</h3>
        <p>Developer • Programmer • Learner</p>
      </div>
    </section>
  );
}

export default Header;
