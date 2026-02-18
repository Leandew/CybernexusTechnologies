import { useEffect, useState } from 'react';
import ScrollAnimation from '../components/ScrollAnimation';
import { Link } from 'react-router-dom';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

const Galeria: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [filteredItems, setFilteredItems] = useState<GalleryItem[]>([]);

  const galleryItems: GalleryItem[] = [
    { id: 1, title: 'Data Center Moderno', category: 'infraestrutura', image: '/img/datacenter.webp' },
    { id: 2, title: 'Rede Corporativa', category: 'redes', image: '/img/redes.webp' },
    { id: 3, title: 'Cibersegurança', category: 'seguranca', image: '/img/cybersecurity.webp' },
    { id: 4, title: 'Cloud Computing', category: 'cloud', image: '/img/cloud.webp' },
    { id: 5, title: 'Suporte Técnico', category: 'suporte', image: '/img/support.webp' },
    { id: 6, title: 'Consultoria', category: 'consultoria', image: '/img/consulting.webp' },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (selectedCategory === 'todos') {
      setFilteredItems(galleryItems);
    } else {
      setFilteredItems(galleryItems.filter(item => item.category === selectedCategory));
    }
  }, [selectedCategory]);

  const categories = [
    { value: 'todos', label: 'Todos' },
    { value: 'infraestrutura', label: 'Infraestrutura' },
    { value: 'redes', label: 'Redes' },
    { value: 'seguranca', label: 'Segurança' },
    { value: 'cloud', label: 'Cloud' },
    { value: 'suporte', label: 'Suporte' },
    { value: 'consultoria', label: 'Consultoria' },
  ];

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
              <h1 className="display-4 fw-bold mb-4">Galeria de Projetos</h1>
              <p className="lead">Conheça alguns dos nossos projetos e soluções implementadas.</p>
            </div>
          </div>
        </div>
      </header>

      {/* Filtros */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="d-flex flex-wrap gap-2 justify-content-center">
                {categories.map(category => (
                  <button
                    key={category.value}
                    className={`btn ${selectedCategory === category.value ? 'btn-primary' : 'btn-outline-primary'}`}
                    onClick={() => setSelectedCategory(category.value)}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {filteredItems.map(item => (
              <div key={item.id} className="col-lg-4 col-md-6">
                <div className="gallery-item card h-100 border-0 shadow-sm overflow-hidden">
                  <img src={item.image} loading="lazy" className="card-img-top" alt={item.title} style={{ height: '250px', objectFit: 'cover' }} />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text text-muted text-capitalize">{item.category}</p>
                    <button className="btn btn-primary btn-sm">Ver Detalhes</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-5 bg-primary text-white">
        <div className="container text-center">
          <h2 className="mb-4">Quer ver mais projetos?</h2>
          <p className="lead mb-4">Entre em contato para conhecer nosso portfólio completo.</p>
          <Link to="/contato" className="btn btn-light btn-lg">
            Solicitar Portfólio Completo
            <i className="bi bi-arrow-right ms-2"></i>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Galeria;
