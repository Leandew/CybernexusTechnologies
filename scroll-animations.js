// Animações de Scroll - TechSecure Solutions

document.addEventListener('DOMContentLoaded', function() {
    // Configuração do Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    // Função para animar elementos quando entram na viewport
    const animateOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Animar elementos filhos com delay
                const childElements = entry.target.querySelectorAll('.card, .blog-item, .service-card, .gallery-item, .btn, img, .form-control, .form-select, .form-check, .stat-item, .display-1, .display-2, .display-3, .display-4, .display-5, .display-6');
                
                childElements.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('animate-in');
                    }, index * 100);
                });

                // Parar de observar o elemento após a animação
                observer.unobserve(entry.target);
            }
        });
    };

    // Criar o observer
    const observer = new IntersectionObserver(animateOnScroll, observerOptions);

    // Observar todas as seções e footer
    const sectionsToAnimate = document.querySelectorAll('section, footer');
    sectionsToAnimate.forEach(section => {
        observer.observe(section);
    });

    // Garantir que nav e header apareçam imediatamente
    const navElements = document.querySelectorAll('nav, header');
    navElements.forEach(element => {
        element.classList.add('animate-in');
        
        // Animar elementos filhos do nav e header imediatamente
        const childElements = element.querySelectorAll('.btn, img, .display-1, .display-2, .display-3, .display-4, .display-5, .display-6');
        childElements.forEach((child, index) => {
            setTimeout(() => {
                child.classList.add('animate-in');
            }, index * 50);
        });
    });

    // Função para animar elementos individuais que podem aparecer dinamicamente
    const animateIndividualElements = () => {
        const elementsToAnimate = document.querySelectorAll('.card:not(.animate-in), .blog-item:not(.animate-in), .service-card:not(.animate-in), .gallery-item:not(.animate-in)');
        
        elementsToAnimate.forEach(element => {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            if (rect.top < windowHeight * 0.8) {
                element.classList.add('animate-in');
            }
        });
    };

    // Observer para elementos individuais (cards, etc.)
    const individualObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                individualObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });

    // Observar cards e elementos individuais
    const individualElements = document.querySelectorAll('.card, .blog-item, .service-card, .gallery-item, .btn, .form-control, .form-select, .form-check, .stat-item');
    individualElements.forEach(element => {
        individualObserver.observe(element);
    });

    // Animar imagens quando carregam
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (img.complete) {
            img.classList.add('animate-in');
        } else {
            img.addEventListener('load', () => {
                img.classList.add('animate-in');
            });
        }
    });

    // Listener para scroll suave
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Adicionar botão de voltar ao topo se não existir
    if (!document.querySelector('.scroll-to-top')) {
        const scrollButton = document.createElement('button');
        scrollButton.className = 'btn btn-primary scroll-to-top position-fixed';
        scrollButton.style.cssText = `
            bottom: 20px;
            right: 20px;
            z-index: 1000;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            opacity: 0;
            transition: opacity 0.3s ease;
            border: none;
        `;
        scrollButton.innerHTML = '<i class="bi bi-arrow-up"></i>';
        scrollButton.addEventListener('click', scrollToTop);
        document.body.appendChild(scrollButton);

        // Mostrar/esconder botão baseado no scroll
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollButton.style.opacity = '1';
            } else {
                scrollButton.style.opacity = '0';
            }
        });
    }

    // Animação especial para elementos de estatísticas/contadores
    const animateCounters = () => {
        const counters = document.querySelectorAll('[data-count]');
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count'));
            const duration = 2000; // 2 segundos
            const increment = target / (duration / 16); // 60fps
            let current = 0;

            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };

            // Iniciar animação quando o elemento estiver visível
            const rect = counter.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.8) {
                updateCounter();
            }
        });
    };

    // Executar animação de contadores
    window.addEventListener('scroll', animateCounters);
    animateCounters(); // Executar uma vez no carregamento

    // Melhorar performance com throttling do scroll
    let ticking = false;
    const handleScroll = () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                animateIndividualElements();
                ticking = false;
            });
            ticking = true;
        }
    };

    window.addEventListener('scroll', handleScroll);

    // Executar uma vez no carregamento para elementos já visíveis
    animateIndividualElements();
});

// Função para reinicializar animações (útil para conteúdo dinâmico)
window.reinitializeAnimations = function() {
    const elements = document.querySelectorAll('section, footer, .card, .blog-item, .service-card, .gallery-item');
    elements.forEach(element => {
        element.classList.remove('animate-in');
    });
    
    // Reexecutar as animações após um pequeno delay
    setTimeout(() => {
        const event = new Event('DOMContentLoaded');
        document.dispatchEvent(event);
    }, 100);
};
