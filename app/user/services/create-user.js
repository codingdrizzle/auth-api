const {User} = require('../schema')

const createUser = (user_data) => User.create({...user_data})

module.exports = createUser