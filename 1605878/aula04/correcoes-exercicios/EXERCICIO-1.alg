algoritmo "semnome"
// Implemente um algoritmo que peça para o usuario informar seu nome e
// seu salario bruto.

// Logo após informe na tela os dados informados, bem como o valor do seu
// salário com o desconto do imposto de 10%.

// Ex.:
// Olá FULANO, seu salário informado foi de R$ 1000.00
// Seu salário com o imposto abatido ficará em R$ 900.00

var
SALARIO : REAL
DESCONTO : REAL
SALARIO_FINAL : REAL
inicio

ESCREVAL("INFORME O SEU SALARIO:")
LEIA(SALARIO)

DESCONTO <- SALARIO * 0.1

SALARIO_FINAL <- SALARIO - DESCONTO

ESCREVAL("Seu salário com o imposto abatido ficará em R$ ", SALARIO_FINAL)



fimalgoritmo
