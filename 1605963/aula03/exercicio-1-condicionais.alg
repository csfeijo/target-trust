algoritmo "EXERCICIO-1-CONDICIONAIS"
// 1) Implemente um algoritmo que leia duas notas
// e calcule a media entre elas
// Caso a media seja maior ou igual a 7 informe que o
// aluno foi aprovado, caso contrario que ele foi reprovado.
var

NOTA1: REAL
NOTA2: REAL
MEDIA: REAL

inicio

ESCREVAL("DIGITE A NOTA 1")
LEIA(NOTA1)

ESCREVAL("DIGITE A NOTA 2")
LEIA(NOTA2)

MEDIA <- (NOTA1 + NOTA2) / 2

SE (MEDIA >= 7) ENTAO
   ESCREVAL("VOCE FOI APROVADO!")
SENAO
   ESCREVAL("VOCE FOI REPROVADO!")
FIMSE



fimalgoritmo
