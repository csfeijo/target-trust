import express from 'express'
import con from './connect.js';

const app = express()
con.connect((err) => {
  if (err) {
    throw err;
  }
});

// Lista os departamentos
app.get('/departamentos', (req,res) => {
  con.query("SELECT * FROM DEPARTAMENTOS", (err, result) => {
    if (err) {
      throw err
    };
    res.send(result)  
  }); 
})

app.listen(3030, () => console.log('Running server'))
