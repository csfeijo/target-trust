<?php
session_start();

if (isset($_POST['usuario']) && isset($_POST['senha'])) {
  $usuario = $_POST['usuario'];
  $senha = $_POST['senha'];

  if ($usuario == 'admin' && $senha == 'qwepoi123') {
    $_SESSION['logado'] = true;

    header('location:index.php');
    exit;
  }

} 
header('location:login.php?msg=erro');
?>
