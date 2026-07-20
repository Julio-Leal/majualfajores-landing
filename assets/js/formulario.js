const URL_API = "https://script.google.com/macros/s/AKfycbwHA0IDBW-jrWm2O8CTFqxH4mG-cVEjSh2R1Na6T2Q7vbHU6EB2dnmB6iEZTKSVXTHY/exec";

const FORMULARIO = document.querySelector("form");
const BOTAO = FORMULARIO.querySelector("button[type='submit']");

let enviando = false;

FORMULARIO.addEventListener("submit", enviarFormulario);

async function enviarFormulario(event) {
    
    event.preventDefault();

    // Impede envio duplo
    if(enviando)
        return;

    enviando = true;
    BOTAO.disabled = true;
    
    // Modal de carregamento funcionando***
    Swal.fire({
        title: "Enviando pedido...",
        text: "Aguarde alguns segundos.",
        background: "#2b1d16",
        color: "#fff",
        allowOutsideClick: false,
        allowEscapeKey: false,
        showConfirmButton: false,
        didOpen: () => {
            Swal.showLoading();
        }
    });
    // Modal de carregamento funcionando***

    const DADOS = {
        nome: document.getElementById("nome").value,
        whatsapp: document.getElementById("whatsapp").value, 
        quantidade: document.getElementById("quantidade").value
    };

    try {

        const resposta = await fetch(URL_API, {
            method: "POST", 
            body: JSON.stringify(DADOS)
        });

        const json = await resposta.json();

        if(json.sucesso) {
            //alteração 20-07-2026
            Swal.fire({
                icon: 'success',
                title: 'Pedido ralizado com sucesso!',
                text: 'Obrigado por sua compra ❤',
                confirmButtonText: 'OK',
                confirmButtonColor: '#8B5E3C',
                background: '#2b1d16',
                color: '#fff'
            });
            //alteração 20-07-2026
            FORMULARIO.reset();
        }
    } catch(erro) {
            Swal.fire({
                icon: 'error',
                title: 'Erro ao enviar os dados!',
                text: 'Ocorreu um problema durante o envio. Tente novamente.',
                confirmButtonText: 'OK',
                confirmButtonColor: '#8B5E3C',
                background: '#2b1d16',
                color: '#fff'
            });
        console.error(erro);
    }
}