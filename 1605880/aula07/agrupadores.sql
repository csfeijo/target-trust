USE EMPRESA;

SELECT COUNT(*) FROM FUNCIONARIOS;

SELECT SUM(SALARIO) AS 'TOTAL'
	FROM FUNCIONARIOS
    WHERE GENERO = 'M';
    
SELECT AVG(SALARIO) FROM FUNCIONARIOS;

SELECT MAX(SALARIO) FROM FUNCIONARIOS;

SELECT MIN(SALARIO) FROM FUNCIONARIOS;

# Usando o group by
# Sempre em conjunto com um dos agrupadores acima
SELECT genero, COUNT(genero)
	FROM FUNCIONARIOS
    GROUP BY genero;

# Exemplo de contagem de funcionarios por departamentos 
SELECT D.nome, COUNT(F.nome)
	FROM FUNCIONARIOS AS F
	INNER JOIN DEPARTAMENTOS AS D
		ON F.id_departamento = D.id_departamento
	GROUP BY D.nome;
    
select id_funcionario, count(id_funcionario) 
	from telefones
    group by id_funcionario;


    

    
    
# select * from departamentos;
# id_depto = 2 / CPD
# select * from funcionarios where id_departamento = 5;








