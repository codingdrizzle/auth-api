
const jwt = require('jsonwebtoken');

const genToken = (data) => {
    return jwt.sign({ data }, process.env.SECRET_KEY,
        {
            expiresIn: 43200 //expires in 12 hrs
        })
}

const genRefreshToken = (data) => {
    return jwt.sign(data, process.env.SECRET_KEY, {
        expiresIn: 2592000 //Expires in 30 days
    })
}

const verifyToken = (token) => {
    console.log(process.env.SECRET_KEY)
    return jwt.verify(token, process.env.SECRET_KEY, (error, results) => {
        if (error) return { code: 401, msg: error.message }
        console.log(results)
        return results
    })
}

const accessToken = (tokenheader) => {
    if (typeof tokenheader === 'undefined') return { code: 401, msg: "Unauthorised. You must provide access token" }
    const bearer = tokenheader.split(' ')
    return verifyToken(bearer[1]);
}

module.exports = { genToken, accessToken, genRefreshToken }
