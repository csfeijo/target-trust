USE EMPRESA;

# Inserção de dados
INSERT INTO DEPARTAMENTOS (sigla, nome) VALUES ('RH', 'Recursos Humanos');
# Inserção multipla
INSERT INTO DEPARTAMENTOS (sigla, nome) VALUES 
	('TI', 'Tecnologia da Informação'),
    ('DP', 'Departamento Pessoal'),
    ('CONTAB', 'Contabilidade');

# Atualização de registros
UPDATE DEPARTAMENTOS SET sigla = 'CONT' WHERE sigla = 'CONTAB';
	
UPDATE DEPARTAMENTOS SET sigla = 'FINANC', nome = 'Financeiro' WHERE id_departamento = 2;

# Exclusão dos registros
DELETE FROM DEPARTAMENTOS WHERE id_departamento = 5;
DELETE FROM DEPARTAMENTOS;


INSERT INTO DEPARTAMENTOS (sigla, nome) VALUES ('EST', 'Depto. Estoque');

# Inserindo dados em uma tabela mais complexa
INSERT INTO FUNCIONARIOS 
	(nome, salario, id_departamento) 
    VALUES
    ('Cícero Feijó', '3320.25', '7');

INSERT INTO FUNCIONARIOS
	(nome, dt_nascimento, genero, salario, id_departamento)
    VALUES
    ('Neymar Jr.', '1981-09-22', 'M', '2555.63', '7');

# Seleção de dados
SELECT * FROM DEPARTAMENTOS;
SELECT * FROM FUNCIONARIOS;

