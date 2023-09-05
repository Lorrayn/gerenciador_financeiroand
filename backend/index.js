const express = require('express');
const app = express();
const PORT = 3000;

// app.listen(3000, ()=> console.log("Deu baum!"));

app.use(express.json())

// app.get('/', (req, res)=> {
//     res.send("Bem-vindo(a) à nossa primeira aplicação. ola")
// });

// const dados = ["Eu tenho mais coxa que a Coppi"];

// app.get('/j', (req, res)=> {
//     res.json({dados})
// });

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
});

const mysql = require('mysql2/promise');
const conection = mysql.createPool({
    host: 'localhost',
    port: '3306',
    database: 'testepessoa',
    user: 'root',
    password: ''
});

const getAllPessoas = async() => {
    const [query] = await conection.execute('select * from pessoa')
    return query
};

app.get('/pessoa', async(req, res) => {
    const resultado = await getAllPessoas()
    return res.status(200).json(resultado)
});
