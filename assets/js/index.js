document.addEventListener('DOMContentLoaded', function () {
    // Código para a animação do pote na seção 'Quem Somos'
    const productPot = document.getElementById('product-pot');
    const quemSomosSection = document.getElementById('quem-somos');

    function animatePot() {
        productPot.classList.remove('animate-pot'); // Remove a classe para reiniciar a animação
        void productPot.offsetWidth; // Força o reflow para permitir a reinicialização da animação
        productPot.classList.add('animate-pot'); // Adiciona novamente a classe de animação
    }

    // Configuração do Intersection Observer para a seção 'Quem Somos'
    const observerQuemSomos = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    animatePot(); // Reinicia a animação quando a seção entra na viewport
                }
            });
        },
        { threshold: 0.1 }
    );

    // Começa a observar a seção 'Quem Somos'
    observerQuemSomos.observe(quemSomosSection);

    // Código para a animação dos vídeos na seção de depoimentos
    const videos = document.querySelectorAll('.card-video');
    const depoimentosSection = document.querySelector('#depoimentos');

    // Função para reiniciar a animação dos vídeos
    function animateVideos() {
        // Verifica se a tela é maior que 576px antes de aplicar a animação
        if (window.innerWidth > 576) {
            videos.forEach((video) => {
                video.style.opacity = 0; // Torna o vídeo invisível
                video.classList.remove('animate__fadeInLeftBig'); // Remove a classe de animação
            });

            setTimeout(() => {
                videos.forEach((video, index) => {
                    setTimeout(() => {
                        video.style.opacity = 1; // Torna o vídeo visível
                        video.classList.add('animate__fadeInLeftBig'); // Adiciona a classe de animação
                    }, (videos.length - 1 - index) * 500);
                });
            }, 100);
        }
    }

    // Configuração do Intersection Observer para a seção de depoimentos
    const observerDepoimentos = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    animateVideos();
                }
            });
        },
        { threshold: 0.1 }
    );

    // Começa a observar a seção de depoimentos
    observerDepoimentos.observe(depoimentosSection);

    // Código para pausar outros vídeos quando um novo é reproduzido
    videos.forEach((video) => {
        video.addEventListener('play', function () {
            videos.forEach((v) => {
                if (v !== video) {
                    v.pause();
                }
            });
        });
    });
});
