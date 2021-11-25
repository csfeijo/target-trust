function teste() {
  console.log('testando...');
}

// dentro dos () passamos 2 argumentos
// a funcao que sera executada e o tempo em ms - milisegundos
// setTimeout: ele executa APENAS uma vez o conteudo de uma funcao
setTimeout(teste, 2000);

// uma outra forma mais direta de fazer a mesma coisa seria
// usando um conceito chamado funcoes anonimas
// setTimeout(function () {
//   console.log('funcao anonima...');
// }, 3000);

function teste2() {
  console.log('testando 2...');
}
// infinitamente executando uma funcao ate que a pagina seja abandonada
// ou atualizada
setInterval(teste2, 1000);






