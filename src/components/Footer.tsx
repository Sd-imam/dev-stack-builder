function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">

          <div className="footer-logo">
            <span className="footer-logo-icon">DS</span>
            <span>Dev Stack</span>
          </div>

          <p>
            Curated tools, technologies, and resources for
            developers building modern software.
          </p>

          <div className="social-links">
            <a href="#" aria-label="GitHub">
              GitHub
            </a>

            <a href="#" aria-label="Twitter">
              Twitter
            </a>

            <a href="#" aria-label="LinkedIn">
              LinkedIn
            </a>
          </div>

        </div>


        {/* Product */}
        <div className="footer-column">

          <h3>Product</h3>

          <a href="#home">Home</a>
          <a href="#technologies">Technologies</a>
          <a href="#projects">Projects</a>

        </div>


        {/* Company */}
        <div className="footer-column">

          <h3>Company</h3>

          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#">Careers</a>

        </div>


        {/* Legal */}
        <div className="footer-column">

          <h3>Legal</h3>

          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>

        </div>

      </div>


      {/* Bottom */}
      <div className="footer-bottom">

        <p>
          © 2026 Dev Stack. All rights reserved.
        </p>

        <div>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>

      </div>

    </footer>
  );
}

export default Footer;