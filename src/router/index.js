const { Router } = require('express');
const createUsersRoutes = require('./users');
const createAuthRoutes = require('./auth');

const router = Router();

function createRoutes() {
    const usersRouter = createUsersRoutes();
    const authRouter = createAuthRoutes();

    router.use('/users', usersRouter);
    router.use('/auth', authRouter);

    return router;
}

module.exports = { createRoutes };
