<?php
#  comentario de uma linha em PHP
// comentario de uma linha em PHP
/*
  comentario
  de
  mais de uma linha em PHP
*/
# para comentar uma linha ou um bloco de codigo use o atalho CTRL + ;
$nome = 'Cícero Feijó'; // string
$senha = 'abc123';      // string
$idade = 39;            // integer
$salario = 3256.47;     // decimal / float
$possui_cnh = true;     // boolean

echo($nome);
echo('<br>');
// echo('Salário:' . $salario);
echo("Salário: $salario");

?>
<!-- aqui "fora" o mundo é HTML -->
<hr>
Funciona!
<p>Seu nome é: <?php echo($nome); ?> </p>








