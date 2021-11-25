<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Admin</title>
  <link rel="stylesheet" href="css/bootstrap.css">
  <link rel="stylesheet" href="css/login.css">
</head>
<body>

  <div class="container">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <div class="panel panel-default">
          <div class="panel-heading text-center">
            :: LOGIN ::
          </div>
          <div class="panel-body">
            <form action="valida-login.php" class="text-center" method="POST">
              <div class="input-group">
                <span class="input-group-addon">
                  <i class="glyphicon glyphicon-user"></i>
                </span>
                <input type="text" class="form-control" name="usuario" placeholder="Usuário">
              </div>
              <br>
              <div class="input-group">
                <span class="input-group-addon">
                  <i class="glyphicon glyphicon-lock"></i>
                </span>
                <input type="password" class="form-control" name="senha" placeholder="Senha">
              </div>
              
              <br>
              <button type="submit" class="btn btn-primary">LOGIN</button>
            </form>
          </div>
          <?php
          if (isset($_GET['msg'])) {
          ?>
          <div class="panel-footer">
            <div class="alert alert-danger text-center">
              Login inválido
            </div>
          </div>
          <?php
          }
          ?>
        </div>
      </div>
      <div class="col-md-4"></div>
  </div>

</body>
</html>
