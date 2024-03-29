USE EMPRESA;

# CONTA REGISTROS
SELECT COUNT(*) FROM FUNCIONARIOS;

# SOMA VALORES
SELECT SUM(SALARIO) FROM FUNCIONARIOS WHERE GENERO = 'M';

# MEDIA DE VALORES
SELECT AVG(SALARIO) FROM FUNCIONARIOS;

# MINIMO
SELECT MIN(SALARIO) FROM FUNCIONARIOS;

# MAXIMO (só traz o resultado sobre o calculo - nao traz os outros dados do registro)
SELECT MAX(SALARIO) FROM FUNCIONARIOS;

# LIMIT
SELECT NOME, SALARIO FROM FUNCIONARIOS ORDER BY SALARIO DESC LIMIT 1;




