USE EMPRESA;

SELECT 
	nome,
    FORMAT(salario, 2, 'de_DE') AS 'Salario',
    DATE_FORMAT(dt_nascimento, '%d/%m/%Y') AS 'Data de Nascimento'
    FROM FUNCIONARIOS
		WHERE genero = 'F' AND (nome LIKE 'A%' OR nome LIKE 'B%')
              AND salario BETWEEN 2300.50 AND 3000
			ORDER BY nome;