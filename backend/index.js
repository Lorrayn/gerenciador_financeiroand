const express = require('express');

const app = express();

app.listen(666,()=> console.log("Gatinho."));

app.get('/',(req,res)=>{
  res.send("minhal")
app.get('/fim,(req,res)=>{res.end() }') /*para parar (nao aparecer nada)*/
const dados = [];
app.get('/j',(req,res)=>{res.json({dados})})
})




