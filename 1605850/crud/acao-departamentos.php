<?php
# acao-departamentos : centralizador de ações, ou seja, ele é o arquivo de back-end que faz a ponte
# entre o formulario do Front-End com o Banco de Dados
include('conexao.php');

# REQUEST: é um teste generico do PHP que verifica se o dado veio via GET ou POST (sem necessidade de um IF)
if ( isset($_REQUEST['acao']) ) {
  $acao = $_REQUEST['acao'];

  # a acao pode ser de tres tipos: inserir, editar OU excluir
  # precisamos testar as 3
  switch ($acao) {
    case 'inserir':
      if ( isset($_POST['nome']) && isset($_POST['sigla']) ) {
        # aqui teremos a inserção do registro no banco de dados!
        # mostrar o try / catch do bd
        $nome = $_POST['nome'];
        $sigla = strtoupper($_POST['sigla']);

        # agora sim fazemos a inserção no banco de dados
        $sql = $conn->prepare("INSERT INTO DEPARTAMENTOS (nome, sigla) VALUES ('$nome', '$sigla')");
        $sql->execute();      

      }
      # header é ums instrução de cabeçalho http do php
      # o location é o valor que informa para o servidor qual a pagina que o usuario está
      # neste caso estamos trocando o valor do location para que o servidor execute um redirecionamento do usuario
      header('location:listar-departamentos.php');
    break;
    case 'editar':
      echo('DEVE EDITAR NO BANCO!');
    break;
    case 'excluir':
      # preciso testar se veio o ID do departamento via GET
      if (isset($_GET['id_departamento'])) {
        $id_departamento = $_GET['id_departamento'];
        # se veio, vou montar a query para o banco
        $sql = $conn->prepare("DELETE FROM DEPARTAMENTOS WHERE ID_DEPARTAMENTO = $id_departamento");
        
        # vou executa-la
        $sql->execute();
      }
      # vou redirecionar o usuario para a tela de listagem de deptos.
      header('location:listar-departamentos.php');
    break;
  }

}


?>
