algoritmo "exemplo"
var
NOME: CARACTERE
ANO_NASCIMENTO: INTEIRO
ANO_ATUAL: INTEIRO
CALCULO: REAL
IDADE: INTEIRO

inicio
ANO_ATUAL <- 2021

ESCREVAL ("Ol�, iremos definir se voc� pode receber sua CNH")
ESCREVAL ("ou se falta mais alguns anos para isso.")
ESCREVAL ("Ent�o precisaremos de mais algumas informa��es para isso")

ESCREVAL ("Informe seu nome:")
LEIA (NOME)
ESCREVAL ("Informe seu ano de nascimento:")
LEIA (ANO_NASCIMENTO)
ESCREVAL ("Informe o ano atual:")
LEIA (ANO_ATUAL)

LIMPATELA


SE ( ANO_ATUAL <> 2021 ) ENTAO

   ESCREVAL ("Ano atual informado incorreto")
   
SENAO
   ESCREVAL("OK, ", NOME, " CALCULANDO....")
   IDADE <- ANO_ATUAL - ANO_NASCIMENTO
   CALCULO <- 18 - IDADE

   LIMPATELA

   SE (IDADE >= 18) ENTAO
      ESCREVAL ("Sua idade � de:", IDADE, " anos e voc� pode ter CNH")
   SENAO
      ESCREVAL ("Sua idade � de:", IDADE, " anos e voc� n�o pode ter CNH")
      ESCREVAL ("Pois ainda faltam ", CALCULO, " anos para voc� poder ter CNH")
   FIMSE
FIMSE



fimalgoritmo
