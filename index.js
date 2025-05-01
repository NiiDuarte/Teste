const botao = document.getElementById('');
const formulario = document.getElementById('form-container');

botao.addEventListener('click', () => {
    formulario.classList.toggle('escondido');
});