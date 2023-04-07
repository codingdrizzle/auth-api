const { accessToken } = require("./token-actions")

module.exports = {
    adminAccess : (req, res, next) => {
        const tokenData = accessToken(req.headers['authorization']);
    
        if (tokenData.code) return next(tokenData);
        return tokenData.data.role === 'admin' || tokenData.data.role === 'super_admin' ? next() : next({ code: 401, msg: "Unauthorised. Permission denied" })
    
    },
    generalAccess : (req, res, next) => {
        const tokenData = accessToken(req.headers['authorization']);
        if (tokenData.code) return next(tokenData);
        return ['user', 'admin', 'super_admin'].includes(tokenData.data.role) ? next() : next({ code: 401, msg: "Unauthorised. Permission denied" })
    
    }
}