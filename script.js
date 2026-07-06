// ==========================
// MENU AO ROLAR A PÁGINA
// ==========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.background = "rgba(0,0,0,.95)";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.5)";
    } else {
        header.style.background = "rgba(0,0,0,.75)";
        header.style.boxShadow = "none";
    }
});

// ==========================
// ANIMAÇÃO DOS CARDS
// ==========================

const elementos = document.querySelectorAll(".card, .plano, .pergunta");

const observador = new IntersectionObserver((entradas) => {

    entradas.forEach((entrada) => {

        if (entrada.isIntersecting) {

            entrada.target.classList.add("mostrar");

        }

    });

}, {

    threshold: .15

});

elementos.forEach((el) => {

    el.classList.add("escondido");

    observador.observe(el);

});

// ==========================
// BOTÃO FLUTUANTE WHATSAPP
// ==========================

const whatsapp = document.createElement("a");

whatsapp.href = "https://wa.me/5541987938404";

whatsapp.target = "_blank";

whatsapp.innerHTML = "💬";

whatsapp.className = "whatsapp";

document.body.appendChild(whatsapp);

// ==========================
// CONTADOR DOS PLANOS
// ==========================

const contador = document.querySelector(".plano h1");

if (contador) {

    let valor = 0;

    const intervalo = setInterval(() => {

        valor++;

        contador.innerHTML = "R$" + valor;

        if (valor >= 25) {

            contador.innerHTML = "R$25";

            clearInterval(intervalo);

        }

    }, 40);

}

// ==========================
// EFEITO NOS BOTÕES
// ==========================

document.querySelectorAll(".btn, .btn2, .plano a").forEach(botao => {

    botao.addEventListener("mouseenter", () => {

        botao.style.transform = "scale(1.05)";

    });

    botao.addEventListener("mouseleave", () => {

        botao.style.transform = "scale(1)";

    });

});

// ==========================
// SCROLL SUAVE DOS LINKS
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        if (destino) {

            destino.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ==========================
// MENSAGEM AO CARREGAR
// ==========================

window.addEventListener("load", () => {

    console.log("IPTV Premium carregado com sucesso!");

});
