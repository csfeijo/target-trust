<?php

$usuario = 'admin';
$hora = '22:15';
$data = '08/05/2020';

$link = 'recupera_senha.php?hash=' . md5($usuario . $hora . $data);

# insere no banco de dados em uma tabela sobre senhas a serem recuperadas esse hash

# acessa a URL (recupera_senha.php?hash=202cb962ac59075b964b07152d234sdfsd)

# dentro da pagina vai ter uma conexao com o banco que vai inserir em uma tabela de controle 
# que esse LINK ja foi usado uma vez


?>