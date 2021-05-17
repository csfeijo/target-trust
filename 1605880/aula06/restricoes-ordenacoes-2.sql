USE EMPRESA;

SELECT nome, salario 
	FROM FUNCIONARIOS
    WHERE genero IN ('M');
    
SELECT * FROM FUNCIONARIOS WHERE dt_nascimento IS NOT NULL;

SELECT nome, salario, genero
	FROM FUNCIONARIOS
    WHERE genero = 'F' AND salario > 5000 AND nome LIKE 'A%'
    ORDER BY nome;
    
SELECT nome, dt_admissao, genero
	FROM FUNCIONARIOS
    WHERE genero = 'F' OR dt_admissao > '2015-01-01';

# Calculando a idade dos funcionarios (pode variar a sintaxe em outros Bancos!!)
SELECT 
	nome,
    dt_nascimento,
	YEAR(FROM_DAYS(TO_DAYS(NOW())-TO_DAYS(dt_nascimento))) AS idade    
	FROM FUNCIONARIOS;
    
SELECT nome, dt_nascimento,
       TIMESTAMPDIFF(YEAR, dt_nascimento, NOW()) AS idade
	FROM FUNCIONARIOS
    WHERE TIMESTAMPDIFF(YEAR, dt_nascimento, NOW()) > 50 AND genero = 'F';








