<?php
include('includes/conexao.php');

$sql = $conn->prepare('SELECT * FROM FUNCIONARIOS ORDER BY NOME');
$sql->execute();

$result = $sql->fetchAll();

foreach ($result as $r) {
?>
<p>NOME: <?php echo $r['nome']; ?> </p>
<hr/>
<?php
}
?>



