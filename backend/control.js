const sqlite3 = require('sqlite3');
const { open } = require('sqlite');
async function cadastrarInfo(request, response) {
    try {
        const db = await open({
            filename: './lib/info.db',
            driver: sqlite3.Database,
        });

        const [nome, sexo, idade, profissao, comentario] = request.body;

        if (!nome || !sexo || !idade || !profissao || !comentario){
            return response.status(422).send(`Erro interno no servidor. <a href='/'>Clica aqui para voltar</a>`);
        }

        await db.run('INSERT INTO info (nome, sexo, idade, profissao, comentario) VALUES (?, ?, ?, ?, ?)', nome, sexo, idade, profissao, comentario);
        response.send(`Usuário ${nome} inserido com sucesso.`);
        db.close();
    } catch (error) {
        console.error('Erro:', error);
        response.status(500).send('Erro interno no servidor. <a href=\'/\'>Clica aqui para voltar</a>');
    }
}

module.exports = cadastrarInfo;
