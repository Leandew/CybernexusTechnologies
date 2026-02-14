interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-5 mt-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-4">
            <h5 className="fw-bold mb-3">
              <i className="bi bi-shield-lock-fill me-2 text-primary"></i>
              Cybernexus Technologies
            </h5>
            <p className="text-muted">
              Infraestrutura de TI, Redes e Cibersegurança de ponta para sua empresa.
            </p>
          </div>
          <div className="col-md-4">
            <h5 className="fw-bold mb-3">Links Rápidos</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/" className="text-decoration-none text-muted hover-text-primary">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="/sobre" className="text-decoration-none text-muted hover-text-primary">
                  Sobre Nós
                </a>
              </li>
              <li className="mb-2">
                <a href="/servicos" className="text-decoration-none text-muted hover-text-primary">
                  Serviços
                </a>
              </li>
              <li className="mb-2">
                <a href="/contato" className="text-decoration-none text-muted hover-text-primary">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="fw-bold mb-3">Contato</h5>
            <ul className="list-unstyled text-muted">
              <li className="mb-2">
                <i className="bi bi-envelope me-2"></i>
                <a href="mailto:contato@cybernexus.com" className="text-decoration-none text-muted">
                  contato@cybernexus.com
                </a>
              </li>
              <li className="mb-2">
                <i className="bi bi-telephone me-2"></i>
                <a href="tel:+5511999999999" className="text-decoration-none text-muted">
                  +55 (11) 99999-9999
                </a>
              </li>
              <li>
                <i className="bi bi-geo-alt me-2"></i>
                São Paulo, SP - Brasil
              </li>
            </ul>
          </div>
        </div>
        <hr className="bg-secondary my-4" />
        <div className="row">
          <div className="col-md-6">
            <p className="text-muted mb-0">
              &copy; {currentYear} Cybernexus Technologies. Todos os direitos reservados.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <a href="#" className="text-muted text-decoration-none me-3">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" className="text-muted text-decoration-none me-3">
              <i className="bi bi-twitter-x"></i>
            </a>
            <a href="#" className="text-muted text-decoration-none me-3">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="#" className="text-muted text-decoration-none">
              <i className="bi bi-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;