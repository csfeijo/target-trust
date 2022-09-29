import { createServer } from 'miragejs';

export const makeServer = async () => {
  return new createServer({
    routes() {
      this.namespace = "/tt/api-php";
      this.urlPrefix = "https://professorfeijo.com.br";

      this.get('/departamentos/', () => {
        return [
          { id_departamento: "1", nome: "Recursos Humanos", sigla: "RH" }
        ]
      })

      this.post('/departamentos/', (schema, request) => {
        console.log(request);
        //let attrs = JSON.parse(request.requestBody);

        //return schema.departamentos.create(attrs);
      })

    }
  });
}