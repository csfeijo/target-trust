<?php
include('conecta-bd.php');

if ( isset($_GET['id_curso']) ) {
  $id_curso = $_GET['id_curso'];

  // realiza a exclusão do registro no banco
  $sql = $conexao->prepare("DELETE FROM cursos WHERE id_curso = $id_curso");
  $sql->execute();
}

header('location:listar-cursos.php');

?>
