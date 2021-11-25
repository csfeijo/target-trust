USE EMPRESA;

SELECT * FROM DEPARTAMENTOS;

# ATUALIZA UM CONJUNTO DE INFORMAÇÕES
UPDATE DEPARTAMENTOS 
	SET SIGLA = 'Info',
        NOME = 'Tec. Informação'
		WHERE id_departamento = 2;
        

        
        
        
        