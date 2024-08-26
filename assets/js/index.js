document.addEventListener('DOMContentLoaded', function () {
    const productPot = document.getElementById('product-pot');
    const quemSomosSection = document.getElementById('quem-somos');
    const videos = document.querySelectorAll('.card-video');
    const depoimentosSection = document.getElementById('depoimentos');

    // Função para animações
    const animateElement = (element, animationClass) => {
        element.classList.remove(animationClass);
        void element.offsetWidth; // Força o reflow para reiniciar a animação
        element.classList.add(animationClass);
    };

    // Função de observer genérica
    const createObserver = (element, callback) => {
        if (element) {
            new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) callback();
                    });
                },
                { threshold: 0.1 }
            ).observe(element);
        }
    };

    // Animação do pote
    if (productPot && quemSomosSection) {
        createObserver(quemSomosSection, () =>
            animateElement(productPot, 'animate-pot')
        );
    }

    // Animação dos vídeos
    const animateVideos = () => {
        if (window.innerWidth > 576) {
            videos.forEach((video, index) => {
                video.style.opacity = 0;
                video.classList.remove('animate__fadeInLeftBig');
                setTimeout(() => {
                    video.style.opacity = 1;
                    video.classList.add('animate__fadeInLeftBig');
                }, (videos.length - 1 - index) * 500);
            });
        } else {
            videos.forEach((video) => (video.style.opacity = 1));
        }
    };

    if (depoimentosSection) {
        createObserver(depoimentosSection, animateVideos);
    }

    // Pausa outros vídeos ao iniciar a reprodução
    videos.forEach((video) => {
        video.addEventListener('play', () => {
            videos.forEach((v) => {
                if (v !== video) v.pause();
            });
        });
    });

    // Função de acorde (accordion)
    document.querySelectorAll('.accordion-header').forEach((acc) => {
        acc.addEventListener('click', function () {
            // Fecha todos os painéis, exceto o atual
            document.querySelectorAll('.accordion-content').forEach((panel) => {
                if (panel !== this.nextElementSibling) {
                    panel.style.maxHeight = null;
                    panel.previousElementSibling.classList.remove('active');
                }
            });

            // Alterna o painel atual
            this.classList.toggle('active');
            const panel = this.nextElementSibling;

            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + 'px';
            }
        });
    });
});
