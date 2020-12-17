<?php
session_start();

if (isset($_POST['usuario']) && isset($_POST['senha'])) {
  $usuario = $_POST['usuario'];
  $senha = $_POST['senha'];

  if ($usuario == 'admin' && $senha == '123') {
    
    $_SESSION['logado'] = 'sim';
    $_SESSION['nome_usuario'] = 'Feijó';

    header('location:index.php');

  } else {
    header('location:login.php');
  }
}

?>
