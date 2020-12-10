<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CRUD - Cadastrar Departamento</title>
  <link rel="stylesheet" href="css/bootstrap.min.css">
</head>
<body>
  <div class="container">
    <h1>Cadastrar Departamento</h1>
    <hr>
    <form action="acao-departamentos.php" method="POST" class="form">
      <!-- a boostrap trabalha com colunas dividindo a tela em 12 partes iguais -->
      <!-- podemos utilizar a definição de col-TAMANHO_TELA-QTD_COLUNAS (ex. col-md-6) para dividir as colunas -->
      <!-- onde: xs: extreme small, sm: small, md: medium, lg: large & xg: extreme-large -->
      <div class="row">

        <div class="col-sm-6 col-md-6">
          <!-- esta classe cria um espaçamento entre os elementos do formulario -->
          <div class="form-group">
            <input type="text" name="nome" id="nome" placeholder="NOME" maxlength="50" class="form-control">
          </div>
        </div>

        <div class="col-sm-3 col-md-4">  
          <div class="form-group">   
            <input type="text" name="sigla" id="sigla" placeholder="SIGLA" maxlength="10" class="form-control">
          </div>
        </div>

        <div class="col-sm-3 col-md-2 text-center">    
          <div class="form-group">
            <button type="submit" class="btn btn-primary"><i class="glyphicon glyphicon-floppy-disk"></i> SALVAR</button>
          </div>
        </div>

      </div>

      <!-- criando uma nova linha na grade -->
      <div class="row">
        <div class="col-md-6">
          <div class="alert alert-danger hidden">
          PREENCHA O NOME!
          </div>
        </div>
      </div>
      <input type="hidden" name="acao" value="inserir">
    </form>    

    <a href="listar-departamentos.php" class="btn btn-success"><i class="glyphicon glyphicon-chevron-left"></i> VOLTAR</a>
  </div>
  
</body>
</html>
