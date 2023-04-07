const { findUser } = require("../app/user/services");

const checkUserExists = async (req, res, next) => {
    try {
        const user = await findUser({ email: req.body.email });
        if (user) return res.status(405).json({ code: 405, message: `User already exist` })
        else next()

    } catch (error) {
        return res.status(400).json({ message: error.message, error: error })
    }
}

const checkUserNotExists = async (req, res, next) => {
    try {
        const user = await findUser({ email: req.body.email });
        if (!user) return res.status(405).json({ code: 405, message: `User does not exist` })
        else next()

    } catch (error) {
        return res.status(400).json({ message: error.message, error: error })
    }
}


module.exports = { checkUserExists, checkUserNotExists };