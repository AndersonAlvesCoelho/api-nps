import express from 'express';

const port = 3333;
const app = express();


app.get("/", (require, res) =>{

    return res.json({message: "Hello Word NLW #04"});
});


app.post("/", (require, res) =>{

    return res.json({message: "Dados salvo com sucesso!!"});
});


//Criando o servidor usando o liste e passando a porta exclusiva
app.listen(port, () => console.log("Serve is rounning"));


/* Dicas */

// Rota = conjunto
// Recurso = usuario

// Métodos HTTP = GET, POST, PUT, DELET
// Parâmetros :
    //Query Params: http://localhost:3333/users?search=anderson
    //Route Params: http://localhost:3333/users/1 (Identificar um recurso)
    //Body:  http://localhost:3333/users (Identificar um recurso)

// GET = Buscar uma informação 
// POST = Criar um informação
// put = Editando um informação
// DELET = Deletando um informação