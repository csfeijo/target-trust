<?php
include('valida-sessao.php');
include('includes/conexao.php');

$sql = $conn->prepare('SELECT * FROM DEPARTAMENTOS ORDER BY NOME');
$sql->execute();
$result = $sql->fetchAll();

?>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CRUD</title>
  <link rel="stylesheet" href="css/bootstrap.min.css">
  <link rel="stylesheet" href="css/datatables.css">
  <link rel="stylesheet" href="css/all.min.css">
</head>
<body>

<?php
include('menu.php');
?>

<div class="container">
  <h3>Listagem de departamentos</h3>
  <hr/>
  <a href="form-departamentos.php" class="btn btn-primary"><i class="glyphicon glyphicon-plus"></i> NOVO</a>
  <hr/>
  <?php
  # o isset verica se VEIO a variavel, independente do valor dela
  if ( isset($_GET['erro']) ) {
  ?>
  <div class="alert alert-danger alert-dismissible">
    <button type="button" class="close" data-dismiss="alert"><span>&times;</span></button>
    Departamento não pode ser excluído!
  </div>
  <?php
  }
  ?>


  <table class="table">
    <thead>
      <tr>
        <th>NOME</th>
        <th>SIGLA</th>
        <th></th>
      </tr>
    </thead>

    <tbody>
      <?php
      foreach ($result as $r) {
      ?>
    
      <tr>
        <td><?php echo $r['nome']; ?></td>
        <td><?php echo $r['sigla']; ?></td>
        <td class="text-right">
          <a href="form-departamentos.php?id_departamento=<?php echo $r['id_departamento'];?>" class="btn btn-warning"><i class="fas fa-pen-alt"></i></a>

          <!-- na exclusão vamos enviar os dados via GET (colocamos o '?' antes do primeiro valor e depois o '&' para os proximos ) -->
          <a onclick="return confirm('Deseja excluir: <?php echo $r['nome']; ?> ?')" href="acao-departamentos.php?acao=excluir&id_departamento=<?php echo $r['id_departamento']; ?>" class="btn btn-danger"><i class="fas fa-trash-alt"></i></a>

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
<script src="js/datatables.js"></script>
<script src="js/all.min.js"></script>
<script>
// quando o documento estiver "pronto" - carregado
$(document).ready( function () {

  $('.table').DataTable({
    pageLength: 10,
    lengthChange: false,
    language: {
      paginate: {
        sNext: '<i class="fas fa-chevron-circle-right" style="font-size: 21px;"></i>',
        sPrevious: '<i class="fas fa-chevron-circle-left" style="font-size: 21px;"></i>'
      },
      search: 'Busca:'
    }
  });

});
</script>
</body>
</html>