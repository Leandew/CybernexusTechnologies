import { useEffect, useState } from 'react';
import ScrollAnimation from '../components/ScrollAnimation';

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  empresa: string;
  assunto: string;
  mensagem: string;
}

const Contato: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    assunto: '',
    mensagem: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aqui você implementaria a lógica de envio do formulário
    console.log('Formulário enviado:', formData);
    setSubmitted(true);
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      empresa: '',
      assunto: '',
      mensagem: ''
    });
    setTimeout(() => setSubmitted(false), 5000);
  };

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
              <h1 className="display-4 fw-bold mb-4">Entre em Contato</h1>
              <p className="lead">Estamos prontos para ajudar sua empresa a crescer com segurança e eficiência.</p>
            </div>
          </div>
        </div>
      </header>

      {/* Informações de Contato */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 text-center border-0 shadow-sm">
                <div className="card-body p-4">
                  <i className="bi bi-telephone display-4 text-primary mb-3"></i>
                  <h5 className="card-title">Telefone</h5>
                  <p className="card-text">
                    <a href="tel:+5511999999999" className="text-decoration-none">
                      +55 (11) 99999-9999
                    </a>
                  </p>
                  <p className="text-muted small">Segunda a Sexta, 9h às 18h</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 text-center border-0 shadow-sm">
                <div className="card-body p-4">
                  <i className="bi bi-envelope display-4 text-primary mb-3"></i>
                  <h5 className="card-title">Email</h5>
                  <p className="card-text">
                    <a href="mailto:contato@cybernexus.com" className="text-decoration-none">
                      contato@cybernexus.com
                    </a>
                  </p>
                  <p className="text-muted small">Resposta em até 24 horas</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 text-center border-0 shadow-sm">
                <div className="card-body p-4">
                  <i className="bi bi-geo-alt display-4 text-primary mb-3"></i>
                  <h5 className="card-title">Endereço</h5>
                  <p className="card-text">
                    Av. Paulista, 1000<br />
                    São Paulo, SP 01311-100<br />
                    Brasil
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="text-center mb-4">Envie-nos uma Mensagem</h2>
              
              {submitted && (
                <div className="alert alert-success alert-dismissible fade show" role="alert">
                  <i className="bi bi-check-circle me-2"></i>
                  <strong>Sucesso!</strong> Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.
                  <button type="button" className="btn-close" onClick={() => setSubmitted(false)}></button>
                </div>
              )}

              <form onSubmit={handleSubmit} className="card border-0 shadow-sm p-4">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="nome" className="form-label">Nome Completo *</label>
                    <input
                      type="text"
                      className="form-control"
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="email" className="form-label">Email *</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="telefone" className="form-label">Telefone</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="telefone"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="empresa" className="form-label">Empresa</label>
                    <input
                      type="text"
                      className="form-control"
                      id="empresa"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="assunto" className="form-label">Assunto *</label>
                  <select
                    className="form-select"
                    id="assunto"
                    name="assunto"
                    value={formData.assunto}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="infraestrutura">Infraestrutura de TI</option>
                    <option value="redes">Redes Corporativas</option>
                    <option value="seguranca">Cibersegurança</option>
                    <option value="cloud">Cloud Computing</option>
                    <option value="suporte">Suporte Técnico</option>
                    <option value="consultoria">Consultoria Estratégica</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="mensagem" className="form-label">Mensagem *</label>
                  <textarea
                    className="form-control"
                    id="mensagem"
                    name="mensagem"
                    rows={5}
                    value={formData.mensagem}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-primary btn-lg">
                    <i className="bi bi-send me-2"></i>
                    Enviar Mensagem
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Perguntas Frequentes</h2>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                      Qual é o tempo de resposta para uma solicitação?
                    </button>
                  </h2>
                  <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Respondemos todas as solicitações em até 24 horas úteis. Para casos urgentes, oferecemos suporte 24/7.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                      Vocês atendem empresas de qualquer tamanho?
                    </button>
                  </h2>
                  <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Sim! Atendemos desde startups até grandes corporações. Nossas soluções são escaláveis e personalizáveis.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                      Qual é o custo de uma consultoria inicial?
                    </button>
                  </h2>
                  <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      A consultoria inicial é gratuita! Fazemos uma avaliação completa de suas necessidades sem compromisso.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
                      Vocês oferecem suporte pós-implementação?
                    </button>
                  </h2>
                  <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Sim! Oferecemos suporte técnico contínuo, manutenção preventiva e monitoramento 24/7 de seus sistemas.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contato;
