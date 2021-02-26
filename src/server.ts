
import { app } from './app';

app.listen(3333, () => console.log("Serve is rounning"));


/* Dicas */

// Rota = conjunto
// Recurso = usuario

// Métodos HTTP = GET, POST, PUT, DELET
// Parâmetros :
    //Query Params: http://localhost:3333/users?search=anderson
    //Route Params: http://localhost:3333/users/1 (Identificar um recurso)
    //Body:  http://localhost:3333/users (Identificar um recurso)

// GET = Buscar uma informação (lista, item)
// POST = Criar um informação
// put = Editando um informação
// DELET = Deletando um informação