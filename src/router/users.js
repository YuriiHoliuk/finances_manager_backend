const { Router } = require('express');
const { UserModel } = require('../models/UserModel');

function createUsersRoutes(dbClient) {
    const router = Router();
    const usersModel = new UserModel(dbClient);

    router.get('/', async (req, res) => {
        const result = await usersModel.getList();
        console.log({ result });
        res.json(result);
    });

    router.get('/:userId', async (req, res) => {
        const result = await usersModel.getById(req.params.userId);
        console.log({ result });
        res.json(result);
    });

    router.post('/', async (req, res) => {
        const result = await usersModel.create(req.body);
        console.log({ result });
        res.json(result);
    });

    return router;
}

module.exports = createUsersRoutes;