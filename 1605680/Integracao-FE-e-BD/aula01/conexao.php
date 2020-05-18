<?php
$usuario = 'root';
$senha = '';

$conn = new PDO('mysql:host=localhost;dbname=empresa', $usuario, $senha);

$sql = $conn->prepare('SELECT * FROM FUNCIONARIOS ORDER BY NOME');
$sql->execute();

$result = $sql->fetchAll();

// exibe a estrutura TOTAL da variavel
// var_dump($result);

foreach ($result as $r) {
  echo $r['nome'] . '<br/>';
}



?>