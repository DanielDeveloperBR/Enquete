const { Client } = require('pg');
require('dotenv').config();

async function cadastrarInfo(request, response) {
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
    });

    try {
        await client.connect();
        const { nome, sexo, idade, profissao, comentario } = request.body;

        if (!nome || !sexo || !idade || !profissao || !comentario) {
            return response.status(422).send(`Erro interno no servidor. <a href="/">Clica aqui para voltar</a>`);
        }

        await client.query(
            "INSERT INTO info (nome, sexo, idade, profissao, comentario) VALUES ($1, $2, $3, $4, $5)",
            [nome, sexo, idade, profissao, comentario]
        );

        console.log(`Enquete do ${nome} inserido com sucesso.`);
        response.send(`Enquete do ${nome} inserido com sucesso.`);
    } catch (error) {
        console.error("Erro:", error);
        response.status(500).send(`Erro interno no servidor. <a href="/">Clica aqui para voltar</a>`);
    } finally {
        await client.end();
    }
}

module.exports = cadastrarInfo;