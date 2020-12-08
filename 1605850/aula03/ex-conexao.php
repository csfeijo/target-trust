<?php
# assim o PHP inclui virtualmente o conteudo do arquivo dentro desta página como
# se ele estivesse aqui
include('conexao.php');

#dentro do prepare colocamos sintaxe SQL
$sql = $conn->prepare('SELECT * FROM FUNCIONARIOS ORDER BY NOME');
$sql->execute();
# logicamente precisamos de alguma variável para armazenar esta resposta
# fetchAll faz a conversão dos dados recebidos do bd em um formato legivel para o PHP (no caso um vetor)
$result = $sql->fetchAll();

# usamos muito como metodo de debug (apenas para ver o que há dentro de alguma variavel)
# var_dump($result);

# vamos agora percorrer o vetor de dados que vieram do banco
foreach ($result as $r) {
  echo($r['nome'] . $r['salario']);
  echo('<br>');
}


# incluir o rodape por exemplo
include('rodape.php');
?>





