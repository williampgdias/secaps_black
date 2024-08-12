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

// document.addEventListener('DOMContentLoaded', function () {
//     // Código para a animação do pote na seção 'Quem Somos'
//     const productPot = document.getElementById('product-pot');
//     const quemSomosSection = document.getElementById('quem-somos');

//     function checkVisibility() {
//         const rect = quemSomosSection.getBoundingClientRect();
//         const viewHeight =
//             window.innerHeight || document.documentElement.clientHeight;

//         if (!(rect.bottom < 0 || rect.top - viewHeight >= 0)) {
//             // Se a seção estiver visível
//             productPot.classList.add('animate-pot');
//         } else {
//             // Se a seção não estiver visível
//             productPot.classList.remove('animate-pot');
//         }
//     }

//     // Verifique a visibilidade no carregamento da página e ao rolar
//     window.addEventListener('scroll', checkVisibility);
//     window.addEventListener('resize', checkVisibility);
//     checkVisibility(); // Checa a visibilidade no carregamento

//     // Código para a animação dos vídeos na seção de depoimentos
//     const videos = document.querySelectorAll('.card-video');
//     const depoimentosSection = document.querySelector('#depoimentos');

//     // Função para reiniciar a animação dos vídeos
//     function animateVideos() {
//         // Oculta todos os vídeos e remove a classe de animação
//         videos.forEach((video) => {
//             video.style.opacity = 0; // Torna o vídeo invisível
//             video.classList.remove('animate__fadeInLeftBig'); // Remove a classe de animação
//         });

//         // Aguarda um pequeno intervalo para garantir que a opacidade foi aplicada
//         setTimeout(() => {
//             // Anima os vídeos um por um
//             videos.forEach((video, index) => {
//                 setTimeout(() => {
//                     video.style.opacity = 1; // Torna o vídeo visível
//                     video.classList.add('animate__fadeInLeftBig'); // Adiciona a classe de animação
//                 }, (videos.length - 1 - index) * 500); // Ajusta o tempo conforme necessário (em milissegundos)
//             });
//         }, 100); // Ajuste o tempo conforme necessário para garantir que a opacidade foi aplicada
//     }

//     // Configuração do Intersection Observer
//     const observer = new IntersectionObserver(
//         (entries) => {
//             entries.forEach((entry) => {
//                 if (entry.isIntersecting) {
//                     // Reinicia a animação quando a seção entra na viewport
//                     animateVideos();
//                 }
//             });
//         },
//         { threshold: 0.1 }
//     ); // 0.1 significa que 10% da seção precisa estar visível

//     // Começa a observar a seção de depoimentos
//     observer.observe(depoimentosSection);

//     // Código para pausar outros vídeos quando um novo é reproduzido
//     videos.forEach((video) => {
//         video.addEventListener('play', function () {
//             // Pausar todos os outros vídeos
//             videos.forEach((v) => {
//                 if (v !== video) {
//                     v.pause();
//                 }
//             });
//         });
//     });
// });
