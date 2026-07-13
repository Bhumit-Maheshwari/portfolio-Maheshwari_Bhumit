function Footer({ email }) {
  return (
    <footer id="contact" className="footer">
      <p className="footer-email">{email}</p>
      <p className="footer-copy">&copy; 2026 Student Portfolio</p>
    </footer>
  );
}

export default Footer;