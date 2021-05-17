algoritmo "EX-2-CAP-7"
var
IDADE: INTEIRO

inicio

ESCREVAL("DIGITE A IDADE:")
LEIA(IDADE)

SE (IDADE >= 5) E (IDADE <= 7) ENTAO
   ESCREVAL("INFANTIL A")
SENAO
   SE (IDADE >= 8) E (IDADE <= 10) ENTAO
      ESCREVAL("INFANTIL B")
   SENAO
      SE (IDADE >= 11) E (IDADE <= 13) ENTAO
         ESCREVAL("JUVENIL A")
      SENAO
         SE (IDADE >= 14) E (IDADE <= 17) ENTAO
            ESCREVAL("JUVENIL B")
         SENAO
            ESCREVAL("ADULTO")
         FIMSE
      FIMSE
   FIMSE
FIMSE

fimalgoritmo
