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
            alert("Dados enviados com sucesso!");
            FORMULARIO.reset();
        }
    } catch(erro) {
        alert("Erro ao enviar os dados.");
        console.error(erro);
    }
}