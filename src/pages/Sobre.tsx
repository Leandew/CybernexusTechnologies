import { useEffect } from 'react';
import ScrollAnimation from '../components/ScrollAnimation';

const Sobre: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ScrollAnimation />
      
      {/* Hero Section */}
      <header className="text-white mt-5" style={{
        background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #4a90e2 100%)',
        minHeight: '50vh'
      }}>
        <div className="container">
          <div className="row align-items-center" style={{ minHeight: '50vh' }}>
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-4">Sobre Cybernexus Technologies</h1>
              <p className="lead">Somos especialistas em infraestrutura de TI, redes e cibersegurança com mais de 10 anos de experiência no mercado.</p>
            </div>
          </div>
        </div>
      </header>

      {/* Nossa História */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img src="/img/about-us.jpg" className="img-fluid rounded shadow" alt="Nossa história" />
            </div>
            <div className="col-lg-6">
              <h2 className="mb-4">Nossa História</h2>
              <p className="mb-3">
                Fundada em 2013, a Cybernexus Technologies nasceu da visão de profissionais apaixonados por tecnologia que queriam fazer a diferença no mercado de TI brasileiro.
              </p>
              <p className="mb-3">
                Começamos como uma pequena consultoria e, através de dedicação, inovação e excelência no atendimento, crescemos para nos tornar uma das principais empresas de infraestrutura e cibersegurança do país.
              </p>
              <p>
                Hoje, atendemos centenas de clientes em diversos segmentos, desde startups até grandes corporações, sempre mantendo nosso compromisso com qualidade e segurança.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <i className="bi bi-bullseye display-4 text-primary mb-3"></i>
                  <h5 className="card-title fw-bold">Missão</h5>
                  <p className="card-text">Fornecer soluções de TI inovadoras e seguras que permitam nossos clientes crescer e prosperar no mundo digital.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <i className="bi bi-eye display-4 text-primary mb-3"></i>
                  <h5 className="card-title fw-bold">Visão</h5>
                  <p className="card-text">Ser reconhecida como a empresa mais confiável e inovadora em infraestrutura de TI e cibersegurança na América Latina.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <i className="bi bi-heart display-4 text-primary mb-3"></i>
                  <h5 className="card-title fw-bold">Valores</h5>
                  <p className="card-text">Integridade, excelência, inovação, segurança e compromisso com o sucesso de nossos clientes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa Equipe */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Nossa Equipe</h2>
          <p className="text-center lead mb-5">
            Contamos com profissionais altamente qualificados e certificados nas principais tecnologias do mercado.
          </p>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 text-center border-0 shadow-sm">
                <img src="/img/joao.jpg" className="card-img-top" alt="Especialista" style={{ height: '250px', objectFit: 'cover' }} />
                <div className="card-body">
                  <h5 className="card-title">João Silva</h5>
                  <p className="card-text text-muted">Diretor Técnico</p>
                  <p className="card-text small">Especialista em infraestrutura com 15 anos de experiência</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 text-center border-0 shadow-sm">
                <img src="/img/Maria.png" className="card-img-top" alt="Especialista" style={{ height: '250px', objectFit: 'cover' }} />
                <div className="card-body">
                  <h5 className="card-title">Maria Santos</h5>
                  <p className="card-text text-muted">Gerente de Segurança</p>
                  <p className="card-text small">Especialista em cibersegurança e compliance</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 text-center border-0 shadow-sm">
                <img src="/img/carlos.jpg" className="card-img-top" alt="Especialista" style={{ height: '250px', objectFit: 'cover' }} />
                <div className="card-body">
                  <h5 className="card-title">Carlos Oliveira</h5>
                  <p className="card-text text-muted">Engenheiro de Redes</p>
                  <p className="card-text small">Especialista em redes corporativas e cloud</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 text-center border-0 shadow-sm">
                <img src="/img/Ana.png" className="card-img-top" alt="Especialista" style={{ height: '250px', objectFit: 'cover' }} />
                <div className="card-body">
                  <h5 className="card-title">Ana Costa</h5>
                  <p className="card-text text-muted">Consultora Estratégica</p>
                  <p className="card-text small">Especialista em transformação digital</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Números */}
      <section className="py-5 bg-primary text-white">
        <div className="container">
          <h2 className="text-center mb-5">Nossos Números</h2>
          <div className="row g-4 text-center">
            <div className="col-md-3">
              <div className="stat-item">
                <h3 className="display-4 fw-bold" data-count="500">500</h3>
                <p className="lead">Clientes Atendidos</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="stat-item">
                <h3 className="display-4 fw-bold" data-count="1000">1000</h3>
                <p className="lead">Projetos Realizados</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="stat-item">
                <h3 className="display-4 fw-bold" data-count="50">50</h3>
                <p className="lead">Profissionais</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="stat-item">
                <h3 className="display-4 fw-bold" data-count="99">99</h3>
                <p className="lead">% Satisfação</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificações */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Nossas Certificações</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 text-center border-0 shadow-sm">
                <div className="card-body p-4">
                  <i className="bi bi-shield-check display-4 text-primary mb-3"></i>
                  <h5 className="card-title">ISO 27001</h5>
                  <p className="card-text">Certificação de Gestão de Segurança da Informação</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 text-center border-0 shadow-sm">
                <div className="card-body p-4">
                  <i className="bi bi-award display-4 text-primary mb-3"></i>
                  <h5 className="card-title">Cisco Premier Partner</h5>
                  <p className="card-text">Parceria estratégica com Cisco Systems</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 text-center border-0 shadow-sm">
                <div className="card-body p-4">
                  <i className="bi bi-cloud-check display-4 text-primary mb-3"></i>
                  <h5 className="card-title">AWS Partner</h5>
                  <p className="card-text">Parceria com Amazon Web Services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sobre;
