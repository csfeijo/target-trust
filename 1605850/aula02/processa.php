<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Processamento em PHP</title>
  <link rel="stylesheet" href="css/dirigir.css">
</head>
<body>
<?php
// Este arquivo receberá os dados do nosso formulário!
$nome = $_POST['nome'];
$idade = $_POST['idade'];

echo(   $nome    );
echo(   $idade   );

if ($idade >= 18) {
?>
  <p>Pode dirigir!</p>
  <img src="img/carro.png">
<?php
} else {
?>
  <p>Não pode dirigir!</p>
  <img src="img/taxi.png">
<?php
}
?>
</body>
</html>
