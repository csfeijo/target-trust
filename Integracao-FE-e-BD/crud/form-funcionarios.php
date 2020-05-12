<?php
include('valida-sessao.php');
include('includes/conexao.php');
?>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CRUD</title>
  <link rel="stylesheet" href="css/bootstrap.min.css">
</head>
<body>

<?php
include('menu.php');
?>

<div class="container">
  <h3>Cadastrar funcionário</h3>
  <hr/>
  <form method="POST">

    <div class="row">

      <div class="col-md-8">
        <div class="form-group">
          <input type="text" name="nome" id="nome" placeholder="nome do funcionário..." class="form-control" />
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <input type="text" name="salario" id="salario" placeholder="salário..." class="form-control" />
        </div>
      </div>

    </div>

    <div class="row">
      <div class="col-md-4">

        <input type="radio" name="sexo" id="masculino" value="M"/>
        <label for="masculino">Masculino</label>
        <br/>
        <input type="radio" name="sexo" id="feminino" value="F"/>
        <label for="feminino">Feminino</label>

      </div>
      <div class="col-md-4">
        <div class="form-group">
          <input type="text" name="dt_nascimento" id="dt_nascimento" placeholder="data de nascimento..." class="form-control" />
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <input type="text" name="dt_admissao" id="dt_admissao" placeholder="data de admissão..." class="form-control" />
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-8">
        <div class="form-group">
          <select id="id_departamento" name="id_departamento" class="form-control">
            <option value="00">Selecione o departamento</option>
            <?php
            // busca os departamentos do banco de dados
            $sql = $conn->prepare('SELECT * FROM DEPARTAMENTOS ORDER BY NOME');
            $sql->execute();
            $result = $sql->fetchAll();

            foreach($result as $r) {
            ?>
            <option value="<?php echo $r['id_departamento']; ?>"><?php echo $r['nome']; ?></option>
            <?php
            }
            ?>

          </select>
        </div>
      </div>

      <div class="col-md-4">
          <div class="form-group">
            <button type="submit" class="btn btn-primary">SALVAR</button>
          </div>
      </div>

    </div>

  </form>

</div>

<script src="js/jquery-3.5.1.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/jquery.mask.min.js"></script>
<script>
// quando o documento estiver "pronto" - carregado
$(document).ready( function () {

  // o jQuery mask apenas APLICA a mascara, ele não obriga o preenchimento do campo!
  // isso deve ser feito usando a validação como fizemos no departamentos.
  $('#salario').mask("#.##0,00", {reverse: true});
  $('#dt_nascimento').mask('00/00/0000');
  $('#dt_admissao').mask('00/00/0000 00:00:00');

});

</script>

</body>
</html>