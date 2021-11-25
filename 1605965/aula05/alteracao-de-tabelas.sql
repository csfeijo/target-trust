USE EMPRESA;

# adiciona uma coluna nova na tabela
ALTER TABLE TELEFONES ADD IF NOT EXISTS operadora VARCHAR(20) NOT NULL;

# adicionar mais de uma coluna na tabela
ALTER TABLE TELEFONES ADD IF NOT EXISTS tipo VARCHAR(20),
                      ADD IF NOT EXISTS principal BOOLEAN DEFAULT 0;

# informa a ordem onde deve ser inserido o novo atributo
ALTER TABLE TELEFONES ADD dt_cadastro DATE AFTER numero;

# alterar a definicao de uma coluna da tabela
ALTER TABLE TELEFONES CHANGE tipo categoria VARCHAR(30) NOT NULL;

# altera apenas a definicao da coluna, nao o nome
ALTER TABLE TELEFONES MODIFY categoria VARCHAR(25);

# remove uma coluna da tabela
ALTER TABLE TELEFONES DROP categoria;


DESC TELEFONES;