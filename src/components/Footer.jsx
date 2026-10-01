function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        LRB
      </div>

      <p>
        © {new Date().getFullYear()} Liza Rima Biswas. All Rights Reserved.
      </p>

      <p className="footer-tagline">
        Designed & Developed with passion.
      </p>
    </footer>
  );
}

export default Footer;
