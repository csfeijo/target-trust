USE EMPRESA;

SELECT NOME, 
       SALARIO, 
       DATE_FORMAT(DT_NASCIMENTO, "%d/%m/%Y") AS 'Data Nascimento', 
       SEXO
	FROM FUNCIONARIOS
    WHERE SEXO = 'F'
		AND (NOME LIKE 'A%' OR NOME LIKE 'B%')
        AND SALARIO BETWEEN 2300.50 AND 3000
	ORDER BY NOME;