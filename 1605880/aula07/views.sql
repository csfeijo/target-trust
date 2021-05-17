USE EMPRESA;

CREATE VIEW FOLHA_PAGAMENTO AS
	SELECT nome, salario
		FROM FUNCIONARIOS
        ORDER BY nome;
        
SELECT * FROM FOLHA_PAGAMENTO;

CREATE VIEW TOTAL_FUNCIONARIOS_DEPTOS AS
	SELECT D.nome, COUNT(F.nome)
		FROM FUNCIONARIOS AS F
			INNER JOIN DEPARTAMENTOS AS D
				ON F.id_departamento = D.id_departamento
			GROUP BY D.nome;

SELECT * FROM TOTAL_FUNCIONARIOS_DEPTOS
	WHERE nome LIKE 'D%';

# Derrubar / apagar uma VIEW (os dados originais não serão afetados)
DROP VIEW FOLHA_PAGAMENTO;

# Conseguimos visualizar o que é table e o que é view
SHOW FULL TABLES;
