import { useEffect } from 'react';
import ScrollAnimation from '../components/ScrollAnimation';
import { Link} from 'react-router-dom';

const Servicos: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ScrollAnimation />
      
      {/* Hero Section */}
      <header className="text-white" style={{
        background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #4a90e2 100%)',
        minHeight: '40vh'
      }}>
        <div className="container">
          <div className="row align-items-center" style={{ minHeight: '40vh' }}>
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-4">Nossos Serviços</h1>
              <p className="lead">Soluções completas em infraestrutura de TI, redes e cibersegurança para sua empresa.</p>
            </div>
          </div>
        </div>
      </header>

      {/* Infraestrutura de TI */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img src="/img/datacenter.webp" loading="lazy" className="img-fluid rounded shadow" alt="Infraestrutura de TI" />
            </div>
            <div className="col-lg-6">
              <h2 className="mb-4">Infraestrutura de TI</h2>
              <p className="mb-3">
                Oferecemos soluções completas de infraestrutura que garantem alta disponibilidade, desempenho e segurança para seus sistemas críticos.
              </p>
              <ul className="list-unstyled mb-4">
                <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>Data Centers modernos</li>
                <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>Servidores de alta performance</li>
                <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>Soluções de backup e disaster recovery</li>
                <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>Virtualização de servidores</li>
                <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>Monitoramento 24/7</li>
              </ul>
             <Link to="/contato" className="btn btn-primary">Solicitar Orçamento</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Redes Corporativas */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2 mb-4 mb-lg-0">
              <img src="/img/redes.webp" loading="lazy" className="img-fluid rounded shadow" alt="Redes Corporativas" />
            </div>
            <div className="col-lg-6 order-lg-1">
              <h2 className="mb-4">Redes Corporativas</h2>
              <p className="mb-3">
                Implementamos redes robustas, seguras e escaláveis que suportam o crescimento da sua empresa.
              </p>
              <ul className="list-unstyled mb-4">
                <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>Cabeamento estruturado</li>
                <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>Redes Wi-Fi empresariais</li>
                <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>Switches e roteadores Cisco</li>
                <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>VPN e conectividade segura</li>
                <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>Otimização de banda</li>
              </ul>
              <Link to="/contato" className="btn btn-primary">Solicitar Orçamento</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cibersegurança */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img src="/img/cybersecurity.webp" loading="lazy" className="img-fluid rounded shadow" alt="Cibersegurança" />
            </div>
            <div className="col-lg-6">
              <h2 className="mb-4">Cibersegurança</h2>
              <p className="mb-3">
                Proteção completa contra ameaças digitais com soluções de segurança de ponta.
              </p>
              <ul className="list-unstyled mb-4">
                <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>Firewalls avançados</li>
                <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>Detecção e prevenção de intrusões</li>
                <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>Criptografia de dados</li>
                <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>Auditoria de segurança</li>
                <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>Gestão de identidade e acesso</li>
              </ul>
              <Link to="/contato" className="btn btn-primary">Solicitar Orçamento</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Computing */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2 mb-4 mb-lg-0">
              <img src="/img/cloud.webp" loading="lazy" className="img-fluid rounded shadow" alt="Cloud Computing" />
            </div>
            <div className="col-lg-6 order-lg-1">
              <h2 className="mb-4">Cloud Computing</h2>
              <p className="mb-3">
                Migração e gerenciamento de serviços em nuvem com as principais plataformas do mercado.
              </p>
              <ul className="list-unstyled mb-4">
                <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>AWS (Amazon Web Services)</li>
                <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>Microsoft Azure</li>
                <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>Google Cloud Platform</li>
                <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>Migração de dados</li>
                <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>Otimização de custos cloud</li>
              </ul>
              <Link to="/contato" className="btn btn-primary">Solicitar Orçamento</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Suporte Técnico */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img src="/img/support.webp" loading="lazy" className="img-fluid rounded shadow" alt="Suporte Técnico" />
            </div>
            <div className="col-lg-6">
              <h2 className="mb-4">Suporte Técnico</h2>
              <p className="mb-3">
                Atendimento especializado disponível 24/7 para garantir a continuidade de seus serviços.
              </p>
              <ul className="list-unstyled mb-4">
                <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>Suporte 24/7/365</li>
                <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>Help desk remoto e presencial</li>
                <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>Manutenção preventiva</li>
                <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>Gestão de incidentes</li>
                <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>Treinamento de equipes</li>
              </ul>
              <Link to="/contato" className="btn btn-primary">Solicitar Orçamento</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Consultoria Estratégica */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2 mb-4 mb-lg-0">
              <img src="/img/consulting.webp" loading="lazy" className="img-fluid rounded shadow" alt="Consultoria Estratégica" />
            </div>
            <div className="col-lg-6 order-lg-1">
              <h2 className="mb-4">Consultoria Estratégica</h2>
              <p className="mb-3">
                Orientação especializada para otimizar seus investimentos em tecnologia e alcançar seus objetivos de negócio.
              </p>
              <ul className="list-unstyled mb-4">
                <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>Diagnóstico de infraestrutura</li>
                <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>Planejamento estratégico de TI</li>
                <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>Transformação digital</li>
                <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>Gestão de projetos</li>
                <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>Compliance e regulamentações</li>
              </ul>
              <Link to="/contato" className="btn btn-primary">Solicitar Orçamento</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-5 bg-primary text-white">
        <div className="container text-center">
          <h2 className="mb-4">Pronto para começar?</h2>
          <p className="lead mb-4">Entre em contato conosco para uma avaliação gratuita de suas necessidades.</p>
          <Link to="/contato" className="btn btn-light btn-lg">
            Agendar Consulta
            <i className="bi bi-arrow-right ms-2"></i>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Servicos;
