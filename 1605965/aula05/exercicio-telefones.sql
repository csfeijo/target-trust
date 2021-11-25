USE EMPRESA;

CREATE TABLE IF NOT EXISTS TELEFONES (
	id_telefone INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    ddd VARCHAR(3) NOT NULL,
    numero VARCHAR(15) NOT NULL,
    id_funcionario INT UNSIGNED,
    CONSTRAINT FK_TELEFONES_FUNCIONARIOS
		FOREIGN KEY (id_funcionario)
        REFERENCES FUNCIONARIOS (id_funcionario)
) ENGINE=INNODB;