const { User } = require('../schema')

const findUser = (key) => User.findOne({...key})

module.exports = findUser