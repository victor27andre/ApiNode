import express, { request, response } from 'express';

const app = express();

// http://localhost:3333/users
app.get("/users", (request, response) => {
    return response.json({message: "hello!!"})
})



app.post("/", (request,response) => {
    // recebeu dados para salvar
    return response.json({massage: "salvo com sucesso!"})
})


app.listen(3333, () => console.log("Server is running"))