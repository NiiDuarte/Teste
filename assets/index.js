function envia(event) {
    event.preventDefault();
    alert('Formulário enviado com sucesso!')
    fecharPopup();
    
}

function btn() {
    const botao = document.getElementById('botao');
    botao.style.display = 'flex';

}

function fecharPopup() {
    const botao = document.getElementById('botao');
    botao.style.display = 'none';
}

