function errorsHandler(err, req, res, next) {
  res.status(500).json({
    message: "Internal server error",
    success: false,
  });
}

module.exports = errorsHandler;
