function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        SB
      </div>

      <p>
        © {new Date().getFullYear()} Souvik Baidya. All Rights Reserved.
      </p>

      <p className="footer-tagline">
        Designed & Developed with passion.
      </p>
    </footer>
  );
}

export default Footer;