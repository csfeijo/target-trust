<?php
include('../db/conexao.php');
include('../db/get_tokens.php');

$method = $_SERVER['REQUEST_METHOD'];

if (validateToken()) {
  header('Content-Type: application/json; charset=utf-8');
  switch($method) {
    case 'GET': 
      if (isset($_GET['id_departamento'])) {
        $id_departamento = $_GET['id_departamento'];

        $sql = $con->prepare("SELECT * FROM DEPARTAMENTOS WHERE ID_DEPARTAMENTO = $id_departamento");
      } else {
        $sql = $con->prepare('SELECT * FROM DEPARTAMENTOS ORDER BY nome');
      }
      
      $sql->execute();
      $res = $sql->fetchAll(PDO::FETCH_ASSOC);
      
      if (sizeof($res) > 0) {
        echo(JSON_ENCODE($res));  
      } else {
        $res = array('error' => 'Invalid ID');
        echo(JSON_ENCODE($res));
      }
    break;
    case 'POST': 
      if (isset($_POST['nome']) && (isset($_POST['sigla']))) {
        $nome = $_POST['nome'];
        $sigla = $_POST['sigla'];

        $sql = $con->prepare("INSERT INTO DEPARTAMENTOS (nome, sigla) VALUES ('$nome','$sigla')");
        $sql->execute();
        
        http_response_code(200);
        $res = array('success' => 'Value added');
        echo(JSON_ENCODE($res));
        exit;
      } else {
        http_response_code(500);
        
        $res = array('error' => 'Wrong or insufficient parameters');
        echo(JSON_ENCODE($res));
        exit;
      }
    break;
    case 'DELETE': 
      if (isset($_GET['id_departamento'])) {
        $id_departamento = $_GET['id_departamento'];
        $sql = $con->prepare("DELETE FROM DEPARTAMENTOS WHERE ID_DEPARTAMENTO = '$id_departamento'");

        try {
          $sql->execute();
          http_response_code(200);
          $res = array('success' => 'Value deleted');
          echo(JSON_ENCODE($res));
          exit;
        } catch(PDOException $Exception) {
          $res = array('error' => 'PDO exception -  Integrity constraint violation');  
        }
        echo(JSON_ENCODE($res));
        exit;
      } else {
        $res = array('error' => 'Wrong or insufficient parameters');
        echo(JSON_ENCODE($res));
        exit;
      }
    break;
    case 'PATCH': 
      function patchMethod(){
        parse_str(file_get_contents('php://input'), $_PATCH);
        $body=[];
        if (is_array($_PATCH)) {
          foreach ($_PATCH as $key => $value) {
            $body[$key] = $value;
          }  
        }
        return $body;    
      }

      $_PATCH = patchMethod();

      if (isset($_GET['id_departamento']) && isset($_PATCH['nome']) && isset($_PATCH['sigla'])) {
        $id_departamento = $_GET['id_departamento'];
        $nome = $_PATCH['nome'];
        $sigla = $_PATCH['sigla'];

        $sql = $con->prepare("UPDATE DEPARTAMENTOS SET nome = '$nome', sigla = '$sigla' WHERE ID_DEPARTAMENTO = '$id_departamento'");

        try {
          $sql->execute();
          http_response_code(200);
          $res = array('success' => 'Value updated');
          echo(JSON_ENCODE($res));
          exit;
        } catch(PDOException $Exception) {
          $res = array('error' => 'Wrong or insufficient parameters 1');
        }
        echo(JSON_ENCODE($res));
        exit;
      } else {
        $res = array('error' => 'Wrong or insufficient parameters 2');
        echo(JSON_ENCODE($res));
        exit;
      }
    break;
    default:
      $res = array('error' => 'Generic error');
      echo(JSON_ENCODE($res));
      exit;
    break;
  }
} else {
  $res = array('error' => 'Invalid Bearer Token');
  echo(JSON_ENCODE($res));
}
?>