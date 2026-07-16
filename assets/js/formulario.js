const URL_API = "https://script.google.com/macros/s/AKfycbwHA0IDBW-jrWm2O8CTFqxH4mG-cVEjSh2R1Na6T2Q7vbHU6EB2dnmB6iEZTKSVXTHY/exec";

const FORMULARIO = document.querySelector("form");

FORMULARIO.addEventListener("submit", enviarFormulario);

async function enviarFormulario(event) {
    
    event.preventDefault();

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
            Swal.fire({
                icon: 'success',
                title: 'Dados enviados com sucesso!',
                text: 'Obrigado por sua compra ❤',
                confirmButtonText: 'OK',
                confirmButtonColor: '#8B5E3C',
                background: '#2b1d16',
                color: '#fff'
            });
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