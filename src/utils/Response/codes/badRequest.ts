const respond = require('../respond');

const send = (response:string, message:string, data:any) => {
  respond(response, 400, message, data);
};
module.exports = send;
