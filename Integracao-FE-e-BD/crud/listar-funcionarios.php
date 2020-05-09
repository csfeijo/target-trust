<?php
include('valida-sessao.php');
include('includes/conexao.php');

$sql = $conn->prepare('SELECT * FROM FUNCIONARIOS ORDER BY NOME');
$sql->execute();
$result = $sql->fetchAll();

?>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CRUD</title>
  <link rel="stylesheet" href="css/bootstrap.min.css">
</head>
<body>

<?php
include('menu.php');
?>

<div class="container">
  <h3>Listagem de funcionários</h3>
  <hr/>
  <a href="form-funcionarios.php" class="btn btn-primary"><i class="glyphicon glyphicon-plus"></i> NOVO</a>
  <hr/>

  <table class="table">
    <thead>
      <tr>
        <th>Nome</th>
        <th>Salário</th>
        <th>Admissão</th>
        <th></th>
      </tr>
    </thead>

    <tbody>
      <?php
      foreach ($result as $r) {
      ?>
    
      <tr>
        <td><?php echo $r['nome']; ?></td>
        <td>R$ <?php echo number_format($r['salario'], 2, ',', '.'); ?></td>
        <td><?php echo date('d/m/Y', strtotime($r['dt_admissao'])); ?></td>
        <td class="text-right">
          <a href="form-funcionarios.php?id_funcionario=<?php echo $r['id_funcionario'];?>" class="btn btn-warning"><i class="glyphicon glyphicon-pencil"></i></a>

          <!-- na exclusão vamos enviar os dados via GET (colocamos o '?' antes do primeiro valor e depois o '&' para os proximos ) -->
          <a onclick="return confirm('Deseja excluir: <?php echo $r['nome']; ?> ?')" href="acao-funcionarios.php?acao=excluir&id_funcionario=<?php echo $r['id_funcionario']; ?>" class="btn btn-danger"><i class="glyphicon glyphicon-trash"></i></a>

        </td>
      </tr>

      <?php
      }
      ?>


    </tbody>

  </table>

  <hr/>
  <a href="index.php" class="btn btn-warning"><i class="glyphicon glyphicon-chevron-left"></i> VOLTAR</a>


</div>

<script src="js/jquery-3.5.1.min.js"></script>
<script src="js/bootstrap.min.js"></script>
</body>
</html>