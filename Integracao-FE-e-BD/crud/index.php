<?php
include('valida-sessao.php');
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
  <h3>Bem Vindo, <?php echo $_SESSION['nome_usuario']; ?> !</h3>

  


</div>

<script src="js/jquery-3.5.1.min.js"></script>
<script src="js/bootstrap.min.js"></script>
</body>
</html>