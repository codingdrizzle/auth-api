const { validationResult } = require("express-validator");
const { findUser } = require("../users/services");



/**
 * NOTE: These two function can be optimised to get one function
 */


/**
 * this function checks if user does not exist in the db. Call this middleware if you want to proceed if user does not exist
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns not allowed error if user exist  or next (to execute the next function)
 */
const checkUserExists = async (req, res, next) => {
    try {
        validationResult(req).throw()
        const user = await findUser({ email: req.body.email });
        return user.code === 200 ? res.status(405).json({ code: 405, msg: `User ${req.body.email} already exist` }) : next();

    } catch (error) {
        return res.status(400).json({ msg: error.errors })
    }
}

/**
 * this function checks if user does not exist in the db. Call this middleware if you want to proceed if user exist
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns not found or next
 */
const checkUserDoesNotExists = async (req, res, next) => {
    try {
        validationResult(req).throw()
        const user = await findUser({ email: req.body.email });
        req.body.user = user.data;
        return user.code !== 200 ? res.status(404).json({ code: 404, msg: `User with email ${req.body.email} does not exist` }) : next();
    } catch (error) {
        return res.status(400).json({ msg: error.errors })
    }
}

module.exports = { checkUserExists, checkUserDoesNotExists };