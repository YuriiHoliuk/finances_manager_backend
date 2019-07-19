const { Router } = require('express');
const { userModel } = require('../models');
const { sha512 } = require('../services');

function createAuthRoutes() {
    const router = Router();

    router.post('/sign-up', async (req, res) => {
        const { password, ...rest } = req.body;
        const result = await userModel.create({ ...rest, password: sha512(password) });
        console.log({ result });
        res.json(result);
    });

    router.post('/sign-in', async (req, res) => {
        const { password, email } = req.body;
        const passwordHash = sha512(password);
        const user = await userModel.getByEmail(email);

        if (!user) {
            return res
                .status(404)
                .json({ message: `User with email ${email} do not exists` });
        }

        if (user.password === passwordHash) {
            // TODO: create JWT token
            return res.json(user);
        }

        return res
            .status(401)
            .json({ message: `Invalid password` });
    });

    return router;
}

module.exports = createAuthRoutes;