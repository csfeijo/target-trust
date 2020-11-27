USE EMPRESA;

SELECT FUNCIONARIOS.NOME, FUNCIONARIOS.SEXO 
	FROM FUNCIONARIOS;
    
SELECT F.NOME, F.SEXO
	FROM FUNCIONARIOS AS F
    WHERE F.SEXO = 'F';
    
SELECT F.NOME, F.ID_DEPARTAMENTO, D.NOME, D.SIGLA
	FROM FUNCIONARIOS AS F, DEPARTAMENTOS AS D
    WHERE F.ID_DEPARTAMENTO = D.ID_DEPARTAMENTO;
    
SELECT F.NOME, F.ID_DEPARTAMENTO, D.NOME, D.SIGLA
	FROM FUNCIONARIOS AS F
    INNER JOIN DEPARTAMENTOS AS D
		ON F.ID_DEPARTAMENTO = D.ID_DEPARTAMENTO;
    
    
    