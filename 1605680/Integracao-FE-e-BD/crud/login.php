<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CRUD - LOGIN</title>
  <link rel="stylesheet" href="css/bootstrap.min.css">
  <link rel="stylesheet" href="css/login.css">
</head>
<body>



<div class="centraliza-tudo">

  <div class="panel panel-info">
    <div class="panel-heading text-center">
      LOGIN
    </div>
  
    <div class="panel-body">
      <form method="POST" action="autentica.php">
        <div class="form-group">
          <div class="input-group">
            <div class="input-group-addon">
              <i class="glyphicon glyphicon-user"></i>
            </div>
            <input type="text" name="usuario" id="usuario" placeholder="Usuário" class="form-control"/>
          </div>
        </div>

        <div class="form-group">
          <div class="input-group">
            <div class="input-group-addon">
              <i class="glyphicon glyphicon-lock"></i>
            </div>
            <input type="password" name="senha" id="senha" placeholder="Senha" class="form-control"/>
          </div>
        </div>
        
        <div class="form-group text-center">
          <button type="submit" class="btn btn-primary">ENTRAR</button>
        </div>
      
      </form>

      <?php
      if ( isset($_GET['erro']) ) {
      ?>
      <div class="alert alert-danger text-center">
        Usuário ou senha inválidos!
      </div>
      <?php
      }
      ?>


    </div>

  </div>


</div>


<script src="js/jquery-3.5.1.min.js"></script>
<script src="js/bootstrap.min.js"></script>
</body>
</html>
