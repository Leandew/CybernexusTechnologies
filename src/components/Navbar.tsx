import { Link } from "react-router-dom";
import { useState } from "react";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          <i className="bi bi-shield-lock-fill me-2 text-primary"></i>
          Cybernexus Technologies
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
          aria-controls="menu"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="menu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={handleClose}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sobre" onClick={handleClose}>
                Sobre
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/servicos" onClick={handleClose}>
                Serviços
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/galeria" onClick={handleClose}>
                Galeria
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog" onClick={handleClose}>
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contato" onClick={handleClose}>
                Contato
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;