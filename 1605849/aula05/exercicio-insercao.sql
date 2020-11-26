USE EMPRESA;

# INSERIR DOIS DPTOS
INSERT INTO DEPARTAMENTOS (sigla, nome) VALUES
	('TI', 'Tec. da Informação'),
    ('Financ', 'Depto. Financeiro');

SELECT * FROM DEPARTAMENTOS;

# FUNCIONARIOS
INSERT INTO FUNCIONARIOS (nome, genero, salario, id_departamento)
	VALUES
    ('Cícero Feijó', 'M', 1234.66, 8),
    ('Michael Jackson', 'M', 9996.52, 9);
    
DESC FUNCIONARIOS; 
ALTER TABLE FUNCIONARIOS ADD salario DECIMAL(9,2) AFTER genero;  

SELECT * FROM FUNCIONARIOS;