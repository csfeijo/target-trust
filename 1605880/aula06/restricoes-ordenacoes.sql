USE EMPRESA;

SELECT * FROM FUNCIONARIOS WHERE GENERO = 'M';

SELECT * FROM FUNCIONARIOS WHERE SALARIO >= 5000;

SELECT NOME FROM FUNCIONARIOS WHERE GENERO <> 'M';

SELECT * FROM FUNCIONARIOS WHERE NOME = 'DANIEL PETRY';

SELECT * FROM FUNCIONARIOS WHERE SALARIO >= 3000 LIMIT 15;

SELECT * FROM FUNCIONARIOS 
	WHERE GENERO = 'M'
	ORDER BY SALARIO DESC
    LIMIT 10;
    
# Realize uma consulta que traga os funcionarios do genero feminino
# mostrando apenas o nome, salario e dt_nascimento 
# onde os salarios sao maiores ou iguais a 4000
# ordernado em ordem decrescente de salario e limitando em 5 registros
SELECT nome,
       salario, 
       dt_nascimento
	FROM FUNCIONARIOS
		WHERE GENERO = 'F' AND salario >= 4000
        ORDER BY SALARIO DESC
        LIMIT 5;

SELECT nome, salario, genero FROM FUNCIONARIOS ORDER BY nome DESC;

# Filtragens mais complexas
# 0 % é conhecido como caractere "coringa" 
SELECT nome, salario
	FROM FUNCIONARIOS
    WHERE nome LIKE '%Ana%';
    
SELECT nome, salario
	FROM FUNCIONARIOS
    WHERE nome LIKE '__A%';

SELECT nome, salario
	FROM FUNCIONARIOS
		WHERE nome LIKE 'HEL%';
        
SELECT nome, salario, dt_nascimento
	FROM FUNCIONARIOS
		WHERE salario BETWEEN 4000 AND 5000;
        
SELECT nome, salario, dt_nascimento
	FROM FUNCIONARIOS
		WHERE dt_nascimento BETWEEN '1978-01-01' AND '1981-12-31';
        
# date_format : aplica uma mascara sobre a data
# year, month, day: soa funcoes que extraem as informacoes de um campo de data
# format : recebe um numero, seguido do argumento de qtd. de decimais e apos a localização
SELECT nome, 
	   CONCAT('R$ ', FORMAT(salario, 2, 'de_DE') ) AS 'Salário', 
       DATE_FORMAT(dt_nascimento, "%d-%m-%Y") AS 'Data de Nascimento',
       DAY(dt_nascimento) AS 'Dia',
       MONTH(dt_nascimento) AS 'Mês',
       YEAR(dt_nascimento) AS 'Ano'       
	FROM FUNCIONARIOS;        

    









    
    









