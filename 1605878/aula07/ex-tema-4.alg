algoritmo "ex-tema-4"
// Implemente um algoritmo que leia 5 nomes e 5 salarios
// Após a leitura de todos os dados liste na tela os registros neste formato:
// Ex.:
// Nome: Cícero Feijó - Salário R$: 3000.00
// Nome: Paulo da Silva - Salário R$: 3580.25

var
NOMES: VETOR[0..4] DE CARACTERE
SALARIOS: VETOR[0..4] DE REAL
CONT : INTEIRO

inicio

PARA CONT DE 0 ATE 4 FACA
   // ESTAMOS SALVANDO O NOME DENTRO DO VETOR
   ESCREVAL("INFORME O NOME:")
   LEIA( NOMES[CONT] )
   // APROVEITAMOS A MESMA REPETIÇÃO E POSICAO DO CONT PARA SALVAR TAMBEM
   // O SALARIO DENTRO DO VETOR DE SALARIOS
   ESCREVAL("INFORME O SALÁRIO:")
   LEIA( SALARIOS[CONT] )
   
FIMPARA

LIMPATELA

ESCREVAL("====== LISTAGEM DE FUNCIONARIOS ======")
PARA CONT DE 0 ATE 4 FACA
   ESCREVAL("NOME:", NOMES[CONT], " SALÁRIO R$: ", SALARIOS[CONT])
FIMPARA



fimalgoritmo
