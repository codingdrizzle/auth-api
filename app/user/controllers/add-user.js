const {createUser} = require('../services')

const addUser = (req, res) => {
    try {
        createUser(req.body.firstname)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

module.exports = {addUser}