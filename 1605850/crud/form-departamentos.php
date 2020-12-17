<?php
include('verifica-sessao.php');
include('conexao.php');
# agora vamos verificar se veio a variavel id_departamento via GET
# se ela veio é sinal que o usuario clicou no icone do lápis - e deseja editar algum registro
if ( isset($_GET['id_departamento']) ) {
  $id_departamento = $_GET['id_departamento'];

  # ja que tenho o id_departamento agora posso ir no bd e recuperar as informações deste registro
  # para assim preenchermos o formulário de edição
  $sql = $conn->prepare("SELECT * FROM DEPARTAMENTOS WHERE ID_DEPARTAMENTO = $id_departamento");
  $sql->execute();
  $result = $sql->fetchAll();

  # agora vou separar as variaveis que preciso usar no formulario extraindo-as de dentro do $result
  $departamento = $result[0]; // como sabemos que o retorno será um vetor de apenas 1 registro (pois queremos só um depto.)
  $nome = $departamento['nome'];
  $sigla = $departamento['sigla'];
  $acao = 'editar';


  $titulo = 'Editar';
} else {
  # caso contrario o usuário clicou em NOVO e o formulário continua agindo como antes
  $titulo = 'Cadastrar';
  $nome = '';
  $sigla = '';
  $acao = 'inserir';
  $id_departamento = '';
}
?>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CRUD - <?php echo($titulo); ?> Departamento</title>
  <link rel="stylesheet" href="css/bootstrap.min.css">
</head>
<body>

  <?php include('menu.php'); ?>

  <div class="container">
    <h1><?php echo($titulo); ?> Departamento</h1>
    <hr>
    <form action="acao-departamentos.php" method="POST" class="form" onsubmit="return validaDepartamento()">
      <!-- a boostrap trabalha com colunas dividindo a tela em 12 partes iguais -->
      <!-- podemos utilizar a definição de col-TAMANHO_TELA-QTD_COLUNAS (ex. col-md-6) para dividir as colunas -->
      <!-- onde: xs: extreme small, sm: small, md: medium, lg: large & xg: extreme-large -->
      <div class="row">

        <div class="col-sm-6 col-md-6">
          <!-- esta classe cria um espaçamento entre os elementos do formulario -->
          <div class="form-group">
            <input type="text" name="nome" id="nome" placeholder="NOME" maxlength="50" class="form-control" value="<?php echo($nome); ?>">
          </div>
        </div>

        <div class="col-sm-3 col-md-4">  
          <div class="form-group">   
            <input type="text" name="sigla" id="sigla" placeholder="SIGLA" maxlength="10" class="form-control" value="<?php echo($sigla); ?>">
          </div>
        </div>

        <div class="col-sm-3 col-md-2 text-center">    
          <div class="form-group">
            <button type="submit" class="btn btn-primary"><i class="glyphicon glyphicon-floppy-disk"></i> SALVAR</button>
          </div>
        </div>

      </div>

      <!-- criando uma nova linha na grade -->
      <div class="row">
        <div class="col-md-6">
          <div class="alert alert-danger hidden" id="erro"></div>
        </div>
      </div>
      <!-- aqui esta o segredo de como o acao-departamentos difere o que deve fazer em cada "case" -->
      <input type="hidden" name="acao" value="<?php echo($acao); ?>">
      <!-- precisamos mandar de forma oculta o id_departamento do registro que será editado para o acao-departamentos -->
      <!-- saber qual o dado que será atualizado no banco -->
      <!-- precisamos fazer o by-pass pois o php perde a variavel depois de processar a pagina -->
      <input type="hidden" name="id_departamento" value="<?php echo($id_departamento); ?>">
    </form>    

    <a href="listar-departamentos.php" class="btn btn-success"><i class="glyphicon glyphicon-chevron-left"></i> VOLTAR</a>
  </div>
  <script src="js/form-departamentos.js"></script>
</body>
</html>
