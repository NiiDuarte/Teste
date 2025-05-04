
/*esses scripts abaixo são referentes ao carousel*/
const slides = document.querySelector('.slides');
const slidesCount = document.querySelectorAll('.slide').length;
let index = 0;

document.querySelector('.next').addEventListener('click', () => {
    index = (index + 1) % slidesCount;
    slides.style.transform = `translateX(-${index * 100}%)`;
})

document.querySelector('.prev').addEventListener('click', () => {
    index = (index - 1 + slidesCount) % slidesCount;
    slides.style.transform = `translateX(-${index * 100}%)`;
})

setInterval(() => {
    index = (index + 1) % slidesCount;
    slides.style.transform = `translateX(-${index * 100}%)`;
}, 5000);

/* esses scripts abaixo são referentes ao processo de compra do serviço*/
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

