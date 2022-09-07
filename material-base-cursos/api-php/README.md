# PHP API
Criado apenas para fins de testes para ser usado integrado a um banco de dados MySQL.

## Setup
Crie um arquivo env.php no raiz deste projeto declarando as variáveis abaixo:

```
<?php
  $usuario = 'root';
  $senha = '';
  $base_de_dados = 'empresa';
  $host = 'localhost';
?>
```

## Banco de Dados
Tenha o MySQL instalado no seu computador ou use o [XAMPP](https://www.apachefriends.org/pt_br/index.html).

Importe a base que está dentro do diretório "sql/" deste projeto utilizando uma ferramenta de sua preferência.

Sugestão:
* [PHPMyAdmin](https://www.apachefriends.org/pt_br/index.html) - presente no XAMPP
* [MySQL Workbench](https://dev.mysql.com/downloads/workbench/) 

## End Points
Para consumir esta API, você precisa acessar os seguintes end-points.

Para facilitar disponibilizei uma collection do Thunderclient para VSCode no diretório "thunder-client-collection". Para usa-la instale o plugin do [Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client) no seu VSCode.

Os end-points disponíveis são:
* GET _/departamentos/_
* GET _/departamentos/:id_departamento_
  * id_departamento: _number_ - required
* POST _/departamentos/_
  * nome: _string_ - required
  * sigla: _string_ - required
* DELETE _/departamentos/:id_departamento_
  * id_departamento: _number_ - required
* PATCH _/departamentos/:id_departamento_
  * id_departamento: _number_ - required  
  * nome: _string_ - required
  * sigla: _string_ - required

## Thanks

:meat_on_bone: Valeu [Abner Borda](https://github.com/afborda) pelo HELP com Pair Programming para resolver uma das tretas que tive na implementação!


