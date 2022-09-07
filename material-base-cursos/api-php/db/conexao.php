<?php
include('../env.php');

$con = new PDO("mysql:host=$host;dbname=$base_de_dados", $usuario, $senha);
$con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
?>
