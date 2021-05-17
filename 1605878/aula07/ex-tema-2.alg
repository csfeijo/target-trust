algoritmo "ex-tema-2"
// Implemente um algoritmo que leia 3 cidades
// limpe a tela
// e liste as 3 cidades na ordem inversa em que foram cadastradas
var
CIDADES: VETOR[0..2] DE CARACTERE
CONT: INTEIRO

inicio

PARA CONT DE 0 ATE 2 FACA
   ESCREVAL("INFORME A CIDADE")
   LEIA(CIDADES[CONT])
FIMPARA

LIMPATELA

// PASSO -1 : DECREMENTA UMA UNIDADE NO CONTADOR
PARA CONT DE 2 ATE 0 PASSO -1 FACA
   ESCREVAL(CIDADES[CONT])
FIMPARA


fimalgoritmo
