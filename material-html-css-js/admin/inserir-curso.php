<?php
include('valida-sessao.php');
include('conecta-bd.php');

// primeiro validamos se as variaveis esperadas foram enviadas
// usamos o comando "isset" que testa se uma variavel foi recebida
if ( isset( $_POST['nome'] ) && isset( $_POST['carga_horaria'] )  ) {

  // se tudo ocorreu bem podemos seguir com a inserção do nosso novo registro
  $nome = $_POST['nome'];
  $carga_horaria = $_POST['carga_horaria'];

  // chamadas para o banco de dados
  $sql = $conexao->prepare("INSERT INTO cursos (nome, carga_horaria) VALUES ('$nome', '$carga_horaria')");
  $sql->execute();
}

// agora iremos redirecionar o usuario para a tela de listagem
// NAO SE PREOCUPE EM "DECORAR" ISSO!!
header('location:listar-cursos.php');

?>
