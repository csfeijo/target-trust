algoritmo "EXERCICIO-EXTRA-1"
// Implemente um algorimo que peça para o usuario informar o ano de nascimento
// Calcule sua idade
// Caso ele tenha mais que 18 anos informe que ele pode tirar a habilitação
// caso contrário informe quantos anos ainda resta para poder tira-la.
var
ANO_NASC : INTEIRO
IDADE: INTEIRO
IDADE_MINIMA: INTEIRO
ANO_ATUAL: INTEIRO
TEMPO_FALTANTE: INTEIRO

inicio
ANO_ATUAL <- 2021
IDADE_MINIMA <- 18

ESCREVAL("DIGITE O ANO QUE VOCE NASCEU:")
LEIA(ANO_NASC)

IDADE <- ANO_ATUAL - ANO_NASC

SE (IDADE >= IDADE_MINIMA) ENTAO
   ESCREVAL("VOCE PODE TIRAR A HABILITAÇÃO")
SENAO
   TEMPO_FALTANTE <- IDADE_MINIMA - IDADE
   ESCREVAL("VOCE NAO PODE TIRAR A HABILITACAO, AINDA RESTAM ", TEMPO_FALTANTE, " ANOS")
FIMSE




fimalgoritmo
