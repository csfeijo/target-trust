USE AULA01;

# Mostra as tabelas da BASE selecionada
SHOW TABLES;

DESC FUNCIONARIOS;

CREATE TABLE FUNCIONARIOS ( 
	nome VARCHAR(50),
    salario DECIMAL(8,2)
);

DROP TABLE FUNCIONARIOS;