<?php
include('includes/conexao.php');

if ( isset($_GET['id_departamento']) ) {
  
  $id_departamento = $_GET['id_departamento'];
  $titulo = 'Alteração';

  // recupera os dados deste DEPARTAMENTO do BD
  $sql = $conn->prepare("SELECT * FROM DEPARTAMENTOS 
                          WHERE ID_DEPARTAMENTO = $id_departamento");

  $sql->execute();
  $result = $sql->fetchAll();

  
  $nome = $result[0]['nome'];
  $sigla = $result[0]['sigla'];
  $acao = 'editar';

} else {
  
  $titulo = 'Cadastro';
  $acao = 'inserir';
  $id_departamento = '';
  $nome = '';
  $sigla = '';
  
}
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
  <h3><?php echo $titulo; ?> de departamento</h3>
  <hr/>

    <form method="POST" class="form-inline" action="acao-departamentos.php" onsubmit="return validaDepto()">
      
      <input value="<?php echo $nome; ?>" type="text" id="nome" name="nome" placeholder="nome do departamento" maxlength="50" class="form-control"/>

      <input value="<?php echo $sigla; ?>" type="text" id="sigla" name="sigla" placeholder="sigla do departamento" maxlength="10" class="form-control"/>

      <button type="submit" class="btn btn-primary"><i class="glyphicon glyphicon-floppy-disk"></i> SALVAR</button>

      <!-- cria um input oculto que servirá como GUIA para o acao-departamentos -->
      <input type="hidden" name="acao" value="<?php echo $acao; ?>"/>
      <!-- precisamos de alguma FORMA mandar o id_departamento do REGISTRO QUE QUEREMOS atualizar! -->
      <input type="hidden" name="id_departamento" value="<?php echo $id_departamento; ?>"/>
    </form>

    <div class="alert alert-danger hidden"></div>
  
  <hr/>
  <a href="listar-departamentos.php" class="btn btn-warning"><i class="glyphicon glyphicon-chevron-left"></i> VOLTAR</a>


</div>

<script src="js/jquery-3.5.1.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/departamentos.js"></script>
</body>
</html>