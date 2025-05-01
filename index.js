const botao = document.getElementById('abrir-form');
const formulario = document.getElementById('form-container');

botao.addEventListener('click', () => {
    formulario.classList.toggle('escondido');
});