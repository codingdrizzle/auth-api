const {comparePassword} = require('../../middlewares/password-actions')
const { genToken, accessToken, genRefreshToken } = require('../../utils/token-actions')
const {findUser} = require('../user/services')

const login = async (req, res, next) => {
    const user = await findUser({email: req.body.email})
    if(!user) return res.status(404).json({code: 404, message: 'User not found'})
    comparePassword(req.body.password, user.password)
    .then((response) =>  response ? res.status(200).json({ code: 200, token: genToken({user}), refresh_token: genRefreshToken({user}) }) : res.status(401).json({ code: 401, message: 'Invalid password' }))
    .catch(err => {
        res.status(500).json({ code: 500, message: err.message})
    })
        
}

module.exports = {login}