// Comando para não precisar reiniciar manualmente o servidor a cada modificação
// e ainda ver alterações: 'node --watch ./servidor.js'

const http = require('http');
const express = require('express');
const aplicacao = express();

const servidorHttp = http.createServer(aplicacao);
const io = require('socket.io')(servidorHttp);

// function name(){} === const name = () => {}
io.addListener('connection', (socket) =>{
    console.log('um usuario conectou');
    socket.addListener('nova mensagem', (msg) => {
        io.emit('nova mensagem', msg);
    })
})

aplicacao.use(express.static('public'));

servidorHttp.listen(1000);
// Para colocar na sua rede, servidorHttp.listen(1000, 'ip');
// Para encontrar o IP, entrar no CMD e utilizar o comando 'ipconfig'.
