<?php
$usuario = 'root';
$senha = '';
# configura o banco para suportar UTF-8
$charset  = array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8');

try {
  $conn = new PDO('mysql:host=localhost;dbname=empresa', $usuario, $senha, $charset);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
  echo 'ERROR: ' . $e->getMessage();
}
?>