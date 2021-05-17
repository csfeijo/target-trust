algoritmo "ex-extra-1"

var
NOME: CARACTERE
SALARIO: REAL
SALARIO_COM_DESCONTO: REAL

inicio

ESCREVAL("INFORME O NOME:")
LEIA(NOME)

ESCREVAL("INFORME O SALÁRIO:")
LEIA(SALARIO)

SALARIO_COM_DESCONTO <- SALARIO - (SALARIO * 0.1)

ESCREVAL("Olá ", NOME, " seu salário informado foi de R$ ", SALARIO)
ESCREVAL("Seu salário com o imposto abatido ficará em R$ ", SALARIO_COM_DESCONTO)


fimalgoritmo
