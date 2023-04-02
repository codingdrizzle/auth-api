
module.exports = {
    ErrorHandler: (error, req, res, next) => error.code ? res.status(error.code).json({ error }) : res.status(500).json({ error }),
    ErrorLogger: (error, req, res, next) => next(error),
    InvalidUrl: (req, res, next) => res.status(404).json({ error: { code: 404, msg: "Url not found. Kindly check and try again" } })
}
