<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CRUD - Listar Departamentos</title>
  <link rel="stylesheet" href="css/bootstrap.min.css">
</head>
<body>
  <div class="container">
    <h1>Departamentos</h1>

    <table class="table table-hover">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Sigla</th>
          <th class="text-right">Ação</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>aqui vai o nome do depto.</td>
          <td>aqui vai a sigla</td>
          <td class="text-right">
            <a href="#" class="btn btn-warning"><i class="glyphicon glyphicon-pencil"></i></a>
            <!-- coloquem a seguir o icone da lixeira dentro de um link -->
            <a href="#" class="btn btn-danger"><i class="glyphicon glyphicon-trash"></i></a>
          </td>
        </tr>
      </tbody>
    </table>

  </div>
  
</body>
</html>
