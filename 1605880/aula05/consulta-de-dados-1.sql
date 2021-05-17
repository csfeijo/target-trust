USE EMPRESA;
SELECT nome, salario, dt_nascimento FROM FUNCIONARIOS;

SELECT nome,
       salario AS 'Remuneração', 
       dt_nascimento AS 'Data de Nascimento'
	FROM FUNCIONARIOS;

SELECT nome, 
       CONCAT('R$ ', salario) AS 'Remuneração'
	FROM FUNCIONARIOS;
    
# Para recuperar dados distintos
SELECT DISTINCT genero FROM FUNCIONARIOS;

# Operadores aritméticos (+,-,*,/ - sendo que podemos usar os () nas priorizaçoes)
SELECT nome,
       salario * (2 + 150)
	FROM FUNCIONARIOS;
    
    




    
    