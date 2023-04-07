const {hashPassword} = require('./password-actions')

const encryptPassword = async (req, res, next) => {
    req.body.password = await hashPassword(req.body.password);
    return next()
}

module.exports = {encryptPassword}
