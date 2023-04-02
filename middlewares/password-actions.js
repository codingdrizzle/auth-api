const bcypt = require('bcrypt');

module.exports = {
    hashPassword: (plainText) => {
        return bcypt.hash(plainText, 10)
    },
    comparePassword: (plainText, hash) => {
        return bcypt.compare(plainText, hash)
    }
}