if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
const mongoose = require('mongoose').set('strictQuery', false);
const url = process.env.MONGO_URI

const dbConnection = () => {
    return  mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        .then((resp) => {
           console.log(" mongoose connected successfully!");
        }).catch(error => new Error({dbError: "Sorry, we could not connect to the database at the moment"}))
}

module.exports = { dbConnection };