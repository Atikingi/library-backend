const logOrigUrlMiddleware = (req, res, next) => {
    console.log('originalURL:', req.originalUrl);
    next();
}

module.exports = logOrigUrlMiddleware;
