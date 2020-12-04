<?php
# operadores logicos: >, <, >=, <=, !=, ==

$idade = 19;
if ($idade >= 18) {
  echo('Pode dirigir!');
} else {
  echo('NÃO PODE dirigir!');
}

# esta estrutura é muito parecida com o switch / case (veremos a seguir!)
$veiculo = 'Porsche';
if ($veiculo == 'BMW') {
  echo('Valor: 120.000,00');
} elseif ($veiculo == 'Ferrari') {
  echo('Valor: 600.000,00');
} elseif ($veiculo == 'Porsche') {
  echo('Valor: 300.000,00');
} else {
  echo('Valor: 170.000,00');
}

# switch / case
switch($veiculo) {
  case 'BMW':
    echo('Valor: 120.000,00');
  break;
  case 'Ferrari':
    echo('Valor: 600.000,00');
  break;
  case 'Porsche':
    echo('Valor: 300.000,00');
  break;
  default:
    echo('Valor: 170.000,00');
  break;
}

# condicional ternária é usada normalmente para atribuição direta de valores em variáveis
# condição ? verdadeira : falsa
$genero = 'M';
$genero_extenso = $genero == 'M' ? 'Masculino' : 'Feminino';
echo($genero_extenso);


?>
