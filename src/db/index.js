const { Client } = require('pg');

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'finances_manager_db',
    password: 'enigma',
    port: 5432,
});

async function initDb() {
    try {
        await client.connect();
        console.log('Connected to db successfully');
    } catch (error) {
        console.error('Cannot connect to db', error.message);
    }

    return client;
}

module.exports = {
    initDb,
    client,
};