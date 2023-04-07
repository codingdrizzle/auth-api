const {findUsers} = require('../services')

const getUsers = async (req, res) => {
    try {
        const users = await findUsers()
        res.status(200).json({code: 200, data: users})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = getUsers