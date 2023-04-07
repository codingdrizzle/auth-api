const { User } = require('../schema')

const findUsers = () => User.find()

module.exports = findUsers