<?php
include('valida-sessao.php');
include('conecta-bd.php');

$sql = $conexao->prepare("SELECT * FROM cursos ORDER BY nome");
$sql->execute();
$cursos = $sql->fetchAll();
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
    <h3>Listagem de Cursos</h3>
    <hr>
    <a href="cadastrar-curso.php" class="btn btn-default"><i class="glyphicon glyphicon-plus"></i> NOVO</a>
    <hr>

    <table class="table table-hover">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Carga Horária</th>
          <th class="text-right">Ações</th>
        </tr>
      </thead>
      <tbody>
        <!-- aqui percorremos os registros que estao dentro da variavel $cursos -->
        <?php
        foreach ($cursos as $curso) {
        ?>
        <tr>
          <td><?php echo $curso['nome']; ?></td>
          <td><?php echo $curso['carga_horaria']; ?>hr</td>
          <td class="text-right">
            <!-- Botao de Editar -->
            <a href="editar-curso.php?id_curso=<?php echo $curso['id_curso']; ?>" class="btn btn-warning btn-sm"><i class="glyphicon glyphicon-pencil"></i></a>
            <!-- Botao de Excluir -->
            <a data-toggle="modal" data-target="#modal-exclusao-<?php echo $curso['id_curso']; ?>" href="#" class="btn btn-danger btn-sm"><i class="glyphicon glyphicon-trash"></i></a>
            
            <?php include('modal.php'); ?>
          </td>
        </tr>
        <?php
        }
        ?>
      
      </tbody> 
    
    
    </table>
    <hr>
    <a href="index.php" class="btn btn-info"><i class="glyphicon glyphicon-chevron-left"></i> VOLTAR</a>


  </div>

</body>
</html>
