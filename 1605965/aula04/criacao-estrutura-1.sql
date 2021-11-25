# Cria a base de dados só se ela NAO EXISTE
CREATE DATABASE IF NOT EXISTS EMPRESA;
USE EMPRESA;

CREATE TABLE IF NOT EXISTS FUNCIONARIOS (
    id_funcionario INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(50) NOT NULL,
    salario DECIMAL(8,2),
    dt_nascimento DATE NOT NULL
) ENGINE=INNODB;

# Apaga uma tabela
DROP TABLE FUNCIONARIOS;


# Lista as tabelas da base
SHOW TABLES;

# Descreve a estrutura de uma tabela
DESC FUNCIONARIOS;


