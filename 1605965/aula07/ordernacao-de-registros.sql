USE EMPRESA;

SELECT * 
	FROM DEPARTAMENTOS
    ORDER BY nome DESC;
# a ordenação do order by por padrão é crescente / ascendente (ASC)
# para ordernar em ordem decrescente usamos o (DESC)

SELECT nome, salario, id_funcionario
	FROM FUNCIONARIOS
    ORDER BY salario DESC, nome ASC;

SELECT NOME, SALARIO, GENERO
	FROM FUNCIONARIOS
    WHERE GENERO = 'M' AND NOME LIKE 'F%'
    ORDER BY SALARIO DESC;
    
    
    
    
    








    
