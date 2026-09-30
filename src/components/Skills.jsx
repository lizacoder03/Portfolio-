const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Python",
  "MySQL",
  "DBMS",
  "SQL",
  "Git",
  "GitHub",
  "Advanced Excel",
  "Photoshop",
  "Adobe Illustrator"
];

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-heading">
        <p>WHAT I WORK WITH</p>
        <h2>My Skills</h2>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-number">
              {(index + 1).toString().padStart(2, "0")}
            </div>

            <h3>{skill}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;