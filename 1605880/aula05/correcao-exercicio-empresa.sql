DROP DATABASE IF EXISTS EMPRESA;
CREATE DATABASE EMPRESA;
USE EMPRESA;

CREATE TABLE IF NOT EXISTS DEPARTAMENTOS (
	id_departamento INT UNSIGNED AUTO_INCREMENT,
    sigla VARCHAR(10) NOT NULL,
    nome VARCHAR(50) NOT NULL,
    PRIMARY KEY (id_departamento)
) ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS FUNCIONARIOS (
	id_funcionario INT UNSIGNED AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    dt_nascimento DATE,
    dt_admissao DATETIME DEFAULT CURRENT_TIMESTAMP,
	genero CHAR(1),
    salario DECIMAL(8,2) NOT NULL,
    id_departamento INT UNSIGNED NOT NULL,
    PRIMARY KEY (id_funcionario),
    CONSTRAINT FK_FUNCIONARIOS_DEPARTAMENTOS
		FOREIGN KEY (id_departamento)
        REFERENCES DEPARTAMENTOS(id_departamento)
) ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS TELEFONES (
	id_telefone INT UNSIGNED AUTO_INCREMENT,
    ddd VARCHAR(3) NOT NULL,
    numero VARCHAR(15) NOT NULL,
    id_funcionario INT UNSIGNED NOT NULL,
	PRIMARY KEY (id_telefone),
    CONSTRAINT FK_TELEFONES_FUNCIONARIOS
		FOREIGN KEY (id_funcionario)
        REFERENCES FUNCIONARIOS(id_funcionario)
) ENGINE=INNODB;



















