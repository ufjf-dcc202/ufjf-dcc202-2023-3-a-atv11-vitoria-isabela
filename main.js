const pEntrada = document.querySelector('#entrada');
const olSaida = document.querySelector('#itens');
const btnAdicionar = document.querySelector('#adicionar');
const btnLimpar = document.querySelector('#limpar');

function criaElementoNaLista(){
    const texto  = pEntrada.textContent;
    adicionaNaLista(texto);
    atualizarItensDeLista();
    pEntrada.textContent="";
    pEntrada.focus();
  }