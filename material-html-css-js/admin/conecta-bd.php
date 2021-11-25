<?php
$usuario = 'root';
$senha = '';
$base_de_dados = 'portfolio';
$host = 'localhost';

$charset  = array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8');

try {
  $conexao = new PDO("mysql:host=$host;dbname=$base_de_dados", $usuario, $senha, $charset);
  $conexao->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
  echo 'ERROR: ' . $e->getMessage();
}

?>












