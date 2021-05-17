DROP DATABASE IF EXISTS EMPRESA;
CREATE DATABASE IF NOT EXISTS EMPRESA;
USE EMPRESA;

# Crie a estrutura de tabela para DEPARTAMENTOS conforme o diagrama
CREATE TABLE IF NOT EXISTS DEPARTAMENTOS (
	id_departamento INT UNSIGNED AUTO_INCREMENT,
    sigla VARCHAR(10) NOT NULL,
    nome VARCHAR(50) NOT NULL,
    PRIMARY KEY (id_departamento)
) ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS FUNCIONARIOS (
	# TODA chave primaria gerida pelo BD precisa ser INT / AUTO_INCREMENT
    # a configuração AUTO_INCREMENT só serve para PK (chaves primarias)
	id_funcionario INT UNSIGNED AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    genero CHAR(1),
    # current_timestamp: é a hora do servidor onde se encontra o BD
    dt_admissao DATETIME DEFAULT CURRENT_TIMESTAMP,
    id_departamento INT UNSIGNED NOT NULL,
    PRIMARY KEY (id_funcionario),
    CONSTRAINT FK_FUNCIONARIOS_DEPARTAMENTOS
		FOREIGN KEY (id_departamento)
        REFERENCES DEPARTAMENTOS(id_departamento)
) ENGINE=INNODB;

# só pra revisar
# DESC FUNCIONARIOS;
# DESC DEPARTAMENTOS;
# SHOW TABLES;




