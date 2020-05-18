<?php

$nome = 'Cícero';
echo $nome;

echo '<br/>';

$nome_cripto = base64_encode($nome);

echo $nome_cripto;

echo '<br/>';

echo base64_decode($nome_cripto);

echo '<br/>';

echo md5($nome);

echo '<br/>';

echo md5('123');




?>