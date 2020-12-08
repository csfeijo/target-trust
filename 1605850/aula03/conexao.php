<?php
$usuario = 'root';
$senha = '';

# aqui efetuaremos a conexao com o bd
$conn = new PDO('mysql:host=localhost;dbname=empresa', $usuario, $senha); 
?>
