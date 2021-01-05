<?php
// imaginem que estes sao os dados que vieram do banco!

// sugestao para buscar os generos da base é fazer uma nova query dentro da tela de edição / inserção de funcionarios
// buscando de forma distinta os generos
// SELECT DISTINCT(genero) FROM funcionarios ;
$genero = array('F', 'M');

// imaginem entao que estamos editando um funcionario e que o genero DELE é "M"
// SELECT * FROM FUNCIONARIOS WHERE ID_FUNCIONARIO = 3 (por ex.)
$result = array('genero' => 'F');

// SELECT F.nome AS func_nome FROM funcionarios as F;
// infelizmente o PHP não consegue acessar o dado desta forma com o ALIAS
// voces nao consegue fazer algo como: $r['F.nome']
// mas consegue fazer algo como: $r['func_nome']


?>
<!-- na tela do HTML -->
<select name="genero">
  <option value="00">SELECIONE</option>
  <?php
  foreach ($genero as $g) {
    if ($g == $result['genero']) {
      $selecionado = 'selected';
    } else {
      $selecionado = '';
    }

  ?>
  <option value="<?php echo($g); ?>" <?php echo ($selecionado); ?> ><?php echo($g); ?></option>
  <?php
  }
  ?>
</select>

