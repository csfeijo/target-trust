algoritmo "ex-4-cap-8-V2"
// Fa�a um algoritmo que pergunta a idade de 5 pessoas.

var
IDADE: INTEIRO
CONT: INTEIRO
SOMA: INTEIRO
MEDIA: REAL

inicio

ENQUANTO (CONT < 5) FACA

   ESCREVAL("DIGITE A IDADE:")
   LEIA(IDADE)

   // AUTOSOMA
   SOMA <- SOMA + IDADE

   // INCREMENTACAO (� UMA OPER. ARITM. COM LOGICA)
   CONT <- CONT + 1
FIMENQUANTO

ESCREVAL("A SOMA DAS IDADES �: ", SOMA)

MEDIA <- SOMA / 5

ESCREVAL("A M�DIA DAS IDADES �: ", MEDIA)


fimalgoritmo
