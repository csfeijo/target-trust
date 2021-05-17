USE EMPRESA;

DELIMITER $$
CREATE PROCEDURE FILTRA_GENERO (IN GEN CHAR)
BEGIN
  SELECT nome
    FROM funcionarios 
        WHERE genero = GEN;
END $$
DELIMITER ;

# Para executar o procedimento
CALL FILTRA_GENERO('M');

