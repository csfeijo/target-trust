algoritmo "semnome"
// Implemente um algoritmo que leia duas notas de provas.
// Calcule a m�dia entre elas.
// E no final informe se o aluno passou caso tenha atingido a
// m�dia superior ou igual a 7,
// caso contr�rio informe que ele foi reprovado.

// Ex.:
// Nota1 :  6
// Nota2 : 10
// M�dia : 8

// Par�bens voc� foi aprovado!
var
NOTA1 : REAL
NOTA2: REAL
MEDIA: REAL
inicio

ESCREVAL("DIGITE A NOTA 1")
LEIA(NOTA1)

ESCREVAL("DIGITE A NOTA 2")
LEIA(NOTA2)

MEDIA <- (NOTA1 + NOTA2) / 2

SE (MEDIA >= 7) ENTAO
    ESCREVAL("PARAB�NS VOCE FOI APROVADO!")
SENAO
    ESCREVAL("VOCE FOI REPROVADO!")
FIMSE



fimalgoritmo
