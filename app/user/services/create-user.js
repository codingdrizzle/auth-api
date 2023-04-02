const {User} = require('../schema')

const createUser = (user_data) => {
    return User.create(user_data)
}

module.exports = {createUser}