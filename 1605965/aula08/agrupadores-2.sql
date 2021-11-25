USE EMPRESA;

SELECT GENERO, 
       COUNT(GENERO)
	FROM FUNCIONARIOS
    GROUP BY GENERO;
    
SELECT ID_DEPARTAMENTO,
       COUNT(ID_DEPARTAMENTO)
	FROM FUNCIONARIOS
    GROUP BY ID_DEPARTAMENTO;
# PRECISAMOS MOSTRAR O TOTAL DE FUNCIONARIOS POR DEPARTAMENTO COM O NOME DO DEPTO. AO LADO
# TEMOS QUE CONTAR OS NOMES
# E PRECISAMOS AGRUPAR POR ALGUM CRITERIO
SELECT 
      D.NOME,
      F.NOME
	FROM FUNCIONARIOS AS F
    INNER JOIN DEPARTAMENTOS AS D
		ON F.ID_DEPARTAMENTO = D.ID_DEPARTAMENTO;






