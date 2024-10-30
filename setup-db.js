const pgp = require('pg-promise')();
require('dotenv').config();

const db = pgp(process.env.DATABASE_URL);

async function setupDatabase() {
    try {
        // Criação do banco de dados e tabela
        await db.none(`
            CREATE TABLE IF NOT EXISTS info (
                id SERIAL PRIMARY KEY,
                nome VARCHAR(100),
                sexo VARCHAR(10),
                idade INT,
                profissao VARCHAR(100),
                comentario TEXT
            )
        `);

        console.log('Banco de dados e tabela criados com sucesso.');
    } catch (error) {
        console.error('Erro ao criar banco de dados ou tabela:', error);
    } finally {
        pgp.end();  // Encerra a conexão com o banco de dados
    }
}

setupDatabase();
