<?php
$numeros = array(12, 24, 33, 3, 89, 9, 4);

// implemente um alg. em PHP que liste os numeros do vetor
// um abaixo do outro
// para os numeros pares coloque a palavra PAR antes do número
// para os impares coloque a palavra IMPAR antes do número
// Ex. PAR: 12
//     IMPAR: 33     
//       VETOR    AS APELIDO (ref. para cada item do vetor)
foreach ($numeros as $numero) {
  if ($numero % 2 == 0) {
    echo("PAR: $numero");
  } else {
    echo("IMPAR: $numero");
  }  
  echo('<br>');
}

# fazendo com FOR
for ($cont = 0; $cont < sizeof($numeros); $cont++) {
  if ($numeros[$cont] % 2 == 0) {
    echo("PAR: $numeros[$cont]");
  } else {
    echo("IMPAR: $numeros[$cont]");
  }
  echo('<br>');
}






?>
