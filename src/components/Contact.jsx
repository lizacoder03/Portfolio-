function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="section-heading">
        <p>LET'S CONNECT</p>
        <h2>Contact Me</h2>
      </div>

      <div className="contact-container">
        <div className="contact-text">
          <h3>Have a project in mind?</h3>

          <p>
            I'm always interested in learning, collaborating and working on
            exciting projects.
          </p>

          <p>
            Feel free to get in touch with me.
          </p>
        </div>

        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thank you! Your message has been submitted.");
          }}
        >
          <input
            type="text"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            required
          />

          <textarea
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>

          <button type="submit" className="btn primary-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;