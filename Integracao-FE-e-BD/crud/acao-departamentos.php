<?php
include('includes/conexao.php');

// se nao mandar a acao - entao tira o usuario DAQUI!
if ( isset($_POST['acao']) ) {
  $acao = $_POST['acao'];

  switch ($acao) {
    case 'inserir':
      if ( isset($_POST['nome']) && isset($_POST['sigla']) ){
        $nome = $_POST['nome'];
        $sigla = $_POST['sigla'];

        if (strlen($nome) > 0 || strlen($sigla) > 0) {
          // agora podemos inserir no BD
          $sql = $conn->prepare("INSERT INTO DEPARTAMENTOS (NOME, SIGLA) VALUES ('$nome', '$sigla')");
          $sql->execute();
        }
      }      
    break;
    case 'editar':
      echo 'EDITAR';
      exit;
    break;
    case 'excluir':
      echo 'EXCLUIR';
      exit;
    break;
  }
} 

// executa uma instrução de cabeçalho HTTP - redireciona o usuario para outro endereço
header('location:listar-departamentos.php');
exit;
?>