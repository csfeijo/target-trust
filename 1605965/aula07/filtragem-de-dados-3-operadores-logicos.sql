# filtragem-de-dados-3-operadores-logicos.sql
USE EMPRESA;

SELECT nome, salario
	FROM FUNCIONARIOS
    WHERE nome LIKE 'A%' AND genero = 'F';
    
SELECT nome, salario, genero
	FROM FUNCIONARIOS
    WHERE nome LIKE 'Mat_eus %' OR nome LIKE 'Mateus %';
    
# Busque os registros dos funcionarios do genero feminino que recebem mais     
# que 4000 e que começam com a letra 'F'
# deve retornar 5 registros!
SELECT NOME, SALARIO
	FROM FUNCIONARIOS    
    WHERE GENERO = 'F' AND SALARIO > 4000 AND NOME LIKE 'F%';
    
    
    
    
    
