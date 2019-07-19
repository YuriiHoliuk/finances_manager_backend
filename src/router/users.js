const { Router } = require('express');
const { userModel } = require('../models');

function createUsersRoutes() {
    const router = Router();

    router.get('/', async (req, res) => {
        const result = await userModel.getList();
        console.log({ result });
        res.json(result);
    });

    router.get('/:userId', async (req, res) => {
        const result = await userModel.getById(req.params.userId);
        console.log({ result });
        res.json(result);
    });

    return router;
}

module.exports = createUsersRoutes;