const { login } = require("../app/auth")

module.exports = router => {
    router.post('/login', login)
}