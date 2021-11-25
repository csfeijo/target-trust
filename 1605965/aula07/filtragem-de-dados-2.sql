USE EMPRESA;

SELECT nome, salario
	FROM FUNCIONARIOS
    WHERE salario > '5500';
    
SELECT nome, genero
	FROM FUNCIONARIOS
    WHERE nome LIKE '%Ana%';
    
SELECT nome, genero
	FROM FUNCIONARIOS
		WHERE nome LIKE 'l_i_a %';
# lui_ 
# luis
# luiz

SELECT nome, dt_nascimento
	FROM FUNCIONARIOS
    WHERE dt_nascimento LIKE '%-11-18';
    
SELECT nome, dt_nascimento
	FROM FUNCIONARIOS
    WHERE nome LIKE 'Daniela%';
    
SELECT nome, salario
	FROM FUNCIONARIOS
    WHERE salario IS NULL;
    
SELECT nome, salario
	FROM FUNCIONARIOS
    WHERE salario BETWEEN 4120.20 AND 4389.25;
    
SELECT nome, salario, genero
	FROM FUNCIONARIOS
    WHERE dt_nascimento BETWEEN '1981-01-01' AND '1990-12-31';
    
    
    
    




        
    