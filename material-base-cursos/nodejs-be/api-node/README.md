# API-NODE

## Como executar:
```
npm install
npm start
```

## Rotas disponíveis:
* **GET** _/departamentos_: lista todos departamentos.
* **POST** _/departamentos_: adiciona um departamento.
* **PUT** _/departamentos/:idDepartamento_: atualiza um departamento.
* **DELETE** _/departamentos/:idDepartamento_: remove um departamento.
* **GET** _/departamentos/:idDepartamento_: lista UM departamento específico.

## Banco de Dados
Utilize um banco de dados MySQL (você pode usar o XAMPP) e importe a estrutura do arquivo SQL do diretório [SQL](/nodejs-be/api-node/sql/dump-empresa.sql) deste projeto.