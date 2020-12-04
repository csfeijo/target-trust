<?php
# isset => "foi setada" - "foi atribuida"
if (isset($_POST['nome']) && isset($_POST['nota1']) && isset($_POST['nota2'])){
  $nome = $_POST['nome'];
  $nota1 = $_POST['nota1'];
  $nota2 = $_POST['nota2'];

  $media = ($nota1 + $nota2) / 2;

  if ($media < 7) {
    echo('Você foi reprovado!');
  } elseif ($media == 10) {
    echo('imagine uma imagem de um troféu!');
  } else {
    echo('Você foi APROVADO!');
  }
  
} else {
  echo('Erro interno do Servidor - contate o administrador');
}


?>
