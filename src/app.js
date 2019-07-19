const express = require('express');
const { initDb } = require('./db');
const { createRoutes } = require('./router');

async function createApp() {
    await initDb();
    const router = createRoutes();
    const app = express();

    app.use(express.json());
    app.use(router);

    return {
        listen(port) {
            app.listen(port);
            console.log(`app listen on port: ${port}`);
        },
        stop() {
            dbClient.end();
        },
    };
}

module.exports = createApp;
