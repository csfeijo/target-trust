<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CRUD</title>
  <link rel="stylesheet" href="css/bootstrap.min.css">
</head>
<body>

<div class="container">
  <h3>Cadastro de departamentos</h3>
  <hr/>

    <form method="POST" class="form-inline" action="acao-departamentos.php" onsubmit="return validaDepto()">
      <input type="text" id="nome" name="nome" placeholder="nome do departamento" maxlength="50" class="form-control"/>
      <input type="text" id="sigla" name="sigla" placeholder="sigla do departamento" maxlength="10" class="form-control"/>
      <button type="submit" class="btn btn-primary"><i class="glyphicon glyphicon-floppy-disk"></i> SALVAR</button>

      <!-- cria um input oculto que servirá como GUIA para o acao-departamentos -->
      <input type="hidden" name="acao" value="inserir"/>
    </form>

    <div class="alert alert-danger hidden"></div>
  
  <hr/>
  <a href="index.php" class="btn btn-warning"><i class="glyphicon glyphicon-chevron-left"></i> VOLTAR</a>


</div>

<script src="js/jquery-3.5.1.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/departamentos.js"></script>
</body>
</html>