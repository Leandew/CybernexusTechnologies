import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from '../components/ScrollAnimation';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
}

const Blog: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Tendências de Cibersegurança em 2024',
      excerpt: 'Conheça as principais tendências e desafios de segurança para este ano.',
      author: 'Maria Santos',
      date: '15 de Fevereiro de 2024',
      category: 'Segurança',
      image: '/img/cyber.jpg'
    },
    {
      id: 2,
      title: 'Migração para Cloud: Passo a Passo',
      excerpt: 'Guia completo para migrar sua infraestrutura para a nuvem com segurança.',
      author: 'João Silva',
      date: '10 de Fevereiro de 2024',
      category: 'Cloud',
      image: '/img/datacenter-modern.jpg'
    },
    {
      id: 3,
      title: 'Otimização de Redes Corporativas',
      excerpt: 'Dicas para melhorar o desempenho e a segurança de suas redes.',
      author: 'Carlos Oliveira',
      date: '05 de Fevereiro de 2024',
      category: 'Redes',
      image: '/img/network-infrastructure.png'
    },
    {
      id: 4,
      title: 'Importância do Backup e Disaster Recovery',
      excerpt: 'Por que você não pode ignorar a importância de um bom plano de backup.',
      author: 'Ana Costa',
      date: '01 de Fevereiro de 2024',
      category: 'Infraestrutura',
      image: '/img/datacenter.jpg'
    },
    {
      id: 5,
      title: 'Zero Trust Security: O Futuro da Segurança',
      excerpt: 'Entenda o modelo de segurança Zero Trust e como implementar em sua empresa.',
      author: 'Maria Santos',
      date: '28 de Janeiro de 2024',
      category: 'Segurança',
      image: '/img/cyber.jpg'
    },
    {
      id: 6,
      title: 'Compliance e Regulamentações em TI',
      excerpt: 'Guia sobre as principais regulamentações que sua empresa precisa cumprir.',
      author: 'João Silva',
      date: '25 de Janeiro de 2024',
      category: 'Consultoria',
      image: '/img/consulting.jpg'
    }
  ];

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
              <h1 className="display-4 fw-bold mb-4">Blog Cybernexus</h1>
              <p className="lead">Artigos, dicas e insights sobre TI, redes e cibersegurança.</p>
            </div>
          </div>
        </div>
      </header>

      {/* Posts em Destaque */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {blogPosts.map(post => (
              <div key={post.id} className="col-lg-4 col-md-6">
                <article className="blog-item card h-100 border-0 shadow-sm overflow-hidden">
                  <img src={post.image} className="card-img-top" alt={post.title} style={{ height: '200px', objectFit: 'cover' }} />
                  <div className="card-body d-flex flex-column">
                    <div className="mb-2">
                      <span className="badge bg-primary">{post.category}</span>
                    </div>
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text grow">{post.excerpt}</p>
                    <div className="text-muted small mb-3">
                      <p className="mb-1">
                        <i className="bi bi-person me-2"></i>
                        {post.author}
                      </p>
                      <p className="mb-0">
                        <i className="bi bi-calendar me-2"></i>
                        {post.date}
                      </p>
                    </div>
                    <button className="btn btn-primary btn-sm">Ler Artigo</button>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-5 text-center">
                  <h3 className="card-title mb-3">Inscreva-se em nossa Newsletter</h3>
                  <p className="card-text text-muted mb-4">
                    Receba os últimos artigos e dicas sobre TI e cibersegurança diretamente em seu email.
                  </p>
                  <form className="d-flex gap-2">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Seu email"
                      required
                    />
                    <button type="submit" className="btn btn-primary">
                      Inscrever
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-5 bg-primary text-white">
        <div className="container text-center">
          <h2 className="mb-4">Tem uma pergunta?</h2>
          <p className="lead mb-4">Entre em contato com nossos especialistas para mais informações.</p>
          <Link to="/contato" className="btn btn-light btn-lg">
            Fale Conosco
            <i className="bi bi-arrow-right ms-2"></i>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Blog;
