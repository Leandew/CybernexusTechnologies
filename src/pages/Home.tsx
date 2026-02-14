import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from '../components/ScrollAnimation';

const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ScrollAnimation />
      
      {/* Hero Section */}
      <header className="text-white mt-5" style={{
        background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #4a90e2 100%)',
        minHeight: '100vh'
      }}>
        <div className="container">
          <div className="row align-items-center" style={{ minHeight: '100vh' }}>
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">Infraestrutura de TI, Redes e Cibersegurança</h1>
              <p className="lead mb-4">Protegendo e otimizando sua empresa no mundo digital com soluções inovadoras e seguras</p>
              <div className="d-flex flex-column flex-sm-row gap-3">
                <Link to="/servicos" className="btn btn-light btn-lg">
                  Conheça nossos serviços
                  <i className="bi bi-arrow-right ms-2"></i>
                </Link>
                <Link to="/contato" className="btn btn-outline-light btn-lg">
                  Fale conosco
                  <i className="bi bi-chat-dots ms-2"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <i className="bi bi-shield-check display-1 text-light opacity-75"></i>
            </div>
          </div>
        </div>
      </header>

      {/* Sobre Nós */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img src="/img/about-us.jpg" className="img-fluid rounded shadow" alt="Equipe trabalhando" />
            </div>
            <div className="col-lg-6">
              <h2 className="mb-4">Quem Somos</h2>
              <p>Na Cybernexus Technologies, somos apaixonados por tecnologia e dedicados a impulsionar o sucesso dos nossos clientes através de soluções de TI inovadoras e seguras.</p>
              <p>Com anos de experiência no mercado, nossa equipe de especialistas oferece serviços de infraestrutura, redes e cibersegurança, garantindo que sua empresa esteja sempre à frente no cenário digital.</p>
              <Link to="/sobre" className="btn btn-primary">Saiba Mais Sobre Nós</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Nossos Valores</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 text-center border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                    <i className="bi bi-shield-check fs-2"></i>
                  </div>
                  <h5 className="card-title">Segurança</h5>
                  <p className="card-text">Garantimos proteção total para os dados e sistemas da sua empresa com as mais avançadas tecnologias de segurança.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 text-center border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                    <i className="bi bi-lightning-charge-fill fs-2"></i>
                  </div>
                  <h5 className="card-title">Agilidade</h5>
                  <p className="card-text">Implementamos soluções rápidas e eficazes para manter sua operação sempre ativa e produtiva.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 text-center border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                    <i className="bi bi-people-fill fs-2"></i>
                  </div>
                  <h5 className="card-title">Confiança</h5>
                  <p className="card-text">Construímos relacionamentos sólidos e de longo prazo com nossos clientes baseados na transparência e excelência.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Nossas Soluções Abrangentes</h2>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <img src="/img/infra.jpg" className="card-img-top" alt="Infraestrutura de TI" style={{ height: '200px', objectFit: 'cover' }} />
                <div className="card-body">
                  <h5 className="card-title">Infraestrutura de TI</h5>
                  <p className="card-text">Data centers, servidores e soluções de alta disponibilidade sob medida para sua empresa.</p>
                  <Link to="/servicos" className="btn btn-outline-primary">Ver Detalhes</Link>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <img src="/img/img1.jpg" className="card-img-top" alt="Redes Corporativas" style={{ height: '200px', objectFit: 'cover' }} />
                <div className="card-body">
                  <h5 className="card-title">Redes Corporativas</h5>
                  <p className="card-text">Cabeamento estruturado, redes Wi-Fi seguras e monitoramento em tempo real.</p>
                  <Link to="/servicos" className="btn btn-outline-primary">Ver Detalhes</Link>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <img src="/img/cyber.jpg" className="card-img-top" alt="Cibersegurança" style={{ height: '200px', objectFit: 'cover' }} />
                <div className="card-body">
                  <h5 className="card-title">Cibersegurança</h5>
                  <p className="card-text">Auditoria, firewall, criptografia e proteção contra ameaças digitais.</p>
                  <Link to="/servicos" className="btn btn-outline-primary">Ver Detalhes</Link>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <img src="/img/img2.jpg" className="card-img-top" alt="Cloud Computing" style={{ height: '200px', objectFit: 'cover' }} />
                <div className="card-body">
                  <h5 className="card-title">Cloud Computing</h5>
                  <p className="card-text">Migração e gerenciamento de serviços em nuvem (AWS, Azure, Google Cloud).</p>
                  <Link to="/servicos" className="btn btn-outline-primary">Ver Detalhes</Link>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <img src="/img/support.jpg" className="card-img-top" alt="Suporte Técnico" style={{ height: '200px', objectFit: 'cover' }} />
                <div className="card-body">
                  <h5 className="card-title">Suporte Técnico</h5>
                  <p className="card-text">Atendimento especializado e suporte contínuo para sua equipe.</p>
                  <Link to="/servicos" className="btn btn-outline-primary">Ver Detalhes</Link>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <img src="/img/consulting.jpg" className="card-img-top" alt="Consultoria Estratégica" style={{ height: '200px', objectFit: 'cover' }} />
                <div className="card-body">
                  <h5 className="card-title">Consultoria Estratégica</h5>
                  <p className="card-text">Orientação para otimizar seus investimentos em tecnologia.</p>
                  <Link to="/servicos" className="btn btn-outline-primary">Ver Detalhes</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Casos de Sucesso */}
      <section className="py-5 bg-primary text-white">
        <div className="container">
          <h2 className="text-center mb-5">Nossos Casos de Sucesso</h2>
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="card bg-white text-dark h-100">
                <div className="card-body text-center p-4">
                  <blockquote className="blockquote">
                    <p className="mb-3">"Cybernexus transformou completamente nossa infraestrutura. Agora temos 99.9% de uptime!"</p>
                    <footer className="blockquote-footer">CEO - Empresa Tech</footer>
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card bg-white text-dark h-100">
                <div className="card-body text-center p-4">
                  <blockquote className="blockquote">
                    <p className="mb-3">"O suporte técnico deles é excepcional. Sempre prontos para ajudar!"</p>
                    <footer className="blockquote-footer">Diretor - Empresa Financeira</footer>
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card bg-white text-dark h-100">
                <div className="card-body text-center p-4">
                  <blockquote className="blockquote">
                    <p className="mb-3">"Implementação de cibersegurança foi rápida e eficiente. Muito satisfeito!"</p>
                    <footer className="blockquote-footer">Gerente - Empresa Industrial</footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="mb-4">Pronto para transformar sua infraestrutura?</h2>
          <p className="mb-4">Entre em contato conosco hoje e descubra como podemos ajudar seu negócio a crescer com segurança e eficiência.</p>
          <Link to="/contato" className="btn btn-primary btn-lg">
            Solicitar Orçamento
            <i className="bi bi-arrow-right ms-2"></i>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
