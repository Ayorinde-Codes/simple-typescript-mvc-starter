function errorResponse(message, statusCode, res) {
  return res.status(statusCode).json({
    status: false,
    message,
  });
}

module.exports = errorResponse;
