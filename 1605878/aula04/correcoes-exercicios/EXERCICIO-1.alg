algoritmo "semnome"
// Implemente um algoritmo que pe�a para o usuario informar seu nome e
// seu salario bruto.

// Logo ap�s informe na tela os dados informados, bem como o valor do seu
// sal�rio com o desconto do imposto de 10%.

// Ex.:
// Ol� FULANO, seu sal�rio informado foi de R$ 1000.00
// Seu sal�rio com o imposto abatido ficar� em R$ 900.00

var
SALARIO : REAL
DESCONTO : REAL
SALARIO_FINAL : REAL
inicio

ESCREVAL("INFORME O SEU SALARIO:")
LEIA(SALARIO)

DESCONTO <- SALARIO * 0.1

SALARIO_FINAL <- SALARIO - DESCONTO

ESCREVAL("Seu sal�rio com o imposto abatido ficar� em R$ ", SALARIO_FINAL)



fimalgoritmo
