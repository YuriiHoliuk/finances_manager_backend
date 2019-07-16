const { Router } = require('express');
const createUsersRoutes = require('./users');

const router = Router();

function createRoutes(dbClient) {
    const usersRouter = createUsersRoutes(dbClient);
    router.use('/users', usersRouter);

    return router;
}

module.exports = { createRoutes };
