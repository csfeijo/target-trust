<?php
$veiculos = array('Gol', 'Celta', 'Prisma', 'Onyx');
echo($veiculos[0]);

$diversos = array(10, 'Porto Alegre', true, 1252.36);
echo($diversos[1]);

# vetor associativo
# utiliza nomes ao inves de numeros nas posições (indices)
$produto = array('nome' => 'Televisão', 'preco' => 5299.36, 'tamanho' => '52Pol');
echo($produto['tamanho']);

?>
