# funcoes-de-formatacao.sql

USE EMPRESA;

SELECT NOME, 
       CONCAT('R$ ', FORMAT(SALARIO, 2, 'de_DE')) AS 'Salário',
       DATE_FORMAT(DT_NASCIMENTO,'%d-%m-%Y') AS 'Data de Nascimento'
	FROM FUNCIONARIOS;