<?php
$veiculos = array('Prisma', 'Mobi', 'C4', 'Porsche', 'Camaro');

// modo antigo de percorrer o vetor
for($cont = 0; $cont <= 4; $cont++) {

  echo $veiculos[$cont];
  echo '<br/>';

}

foreach ($veiculos as $carro) {
  // echo '-' . $carro . '<br/>';
  echo "- $carro <br/>";
}
// aspas simples: o PHP não lê o que tem dentro
// aspas duplas: ocorre o processo de "interpolação"
// ou seja, o PHP substitui as variaveis dentro das aspas


// operadores aritmeticos
// + - * / %
// concatenador de strings
// .
?>