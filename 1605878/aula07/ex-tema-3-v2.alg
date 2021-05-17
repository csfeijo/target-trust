algoritmo "ex-tema-3"
// Implemente um algoritmo que leia 10 numeros inteiros do teclado
// armazene em um vetor
// limpe a tela
// Liste apenas os números pares que foram lidos

// Caso não tenha sido lido NENHUM numero par informe com a mensagem:
// "NÃO HOUVE NUMERO PAR CADASTRADO!"
var
NUMEROS: VETOR[0..9] DE INTEIRO
CONT: INTEIRO
QTD_PARES: INTEIRO

inicio

REPITA
   ESCREVAL("INFORME UM NUMERO INTEIRO:")
   LEIA( NUMEROS[CONT] )

   CONT <- CONT + 1
ATE (CONT = 10)

LIMPATELA



PARA CONT DE 0 ATE 9 FACA

   SE ( NUMEROS[CONT] MOD 2 = 0) ENTAO
      ESCREVAL( NUMEROS[CONT] )
      
      QTD_PARES <- QTD_PARES + 1
   FIMSE
   
FIMPARA

// DEPOIS DE TER FEITO TODA A LEITURA E ESCRITA
// VERIFICAMOS SE O QTD_PARES É IGUAL ZERO, SIGNIFICA QUE NÃO
// FOI ENCONTRADO NENHUM NUMERO PAR

SE (QTD_PARES = 0) ENTAO
   ESCREVAL("NÃO HOUVE NUMERO PAR CADASTRADO!")
FIMSE



fimalgoritmo
