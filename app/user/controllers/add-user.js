const { createUser } = require('../services')
const MongooseTypeError = require('mongoose').Error.ValidationError

const addUser = async (req, res) => {
    try {
        const user = await createUser(req.body);
        res.status(201).json({ code: 201, message: 'Successfully created user', data: user });
    } catch (error) {
        // Check if the error is a Mongoose validation error
        if (error instanceof MongooseTypeError) {
            const errorMessages = Object.values(error.errors).map(err => err.message);
            res.status(400).json({ code: 400, message: 'Validation error', errors: errorMessages });
        } else res.status(400).json({ code: 400, message: error.message });
    }
};

module.exports = addUser