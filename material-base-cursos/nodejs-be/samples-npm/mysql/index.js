import con from './connect.js';

con.connect((err) => {
  if (err) {
    throw err;
  }
});


// con.query("INSERT INTO DEPARTAMENTOS (NOME, SIGLA) VALUES ('TEST 2', 'T2')", (err, result) => {
//   if (err) {
//     throw err
//   };
  
//   console.log(result);
// });

con.query("SELECT * FROM DEPARTAMENTOS", (err, result) => {
  if (err) {
    throw err
  };
  
  result.map( item => {
    console.log(item.nome)
  })
});