# VIEWS (VISÕES/VISUALIZAÇÕES)
# TABELAS ABSTRATAS QUE ESPELHAM DADOS VIRTUALMENTE (não fisicamente)
USE EMPRESA;

CREATE VIEW FOLHA_PAGAMENTO AS (
	SELECT NOME, SALARIO
		FROM FUNCIONARIOS
        ORDER BY NOME
);


SELECT * FROM FOLHA_PAGAMENTO;

CREATE VIEW RELATORIO_DEPTOS AS (
	SELECT F.NOME AS FUNC_NOME,
		   T.NUMERO,
		   D.NOME AS DEPTO_NOME
		   FROM FUNCIONARIOS AS F
		   INNER JOIN TELEFONES AS T
			   ON F.ID_FUNCIONARIO = T.ID_FUNCIONARIO
		   INNER JOIN DEPARTAMENTOS AS D
			   ON F.ID_DEPARTAMENTO = D.ID_DEPARTAMENTO
		ORDER BY F.NOME DESC
);

SELECT FUNC_NOME, NUMERO FROM RELATORIO_DEPTOS
	WHERE FUNC_NOME LIKE 'K%'
	ORDER BY DEPTO_NOME;



















