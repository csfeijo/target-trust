algoritmo "semnome"
// Um funcion�rio ganha um auxilio para dependentes que � de 5% sobre
// o seu sal�rio POR DEPENDENTE.
// Implemente um algoritmo que solicite o sal�rio do funcionario
// e o n�mero de dependentes,
// depois informe qual ser� o valor do total do sal�rio acrescido
// do auxilio calculado.

// Ex.:
// Seu sal�rio � de R$ 1000.00 e voc� possui 2 dependentes.
// Seu benef�cio ser� de R$ 100.00
// Seu sal�rio com o acr�scimo do benef�cio ser� de R$ 1100.00

var
SALARIO : REAL
DEPENDENTES : INTEIRO
BENEFICIO : REAL
SALARIO_FINAL : REAL

inicio

ESCREVAL("Informe o seu salario")
LEIA(SALARIO)

ESCREVAL("Informe o numero de dependentes:")
LEIA(DEPENDENTES)

BENEFICIO <- (SALARIO * 0.05) * DEPENDENTES
SALARIO_FINAL <- SALARIO + BENEFICIO


ESCREVAL("Seu sal�rio � de R$ ", SALARIO, " e voc� possui ",DEPENDENTES, " dependentes.")
ESCREVAL("Seu benef�cio ser� de R$ ", BENEFICIO)
ESCREVAL("Seu sal�rio com o acr�scimo do benef�cio ser� de R$ ", SALARIO_FINAL)




fimalgoritmo
