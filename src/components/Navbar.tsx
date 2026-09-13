import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };
//hjg
  return (
    <header className="navbar">
      <div className="navbar-container">

        <a href="#home" className="brand" onClick={closeMenu}>
            <span className="brand-icon">DS</span>
          <span className="brand-text">
            Dev <span>Stack</span>
             </span>
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <nav className={menuOpen ? "nav-open" : ""}>
          <a
            href="#home"
            className="active"
            onClick={closeMenu}
          >
            Home
          </a>

          <a
            href="#technologies"
            onClick={closeMenu}
          >
            Technologies
          </a>

          <a
            href="#projects"
            onClick={closeMenu}
          >
            Projects
          </a>

          <a
            href="#about"
            onClick={closeMenu}
          >
            About
          </a>

          <a
            href="#contact"
            onClick={closeMenu}
          >
            Contact
          </a>
        </nav>

        <div className="auth-buttons">
          <button className="sign-in">
            Sign In
          </button>

          <button className="sign-up">
            Sign Up
          </button>
        </div>

      </div>
    </header>
  );
}

export default Navbar;