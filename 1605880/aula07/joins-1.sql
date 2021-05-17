USE EMPRESA;

SELECT id_funcionario,
       nome,
	   salario,
       id_departamento
       FROM FUNCIONARIOS;
       
SELECT id_departamento,
       nome,
	   sigla
       FROM DEPARTAMENTOS;
       
# A juncao entre as tabelas precisa ter alguem que as relacione (PK -> FK)
SELECT F.nome, F.salario, D.sigla
	FROM FUNCIONARIOS AS F, DEPARTAMENTOS AS D
    WHERE F.id_departamento = D.id_departamento;
    
# INNER JOIN
SELECT F.nome, F.salario, D.nome
	FROM FUNCIONARIOS AS F
    INNER JOIN DEPARTAMENTOS AS D
		ON F.id_departamento = D.id_departamento
	ORDER BY F.nome;
    
# Implemente uma consulta que traga os funcionarios que possuem telefones
# e seus respectivos departamentos (deverão vir 13 registros)
SELECT F.nome,
       T.numero,
       D.nome
# SEMPRE tire a prova real se os vinculos estão OK       
#       F.id_funcionario AS 'PK',
#       T.id_funcionario AS 'FK',
#       F.id_departamento AS 'FK',
#       D.id_departamento AS 'PK'
	FROM FUNCIONARIOS AS F
    INNER JOIN TELEFONES AS T
		ON F.id_funcionario = T.id_funcionario
	INNER JOIN DEPARTAMENTOS AS D
		ON F.id_departamento = D.id_departamento;

    

# Inner Join com Telefones
# Liste os funcionarios com SEUS RESPECTIVOS telefones usando INNER JOIN
SELECT F.nome, 
       T.numero
	FROM FUNCIONARIOS AS F
    INNER JOIN TELEFONES AS T
    ON F.id_funcionario = T.id_funcionario;

# LEFT JOIN (traz todos registros que "casam" e os que "ficam de fora")
SELECT F.nome, 
       T.numero
#       F.id_funcionario,
#       T.id_funcionario
	FROM FUNCIONARIOS AS F
    LEFT JOIN TELEFONES AS T
		ON F.id_funcionario = T.id_funcionario
	ORDER BY T.numero DESC;

# LEFT JOIN - e se eu inverter a ordem das tabelas
SELECT F.nome, 
       T.numero
	FROM TELEFONES AS T
    LEFT JOIN FUNCIONARIOS AS F
		ON F.id_funcionario = T.id_funcionario
	ORDER BY T.numero DESC;

# CROSS JOIN
SELECT F.nome, 
       T.numero
	FROM TELEFONES AS T
    CROSS JOIN FUNCIONARIOS AS F;










    








# INNER JOIN
SELECT F.nome, 
       CONCAT('R$ ', F.salario) AS 'Salario', 
       D.nome
	FROM FUNCIONARIOS AS F
    INNER JOIN DEPARTAMENTOS AS D
		ON F.id_departamento = D.id_departamento
	WHERE F.genero = 'M'
	ORDER BY F.nome;
    
# INNER JOIN com Telefones
    










    
       
       
       