<?php

if (isset($_GET['cidade'])) {
  
  $cidade = $_GET['cidade'];

  echo($cidade);
} else {
  echo('Variáveis não foram enviadas!');
}
?>
