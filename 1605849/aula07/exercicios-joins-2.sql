USE EMPRESA;
/* EXERCÍCIO 1:
	LISTE EM ORDEM ALFABÉTICA O NOME DOS FUNCIONARIOS DO SEXO FEMININO
    COM SEUS RESPECTIVOS DEPARTAMENTOS */
SELECT F.NOME, F.SEXO, D.NOME
	FROM FUNCIONARIOS AS F
    INNER JOIN DEPARTAMENTOS AS D
		ON F.ID_DEPARTAMENTO =  D.ID_DEPARTAMENTO
	WHERE F.SEXO = 'F'
    ORDER BY F.NOME;
   
/* EXERCÍCIO 2:
	LISTE EM ORDEM DECRESCENTE DE SALARIO O NOME E SALARIO DOS FUNCIONARIOS QUE 
    RECEBEM MAIS QUE 4000
    JUNTAMENTE DAS SIGLAS DOS SEUS RESPECTIVOS DEPARTAMENTOS
*/ 
SELECT F.NOME, F.SALARIO, D.SIGLA
	FROM FUNCIONARIOS AS F
    INNER JOIN DEPARTAMENTOS AS D
		ON F.ID_DEPARTAMENTO = D.ID_DEPARTAMENTO
    WHERE F.SALARIO > 4000
    ORDER BY F.SALARIO DESC;
    
    
    
    


