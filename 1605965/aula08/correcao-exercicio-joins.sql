USE EMPRESA;

# Implemente uma consulta que retorne o nome e salarios dos funcionarios
# e o nome do seu respectivo departamento
# adicione ao lado do salario um aumento de 10%
# A consulta deve cumprir os seguintes critérios:
# devem ser listados somente os funcionarios do genero feminino
# que recebem menos de 2000 reais
# e que nasceram depois do dia 01 de janeiro de 2000
# ordenados pelo nome do funcionario

SELECT F.nome,
       CONCAT('R$ ', FORMAT(F.salario, 2, 'DE_DE')) AS 'Salário',
       CONCAT('R$ ', FORMAT(F.salario * 1.1, 2, 'DE_DE')) AS 'Salário Ajustado',
       D.nome
	FROM FUNCIONARIOS AS F
    INNER JOIN DEPARTAMENTOS AS D
       ON F.id_departamento = D.id_departamento
	WHERE 
		F.genero = 'F' AND 
        F.salario < 2000 AND
        F.dt_nascimento > '2000-01-01' 
	ORDER BY F.nome;




