algoritmo "semnome"
// Implemente um algoritmo que leia duas notas de provas.
// Calcule a média entre elas.
// E no final informe se o aluno passou caso tenha atingido a
// média superior ou igual a 7,
// caso contrário informe que ele foi reprovado.

// Ex.:
// Nota1 :  6
// Nota2 : 10
// Média : 8

// Parábens você foi aprovado!
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
    ESCREVAL("PARABÉNS VOCE FOI APROVADO!")
SENAO
    ESCREVAL("VOCE FOI REPROVADO!")
FIMSE



fimalgoritmo
