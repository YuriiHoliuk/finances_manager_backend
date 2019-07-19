const { Model } = require('./Model');

class UserModel extends Model {
    constructor() {
        super('users');
    }

    async getList() {
        const { rows } =  await this.selectAllColumns();
        return rows;
    }

    async getById(id) {
        const { rows: [user] } = await this.select(['name', 'email'],{ id });
        return user;
    }

    async getByEmail(email) {
        const { rows: [user] } = await this.selectAllColumns({ email });
        return user;
    }

    async create(user) {
        const { rows: [createdUser] } = await this.insert(user);
        return createdUser;
    }
}

const userModel = new UserModel();

module.exports = {
    userModel,
};
