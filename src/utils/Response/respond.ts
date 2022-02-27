const respond = (response, status, message, data = null) => {
  const send = data ? { message, data } : { message };

  return response.status(status).json(send);
};

module.exports = respond;
