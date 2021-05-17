algoritmo "ex-tema-1"
// Implemente um algoritmo que leia 5 modelos de veículos
// e os armazene em um vetor (usando repeticoes)
// Depois limpe a tela
// Liste os veículos cadastrados
var
MODELOS: VETOR[0..4] DE CARACTERE
CONT: INTEIRO

inicio

ENQUANTO (CONT < 5) FACA

  ESCREVAL("INFORME O VEICULO:")
  LEIA( MODELOS[CONT] )
  
  CONT <- CONT + 1
FIMENQUANTO

LIMPATELA

ESCREVAL("==== VEICULOS CADASTRADOS ====")

CONT <- 0
ENQUANTO (CONT < 5) FACA
   ESCREVAL( MODELOS[CONT] )
   
   CONT <- CONT + 1
FIMENQUANTO






fimalgoritmo
