
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
const { dbConnection } = require('../config/db.js');
const { app } = require('./server.js');
const PORT = process.env["PORT"] || 8000;

// db connection function call
dbConnection()

const listener = app.listen(PORT, () => {
    console.log("App listerning to port", "http://localhost:" + listener.address().port)
})