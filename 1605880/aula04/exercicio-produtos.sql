CREATE DATABASE IF NOT EXISTS EXERCICIO;
USE EXERCICIO;

CREATE TABLE IF NOT EXISTS PRODUTOS (
	nome VARCHAR(50),
    descricao TEXT,
    preco DECIMAL(5,2),
    peso_em_gramas INT
);

# Comando CTRL + SHIFT + ENTER (equivalente ao primeiro icone do "raio")