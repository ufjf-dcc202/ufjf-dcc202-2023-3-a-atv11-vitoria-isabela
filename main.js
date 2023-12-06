const pEntrada = document.querySelector('#entrada');
const olSaida = document.querySelector('#itens');
const btnAdicionar = document.querySelector('#adicionar');
const btnLimpar = document.querySelector('#limpar');

btnLimpar.addEventListener('click', limparElementosDaLista);
btnAdicionar.addEventListener('click', criaElementoNaLista);

atualizarItensDeLista();

function criaElementoNaLista(){
  const texto  = pEntrada.textContent;
  adicionaNaLista(texto);
  atualizarItensDeLista();
  pEntrada.textContent="";
  pEntrada.focus();
}

function limparElementosDaLista(){
  limpaLista();
  atualizarItensDeLista();
}