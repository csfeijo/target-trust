# Realize uma consulta que liste os funcionarios (nome, salario) apenas
# E apresente ao lado do salario, qual seria o valor da remuneração
# se aplicassemos um bonus de 10% - apresente esta coluna com o nome de "Salario com Bonus"

# Ex.:
# nome         salario Salario com Bonus
# Daniel Petry 5000.00 5500.00
USE EMPRESA;

SELECT nome, 
       salario, 
       salario * 1.1 AS 'Salário com Bonus'
	FROM FUNCIONARIOS;
