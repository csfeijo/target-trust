USE EMPRESA;

SELECT * FROM FUNCIONARIOS;

SELECT genero AS 'Genero do Funcionário', 
	   nome AS 'Nome Completo' FROM FUNCIONARIOS;
       
SELECT nome, 
       CONCAT('R$',salario) AS 'Salário Base'
       FROM FUNCIONARIOS; 
       
SELECT DISTINCT(genero) FROM FUNCIONARIOS;


SELECT nome, salario, salario * 0.1 FROM FUNCIONARIOS;


SELECT nome, 
       salario * 0.1 AS '10%'
       FROM FUNCIONARIOS;
       
SELECT nome, 
       (salario + 1000) / 2
       FROM FUNCIONARIOS;       









       
       