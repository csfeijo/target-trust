<?php
include('valida-sessao.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Admin</title>
  <link rel="stylesheet" href="css/bootstrap.css">
</head>
<body>
  <?php include('menu.php'); ?>
  
  <div class="container">
    <h3>Cadastrar Curso</h3>  
    <hr>

    <form action="inserir-curso.php" method="POST" class="form-inline">
      <input size="50" type="text" name="nome" placeholder="nome do curso" required class="form-control" maxlength="50">

      <input type="number" name="carga_horaria" placeholder="carga horária" required class="form-control" maxlength="3">

      <button type="submit" class="btn btn-success"><i class="glyphicon glyphicon-floppy-disk"></i> SALVAR</button>

    </form>

    <hr>
    <a href="listar-cursos.php" class="btn btn-info"><i class="glyphicon glyphicon-chevron-left"></i> VOLTAR</a>   

  </div>

</body>
</html>
