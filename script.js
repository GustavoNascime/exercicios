        const header = document.getElementById('main-header');
        const mobileMenuBtn = document.getElementById('mobile-menu');
        const navMenu = document.getElementById('nav-menu');

        // 1. Efeito de Encolher o Header ao Rolar a Página (Shrink)
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('shrink');
            } else {
                header.classList.remove('shrink');
            }
        });

        // 2. Interatividade do Menu Hambúrguer (Mobile)
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Fechar o menu ao clicar em qualquer link (Melhor experiência do usuário)
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuBtn.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });