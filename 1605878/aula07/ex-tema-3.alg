algoritmo "ex-tema-3"
// Implemente um algoritmo que leia 10 numeros inteiros do teclado
// armazene em um vetor
// limpe a tela
// Liste apenas os n�meros pares que foram lidos

// Caso n�o tenha sido lido NENHUM numero par informe com a mensagem:
// "N�O HOUVE NUMERO PAR CADASTRADO!"
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

CONT <- 0
REPITA

   SE ( NUMEROS[CONT] MOD 2 = 0) ENTAO
      ESCREVAL( NUMEROS[CONT] )
      
      QTD_PARES <- QTD_PARES + 1
   FIMSE

   CONT <- CONT + 1
ATE (CONT = 10)

// DEPOIS DE TER FEITO TODA A LEITURA E ESCRITA
// VERIFICAMOS SE O QTD_PARES � IGUAL ZERO, SIGNIFICA QUE N�O
// FOI ENCONTRADO NENHUM NUMERO PAR

SE (QTD_PARES = 0) ENTAO
   ESCREVAL("N�O HOUVE NUMERO PAR CADASTRADO!")
FIMSE



fimalgoritmo
