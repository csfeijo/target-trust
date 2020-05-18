<?php
echo $_POST['nome'];

// receba a variavel idade, e se for
// maior ou igual a 18 informe que o 
// usuario pode dirigir
// senao informe que ainda nao tem como
// echo $_POST['idade'];

$idade = $_POST['idade'];

if ($idade >= 18) {
  echo 'Pode dirigir';
} else {
  echo 'NÃO Pode dirigir AINDA POIS VOCE TEM ' . $idade;
}

// quando atribuimos um valor a uma variavel estamos SETANDO um valor nela (SET)
// trim : remove espaços duplicados e do inicio e final da string no PHP
// https://www.techfry.com/php-tutorial/how-to-remove-whitespace-characters-in-a-string-in-php-trim-function
// echo strlen(  trim($_POST['email'], $charlist = " ") );
// exit;

if (isset($_POST['email'])){
  $email = $_POST['email'];
    
  if (strlen($email) > 0) {
    echo "<br/> Seu e-mail é $email";
  }

} else {
  echo '<br/> E-mail não foi enviado!';
}






?>