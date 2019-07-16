const { Client } = require('pg');

(async () => {
    const client = new Client({
        user: 'postgres',
        host: 'localhost',
        database: 'finances_manager_db',
        password: 'enigma',
        port: 5432,
    });

    try {
        await client.connect();
        await client.query('CREATE TABLE users (id serial primary key, email text, password text, name text);');
        await client.end();
        console.log('Seed success');
    } catch (error) {
        console.error('Seed error', error.message);
    }

    return client;
})();
