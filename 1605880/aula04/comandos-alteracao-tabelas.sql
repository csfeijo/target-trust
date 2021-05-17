USE EMPRESA;

# Podemos adicionar campos:
ALTER TABLE FUNCIONARIOS ADD dt_nascimento DATE;

# Podemos escolher a ordem onde o campo será criado:
ALTER TABLE FUNCIONARIOS ADD logradouro VARCHAR(100) NOT NULL AFTER genero;

# Podemos adicionar / alterar multiplos campos:
ALTER TABLE FUNCIONARIOS ADD cep VARCHAR(9) NOT NULL AFTER logradouro,
						 ADD complemento VARCHAR(20) AFTER cep;

# Podemos modificar o nome / tipagem de uma coluna:
ALTER TABLE FUNCIONARIOS CHANGE logradouro endereco VARCHAR(100) NOT NULL;
# O modify = change porém só troca o tipo do dado!
ALTER TABLE FUNCIONARIOS MODIFY endereco VARCHAR(120) NOT NULL;

# Para removermos campos da tabelas:
ALTER TABLE FUNCIONARIOS DROP endereco,
					     DROP complemento;

DESC FUNCIONARIOS;