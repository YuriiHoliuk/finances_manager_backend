'use strict';
const crypto = require('crypto');

/**
 * hash password with sha512.
 * @function
 * @param {string} password - List of required fields.
 * @param {string} salt - Data to be validated.
 */
const sha512 = (password, salt = process.env.SALT) => {
    const hash = crypto.createHmac('sha512', String(salt)); /** Hashing algorithm sha512 */
    hash.update(String(password));

    return hash.digest('hex');
};

module.exports = { sha512 };