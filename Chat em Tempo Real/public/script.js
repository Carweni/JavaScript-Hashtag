const botaoEnviar = document.getElementById('enviar');
const caixaMensagem = document.getElementById('texto');
const chat = document.getElementById('mensagens');

const socket = io();

botaoEnviar.addEventListener('click', () =>{
    if(caixaMensagem.value !== ""){
        socket.emit('nova mensagem', caixaMensagem.value);
        caixaMensagem.value = "";
    }
})

socket.addEventListener('nova mensagem', (msg) => {
    //<li class = 'mensagem'>msg</li>
    const elementoMensagem = document.createElement('li'); 
    elementoMensagem.textContent = msg; 
    elementoMensagem.classList.add('mensagem');
    chat.appendChild(elementoMensagem); // "cola" a mensagem na div cujo id é 'mensagens'.
})


