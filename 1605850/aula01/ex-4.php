<?php
$cores = array('green', 'yellow', 'blue', 'red', 'brown', 'purple');

# o jeito classico de percorrer um vetor
// for($cont = 0; $cont < sizeof($cores); $cont++) {
//   echo($cores[$cont]);
// }
foreach ($cores as $cor) {
?>
  <p style="background: <?php echo($cor); ?>">
    <?php echo $cor; ?>
  </p>
<?php
}
?>
<!-- Altere o algoritmo acima para que as cores sejam exibidas 
     dentro de um paragráfo 
     para cada cor.
    Entretanto, você não DEVE colocar a tag P dentro do echo!!!
    -->
