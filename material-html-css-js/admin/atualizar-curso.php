<?php
include('conecta-bd.php');

if ( isset($_POST['id_curso']) && isset($_POST['nome']) && isset($_POST['carga_horaria']) ) {
  $id_curso = $_POST['id_curso'];
  $nome = $_POST['nome'];
  $carga_horaria = $_POST['carga_horaria'];

  // UPDATE cursos SET nome = '$nome', carga_horaria = '$carga_horaria' WHERE id_curso = $id_curso
  // Execute a atualização do registro no banco e logo apos redirecione o usuario para a listagem de cursos
  $sql = $conexao->prepare("UPDATE cursos SET nome = '$nome', carga_horaria = '$carga_horaria' WHERE id_curso = '$id_curso'");
  $sql->execute();
}

header('location:listar-cursos.php');
?>
