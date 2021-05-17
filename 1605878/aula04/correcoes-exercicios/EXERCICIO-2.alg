algoritmo "semnome"
// Um funcionário ganha um auxilio para dependentes que é de 5% sobre
// o seu salário POR DEPENDENTE.
// Implemente um algoritmo que solicite o salário do funcionario
// e o número de dependentes,
// depois informe qual será o valor do total do salário acrescido
// do auxilio calculado.

// Ex.:
// Seu salário é de R$ 1000.00 e você possui 2 dependentes.
// Seu benefício será de R$ 100.00
// Seu salário com o acréscimo do benefício será de R$ 1100.00

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


ESCREVAL("Seu salário é de R$ ", SALARIO, " e você possui ",DEPENDENTES, " dependentes.")
ESCREVAL("Seu benefício será de R$ ", BENEFICIO)
ESCREVAL("Seu salário com o acréscimo do benefício será de R$ ", SALARIO_FINAL)




fimalgoritmo
