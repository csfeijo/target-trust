algoritmo "ex-extra-1"

var
NOME: CARACTERE
SALARIO: REAL
SALARIO_COM_DESCONTO: REAL

inicio

ESCREVAL("INFORME O NOME:")
LEIA(NOME)

ESCREVAL("INFORME O SAL�RIO:")
LEIA(SALARIO)

SALARIO_COM_DESCONTO <- SALARIO - (SALARIO * 0.1)

ESCREVAL("Ol� ", NOME, " seu sal�rio informado foi de R$ ", SALARIO)
ESCREVAL("Seu sal�rio com o imposto abatido ficar� em R$ ", SALARIO_COM_DESCONTO)


fimalgoritmo
