CREATE DATABASE portfolio;

USE portfolio;

# criar a tabela de cursos (faremos amanhã)
CREATE TABLE IF NOT EXISTS cursos (
	id_curso INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    carga_horaria INT(3) UNSIGNED NOT NULL
);

INSERT INTO cursos (nome, carga_horaria) VALUES ('Lógica de Programação', 20);
INSERT INTO cursos (nome, carga_horaria) VALUES ('HTML, CSS e JS', 40);
INSERT INTO cursos (nome, carga_horaria) VALUES ('Introdução ao SQL', 20);