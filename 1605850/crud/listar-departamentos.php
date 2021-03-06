<?php
include('verifica-sessao.php');
# como vamos manipular dados do bd precisamos incluir o arquivo de conexao
include('conexao.php');

# agora executamos a query no banco
$sql = $conn->prepare('SELECT * FROM DEPARTAMENTOS ORDER BY NOME');
$sql->execute();
$result = $sql->fetchAll(); # converte em um vetor associativo legivel ao php os reg. do BD

?>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CRUD - Listar Departamentos</title>
  <link rel="stylesheet" href="css/bootstrap.min.css">
</head>
<body>

  <?php include('menu.php'); ?>

  <div class="container">
    <h1>Listar Departamentos</h1>
    <?php
    if ( isset($_GET['msg']) ){
    ?>
    <!-- aqui vou ter um HTML que mostra uma mensagem estilizada -->
    <div class="alert alert-danger">
      <i class="glyphicon glyphicon-ban-circle"></i> Departamento possui funcionários vinculados, não é possível excluir!
    </div>
    <?php
    }
    ?>

    <hr>
      <a href="form-departamentos.php" class="btn btn-primary"><i class="glyphicon glyphicon-plus"></i> NOVO</a>
    <hr>

    <table class="table table-hover">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Sigla</th>
          <th class="text-right">Ação</th>
        </tr>
      </thead>

      <tbody>

        <?php
        # agora fazemos uma repetição para percorrer nosso vetor de registros
        foreach($result as $r) {
        ?>
        <tr>
          <td><?php echo($r['nome']); ?></td>
          <td><?php echo($r['sigla']); ?></td>
          <td class="text-right">
            <a href="form-departamentos.php?id_departamento=<?php echo($r['id_departamento']); ?>" class="btn btn-warning"><i class="fas fa-pencil-alt"></i></a>
            <!-- coloquem a seguir o icone da lixeira dentro de um link -->
            <a onclick="return confirm('Deseja excluir: <?php echo($r['nome']); ?> ?')" href="acao-departamentos.php?acao=excluir&id_departamento=<?php echo($r['id_departamento']); ?>" class="btn btn-danger"><i class="fas fa-trash"></i></a>
          </td>
        </tr>
        <?php
        }
        ?>
       
      </tbody>
    </table>

    <a href="index.php" class="btn btn-success"><i class="glyphicon glyphicon-chevron-left"></i> VOLTAR</a>

  </div>  
</body> 
</html>
