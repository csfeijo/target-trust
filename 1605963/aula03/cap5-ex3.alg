algoritmo "CAP5-EX3"

var
QTD_KM_LITRO: REAL
TOTAL_LITROS: INTEIRO
TOTAL_KM: REAL

inicio

TOTAL_LITROS <- 55

ESCREVAL("QUANTOS KM SEU CARRO FAZ POR LITRO?")
LEIA(QTD_KM_LITRO)

TOTAL_KM <- TOTAL_LITROS * QTD_KM_LITRO

ESCREVAL("SEU CARRO PERCORRE ", TOTAL_KM, "KM COM ", TOTAL_LITROS, " LITROS")



fimalgoritmo
