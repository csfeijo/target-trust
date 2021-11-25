USE EMPRESA;

CREATE TABLE IF NOT EXISTS FUNCIONARIOS (
	id_funcionario INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(45) NOT NULL,
    dt_nascimento DATE,
    dt_admissao DATETIME DEFAULT CURRENT_TIMESTAMP,
    genero CHAR(1),
    salario DECIMAL(8,2) NOT NULL,
    id_departamento INT UNSIGNED,
    # agora transformamos o id_departamento em uma chave estrangeira
    CONSTRAINT FK_FUNC_DEPTO
		FOREIGN KEY (id_departamento)
        REFERENCES DEPARTAMENTOS (id_departamento)
) ENGINE=INNODB;


