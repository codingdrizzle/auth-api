const { findUser } = require('../services')

const getUser = async (req, res) => {
    try {
        const {id} = req.params
        const user = await findUser({_id: id})
        res.status(200).json({ code: 200, data: user })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = getUser