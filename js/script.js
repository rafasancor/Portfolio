// Animação de escreve e apaga
const phrases = [
    "Desenvolvedor de Software",
    "Analista de Sistemas",
    "UX Designer",
    "Analista de Dados"
];

let index = 0;
let charIndex = 0;
let isDeleting = false;
const speed = 100; // Velocidade da digitação
const delayBetween = 1700; // Tempo antes de apagar a frase
const textElement = document.getElementById("text");

function typeEffect() {
    const currentPhrase = phrases[index];

    if (!isDeleting) {
        textElement.innerHTML = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentPhrase.length) {
            isDeleting = true;
            setTimeout(typeEffect, delayBetween);
            return;
        }
    } else {
        textElement.innerHTML = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            index = (index + 1) % phrases.length;
        }
    }

    setTimeout(typeEffect, isDeleting ? speed / 2 : speed);
}

typeEffect();

// Funcionalidade de menu mobile
const mobileMenuButton = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenuButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Fechar o menu mobile quando clica 
document.addEventListener('click', (event) => {
    if (!event.target.closest('.navbar')) {
        navLinks.classList.remove('active');
    }
});

// Animação suave para navegação entre os links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            navLinks.classList.remove('active');
        }
    });
});

// Revelação do botão voltar ao topo
const Btn = document.getElementById("Btn");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 200) {
        Btn.style.opacity = "1";
        Btn.style.visibility = "visible";
    } else {
        Btn.style.opacity = "0";
        Btn.style.visibility = "hidden";
    }
};

function voltarAoTopo() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Botão tipo âncora para a seção contatos
document.getElementById("faleComigo").addEventListener("click", function () {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});