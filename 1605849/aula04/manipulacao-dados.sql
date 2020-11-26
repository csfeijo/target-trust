USE EMPRESA;
# insercao
INSERT INTO DEPARTAMENTOS (sigla, nome) VALUES ('RH', 'Recursos Humanos');
INSERT INTO DEPARTAMENTOS (nome, sigla) VALUES ('Contabilidade', 'CONT');

# atualizacao
UPDATE DEPARTAMENTOS
	SET sigla = 'CPD';
    
UPDATE DEPARTAMENTOS
	SET sigla = 'RH'
    WHERE id_departamento = 6;
    
# excluir
DELETE FROM DEPARTAMENTOS
	WHERE id_departamento = 5;
    

# PARA MOSTRAR OS DADOS DE UMA TABELA
SELECT * FROM DEPARTAMENTOS;