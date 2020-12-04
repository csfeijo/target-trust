<?php
$cores = array('green', 'yellow', 'blue', 'red', 'brown', 'purple');

# Parece ficar um codigo MUITO MAIS LIMPO, porém a manutenção deste código é BEM MAIS pesada / densa!
foreach ($cores as $cor) {
  echo("<p id='$cor' style='background: $cor'>$cor</p>");
  echo('<hr>');
}
?>




