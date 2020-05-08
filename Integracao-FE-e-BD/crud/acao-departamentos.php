<?php
include('includes/conexao.php');

// se nao mandar a acao - entao tira o usuario DAQUI!
if ( isset($_REQUEST['acao']) ) {
  $acao = $_REQUEST['acao'];

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
      if( isset($_POST['id_departamento']) && isset($_POST['nome']) && isset($_POST['sigla'])  ) {
        $id = $_POST['id_departamento'];
        $nome = $_POST['nome'];
        $sigla = $_POST['sigla'];

        // agora podemos atualizar no BD
        $sql = $conn->prepare("UPDATE DEPARTAMENTOS SET
                                  NOME = '$nome',
                                  SIGLA = '$sigla'
                                WHERE ID_DEPARTAMENTO = $id");
        $sql->execute();        

      }
    break;
    case 'excluir':
      if ( isset($_GET['id_departamento']) ) {
        $id = $_GET['id_departamento'];

        // agora podemos EXCLUIR o registro
        $sql = $conn->prepare("DELETE FROM DEPARTAMENTOS WHERE ID_DEPARTAMENTO = $id");
        $sql->execute();
      }
    break;
  }
} 

// executa uma instrução de cabeçalho HTTP - redireciona o usuario para outro endereço
header('location:listar-departamentos.php');
exit;
?>