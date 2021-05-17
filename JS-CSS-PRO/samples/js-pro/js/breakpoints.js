function calculaMedia(notas) {
  var soma = 0;
  var media = 0;

  for (var i = 0; i < notas.length; i++) {
    soma += notas[i];
    debugger;
  }

  media = soma / notas.length;

  return media;
}
