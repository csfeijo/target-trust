<?php
include('conexao.php');

if ( isset($_POST['acao']) ) {
  $acao = $_POST['acao'];

  # a acao pode ser de tres tipos: inserir, editar OU excluir
  # precisamos testar as 3
  switch ($acao) {
    case 'inserir':
      if ( isset($_POST['nome']) && isset($_POST['sigla']) ) {
        # aqui teremos a inserção do registro no banco de dados!
        # mostrar o try / catch do bd

      }
      echo('DEVE INSERIR NO BANCO!');
    break;
    case 'editar':
      echo('DEVE EDITAR NO BANCO!');
    break;
    case 'excluir':
      echo('DEVE EXCLUIR NO BANCO!');
    break;
  }

}


?>
