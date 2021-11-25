# Implemente uma consulta que retorne o nome e salarios dos funcionarios
# e o nome do seu respectivo departamento
# adicione ao lado do salario um aumento de 10%
# A consulta deve cumprir os seguintes critérios:
# devem ser listados somente os funcionarios do genero feminino
# que recebem menos de 2000 reais
# e que nasceram depois do dia 01 de janeiro de 2000
# ordenados pelo nome do funcionario

SELECT 
	F.NOME, 
    CONCAT('R$ ', FORMAT(F.SALARIO, 2, 'DE_DE')) AS SALARIO,
    CONCAT('R$', FORMAT(SALARIO + (SALARIO * 0.10),2, 'DE_DE')) AS 'SALARIO COM AUMENTO',
    D.NOME
	FROM FUNCIONARIOS AS F
    INNER JOIN DEPARTAMENTOS AS D
		ON D.ID_DEPARTAMENTO = F.ID_DEPARTAMENTO
	WHERE
		F.genero = 'F' AND
		F.salario < 2000 AND
		F.dt_nascimento BETWEEN '2000-01-01' AND current_date()
	ORDER BY F.NOME;
    