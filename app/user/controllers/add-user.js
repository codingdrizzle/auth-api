const { createUser } = require('../services')
const { hashPassword } = require('../../../middlewares/password-actions')

const addUser = async (req, res) => {
    try {
        req.body.password = hashPassword(req.body.password);
        const user = await createUser(req.body);
        res.status(201).json({ code: 201, message: 'Successfully created user', data: user });
    } catch (error) {
        // Check if the error is a Mongoose validation error
        if (error instanceof mongoose.Error.ValidationError) {
            const errorMessages = Object.values(error.errors).map(err => err.message);
            res.status(400).json({ code: 400, message: 'Validation error', errors: errorMessages });
        } else {
            res.status(500).json({ code: 500, message: 'Server error' });
        }
    }
};

module.exports = { addUser }