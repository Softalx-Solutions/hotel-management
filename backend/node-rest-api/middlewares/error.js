const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.json({
    message: err.message,
    stack: process.env.ENVIRONMENT === "production" ? null : err.stack,
  });
};


module.exports = {
    errorHandler,
}