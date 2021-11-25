SELECT D.nome, COUNT(F.nome) as TOTAL
	FROM FUNCIONARIOS AS F
	INNER JOIN DEPARTAMENTOS AS D
		ON F.id_departamento = D.id_departamento
	GROUP BY D.nome
    order by TOTAL DESC;
