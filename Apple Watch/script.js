const imagemVisualizacao =  document.getElementById('imagem-visualizacao');
const nomeCorSelecionada = document.getElementById('nome-cor-selecionada');
const tituloProduto = document.getElementById('titulo-produto');
const opcaoImagem0 = document.getElementById('0-imagem-miniatura');
const opcaoImagem1 = document.getElementById('1-imagem-miniatura');
const opcaoImagem2 = document.getElementById('2-imagem-miniatura');

const azulInverno = {
    nome: 'Azul-inverno',
    pasta: 'imagens-azul-inverno'
};

const estelar = {
    nome: 'Estelar',
    pasta: 'imagens-estelar'
};

const meiaNoite = {
    nome: 'Meia-Noite',
    pasta: 'imagens-meia-noite'
};

const rosaClaro = {
    nome: 'Rosa-Claro',
    pasta: 'imagens-rosa-claro'
};

const verdeCipreste = {
    nome: 'Verde-cipreste',
    pasta: 'imagens-verde-cipreste'
};

const opcoesCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro];
const opcoesTamanho = ['41 mm', '45 mm'];

let corSelecionada = 1;
let tamanhoSelecionado = 1;
let imagemSelecionada = 1;

function atualizarImagemSelecionada() {
    const opcaoImagemSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id.charAt(0);
    imagemSelecionada = opcaoImagemSelecionada;
    imagemVisualizacao.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-${imagemSelecionada}.jpeg`;
}

function atualizarCorSelecionada() {
  const numeroCorSelecionada = document.querySelector('[name="opcao-cor"]:checked').id.charAt(0);
  corSelecionada = numeroCorSelecionada;
  nomeCorSelecionada.innerText = `Cor - ${opcoesCores[corSelecionada].nome}`;
  imagemVisualizacao.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-${imagemSelecionada}.jpeg`;
  opcaoImagem0.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-0.jpeg`;
  opcaoImagem1.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-1.jpeg`;
  opcaoImagem2.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-2.jpeg`;
  tituloProduto.innerText = `Pulseira loop esportiva ${opcoesCores[
    corSelecionada
  ].nome.toLowerCase()} para caixa de ${opcoesTamanho[tamanhoSelecionado]}`;
}

function atualizarTamanho() {
  const opcaoTamanhoSelecionado = document
    .querySelector('[name="opcao-tamanho"]:checked')
    .id.charAt(0);
  tamanhoSelecionado = opcaoTamanhoSelecionado;
  if (opcoesTamanho[tamanhoSelecionado] === '41 mm') {
    imagemVisualizacao.classList.add('caixa-pequena');
    tituloProduto.innerText = `Pulseira loop esportiva ${opcoesCores[
      corSelecionada
    ].nome.toLowerCase()} para caixa de ${opcoesTamanho[tamanhoSelecionado]}`;
    return;
  }
  imagemVisualizacao.classList.remove('caixa-pequena');
  tituloProduto.innerText = `Pulseira loop esportiva ${opcoesCores[
    corSelecionada
  ].nome.toLowerCase()} para caixa de ${opcoesTamanho[tamanhoSelecionado]}`;
}
