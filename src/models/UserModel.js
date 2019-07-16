const { Model } = require('./Model');

class UserModel extends Model {
    constructor(dbClient) {
        super(dbClient, 'users');
    }

    async getList() {
        const { rows } =  await this.selectAllColumns();
        return rows;
    }

    async getById(id) {
        const { rows: [user] } = await this.selectAllColumns({ id });
        return user;
    }

    async create(user) {
        const { rows: [createdUser] } = await this.insert(user);
        return createdUser;
    }
}

module.exports = {
  UserModel,
};
