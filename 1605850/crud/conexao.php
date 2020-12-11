<?php
$usuario = 'root';
$senha = '';

# tenta executar o código abaixo, senão cai no catch com uma excessão
try {
  # aqui efetuaremos a conexao com o bd
  $conn = new PDO('mysql:host=localhost;dbname=empresa', $usuario, $senha); 
  # aqui habilitamos o PHP a receber as mensagens de erro via excessão do banco de dados
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
  # caso as linhas de cima encontrem algum problema, o catch será executado e o erro estará armazenado dentro
  # da nossa variavel $e
  die('DEU ERRO NO BANCO! ' . $e->getMessage());
}
?>
