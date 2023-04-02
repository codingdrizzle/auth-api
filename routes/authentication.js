const { addUser } = require("../app/user/controllers/add-user")

module.exports = router => {
    router.post('/add-user', addUser)
}