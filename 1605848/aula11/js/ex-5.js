var alunos = ['Bruno', 'Ana', 'Guilherme', 'Sandra', 'Isaque', 'Rodrigo', 'Luiz', 'Cícero'];

// Implemente de forma automatiza uma estrutura
// que exiba TODOS elementos do vetor 
// no console do browser UM abaixo do OUTRO
// console.log(alunos[0]);
// console.log(alunos[1]);
// console.log(alunos[2]);
// alunos.length : é um atributo que o JS fornece assim que ele detecta que a var é um vetor

// Extra: antes de listar o vetor, deixe-o ordenado em ordem alfabetica
// Dica: O JS faz isso sozinho pra voces!

// sort: ordena
alunos.sort();

// reverse: inverte o vetor na forma atual dele!!!
alunos.reverse();

for (var cont = 0; cont < alunos.length; cont++) {
  console.log(alunos[cont].toUpperCase());
}


