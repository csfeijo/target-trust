algoritmo "REPITA-VS-ENQUANTO"

var
CONT: INTEIRO

inicio
// CUIDADO!!!

// O ENQUANTO PRIMEIRO TESTA DEPOIS EXECUTA
CONT <- 1
ENQUANTO (CONT <= 5) FACA
  ESCREVAL(CONT, " .. FAZENDO...")
  
  CONT <- CONT + 1
FIMENQUANTO

// O REPITA FAZ ANTES DE TESTAR
CONT <- 100
REPITA
  ESCREVAL(CONT, " .. FAZENDO...")
  
  CONT <- CONT + 1
ATE (CONT > 5)




fimalgoritmo
