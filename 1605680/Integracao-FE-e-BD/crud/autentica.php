<?php
session_start();
include('includes/conexao.php');

// verifique se veio via post o usuario e a senha
// se veio escreva na tela com um echo "logado"
// senao veio redirecione o usuario para a tela de login.php novamente

if ( isset($_POST['usuario']) && isset($_POST['senha']) ) {
  $usuario = $_POST['usuario'];
  $senha = $_POST['senha'];

  // criptografamos a senha DIGITADA para comparar com a do banco
  $senha_cripto = md5($senha);

  // vamos no banco de dados verificar se TEM um usuario e uma senha como esta
  $sql = $conn->prepare("SELECT * FROM USUARIOS WHERE USUARIO = '$usuario' AND SENHA = '$senha_cripto' LIMIT 1");
  $sql->execute();
  $result = $sql->fetchAll();

  // se veio ALGUMA coisa no $result então achou algum usuario com essa combinação
  if ( sizeof($result) > 0 ) {

    $_SESSION['logado'] = true;
    $_SESSION['nome_usuario'] = $result[0]['nome'];

    header('location:index.php');
    exit;
  } else {
    // redirecionamos o usuario para a tela de login novamente mandando via GET uma variavel chamada 'erro'
    header('location:login.php?erro=true');
    exit;
  }

} else {
  header('location:login.php');
  exit;
}
?>