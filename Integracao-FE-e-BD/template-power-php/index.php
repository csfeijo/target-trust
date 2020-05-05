<?php
include('includes/class.TemplatePower.php');

$tpl = new TemplatePower('html/template.html');

# se vc quiser pode inserir um pedaco de HTML junto do seu template (partial)
$tpl->assignInclude('RODAPE','html/rodape.html');

$tpl->prepare();
$tpl->assign('titulo', 'Título da página');


# vc pode continuar usando o assign para substituir os termos até mesmo das partes incluidas com o assignInclude
$tpl->assign('rodape_texto', 'Rodapé da página');


$tpl->printToScreen();
?>