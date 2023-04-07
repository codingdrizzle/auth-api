const { addUser, getUser, getUsers } = require("../app/user/controllers")
const { checkUserExists } = require("../middlewares/check-user-existence")
const { encryptPassword } = require("../middlewares/encrypt-password")

module.exports = router => {
    router.post('/add-user', checkUserExists, encryptPassword, addUser)
    router.get('/user/:id', getUser)
    router.get('/users', getUsers)
}