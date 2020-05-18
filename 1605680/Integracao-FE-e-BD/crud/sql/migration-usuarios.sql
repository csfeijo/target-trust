USE EMPRESA;

# migration-usuarios.sql
CREATE TABLE USUARIOS (
	id_usuario INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    usuario VARCHAR(20) NOT NULL,
    senha VARCHAR(32) NOT NULL,
    PRIMARY KEY (id_usuario)
) ENGINE = InnoDB;
# MyISAM
# JSONDB

# md5('123') => 202cb962ac59075b964b07152d234b70
INSERT INTO USUARIOS (nome, usuario, senha) VALUES ('Cícero Feijó', 'admin', '202cb962ac59075b964b07152d234b70');


