//PIX COPIA E COLA
const btn_copy_pix = document.getElementById("btn-copy-pix");

btn_copy_pix.addEventListener("click", copiarChavePix);

function copiarChavePix() {
    navigator.clipboard.writeText(CONFIG.chavePix)
        .then(() => {
            alert("Chave PIX copiada com sucesso!");
        })
        .catch((erro) => {
            console.error("Erro ao copiar: ", erro);
        })
}

