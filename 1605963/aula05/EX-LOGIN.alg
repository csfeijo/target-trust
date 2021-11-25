algoritmo "EX-LOGIN"
// Implemente um algoritmo que pede o login do usuario para mostrar o sistema
// usuario deve ser admin e a senha deve ser 123
// enquanto o usuario nao acertar os dados fique solicitando novamente
// quando tiver conseguido entrar com os dados corretos limpe a tela
// e mostre a mensagem "Bem vindo ao sistema!"
var
USUARIO: CARACTER
SENHA: CARACTER

USUARIO_VALIDO: CARACTER
SENHA_VALIDA: CARACTER

inicio
// INICIALIZACAO DAS VARIAVEIS DE CONTROLE
USUARIO_VALIDO <- "admin"
SENHA_VALIDA <- "1234ABC"


REPITA

   ESCREVAL("DIGITE O USUARIO:")
   LEIA(USUARIO)

   ESCREVAL("DIGITE A SENHA:")
   LEIA(SENHA)
   
   LIMPATELA
   
ATE (USUARIO = USUARIO_VALIDO) E (SENHA = SENHA_VALIDA)

LIMPATELA

ESCREVAL("====================================================================")
ESCREVAL("=                      Bem vindo ao sistema!                       =")
ESCREVAL("====================================================================")


fimalgoritmo
