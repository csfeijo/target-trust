var cursos = ['HTML', 'CSS', 'JavaScript', 'SQL', 'React', 'Java'];

// exiba a lista de cursos do vetor no console do browser no seguinte formato:
// 1) HTML
// 2) CSS
// etc
// Versão Cícero
// for (var i = 0; i < cursos.length; i++) {
//   console.log(i + 1, ')', cursos[i]);
// }
// Versão Fagner
// var num = 1;
// for (var i = 0; i < cursos.length; i++) {
//   console.log(num++ + ')', cursos[i]);
// }
// Versão Manoela
// for (var i = 0; i < cursos.length; i++) {
//   console.log((i + 1) + ') ' + cursos[i]);
// }
// Outra forma: usando interpolação
for (var i = 0; i < cursos.length; i++) {
  console.log(`${i + 1}) ${cursos[i]}`);
};
