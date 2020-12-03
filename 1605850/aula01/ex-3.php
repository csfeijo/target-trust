<?php
$cont = 1;
# while - enquanto
while ($cont <= 10) {
  echo('Contando...');
  echo('<br>');
  // incrementar o contador
  $cont++;
}

# do while - antigo repita
$cont = 1;
do {
  echo('Contando com o DO...');
  echo('<br>');

  $cont++;
} while ($cont <= 10);

# for - para
for($cont = 1; $cont <= 10; $cont++) {
  echo('Contando com o FOR...');
  echo('<br>');
}



?>
