const sqlite3 = require('sqlite3');
const { open } = require('sqlite');
async function cadastrarInfo(request, response) {
    try {
        const db = await open({
            filename: './lib/info.db',
            driver: sqlite3.Database,
        });

        await db.run('INSERT INTO info (nome, sexo, idade, profissao, comentario) VALUES (?, ?, ?, ?, ?)', request.body.nome, request.body.sexo, request.body.idade, request.body.profissao, request.body.comentario);
        response.send(`Usuário ${request.body.nome} inserido com sucesso.`);
        db.close();
    } catch (error) {
        console.error('Erro:', error);
        response.status(500).send('Erro interno no servidor.');
    }
}

module.exports = cadastrarInfo;
