const Schema = require('mongoose').Schema

const userSchema = new Schema({
    first_name: {
        type: String,
        required: true
    }
})

const User = require('mongoose').model('User', userSchema)

module.exports = {User}