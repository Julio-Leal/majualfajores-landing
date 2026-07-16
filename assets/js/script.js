//PIX COPIA E COLA
const btn_copy_pix = document.getElementById("btn-copy-pix");

btn_copy_pix.addEventListener("click", copiarChavePix);

// 🚩🚩🚩🚩🚩 OLD 🚩🚩🚩🚩🚩
// function copiarChavePix() {
//     navigator.clipboard.writeText(CONFIG.chavePix)
//         .then(() => {
//             alert("Chave PIX copiada com sucesso!");
//         })
//         .catch((erro) => {
//             console.error("Erro ao copiar: ", erro);
//         })
// }
// 🚩🚩🚩🚩🚩 OLD 🚩🚩🚩🚩🚩

async function copiarChavePix() {
    await navigator.clipboard.writeText(CONFIG.chavePix);

    Swal.fire({
        icon: 'success',
        title: 'Chave PIX copiada!',
        text: 'Agora é só colar no aplicativo do seu banco.',
        confirmButtonText: 'OK',
        confirmButtonColor: '#8B5E3C',
        background: '#2b1d16',
        color: '#fff'
    });
}



