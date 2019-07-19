const { client: dbClient } = require('../db');

class Model {
    constructor(tableName) {
        this.dbClient = dbClient;
        this.tableName = tableName;
    }

    async query(queryString, values) {
        return await this.dbClient.query(queryString, values);
    }

    /*
    * @param filters: { [columnName]: value }
    * */
    async select(columns, filters, tableName = this.tableName) {
        let filtersString;
        let filtersValues;

        if (filters) {
            filtersString = Object.keys(filters) // ['id', 'email']
                .map((name, index) => `${name} = $${index + 1}`) // ['id = $1', 'email = $2']
                .join(' AND '); // 'id = $1 AND email = $2'
            filtersValues = Object.values(filters); // [8, 'bob@mail.com']
        }

        const whereString = filters
            ? ` WHERE ${filtersString}`
            : '';

        return await this.query(
            `SELECT ${columns.join(', ')} FROM ${tableName}${whereString};`,
            filters ? filtersValues : [],
        )
    }

    async selectAllColumns(filters, tableName = this.tableName) {
        return await this.select(['*'], filters, tableName);
    }

    async insert(data, tableName = this.tableName) {
        return await this.query(
            `INSERT INTO ${tableName} (${Object.keys(data).join(', ')}) VALUES (${Object.keys(data).map((name, index) => `$${index + 1}`).join(', ')}) RETURNING *;`,
            Object.values(data),
        );
    }
}

module.exports = {
    Model,
};
