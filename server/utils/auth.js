const jwt = require('jsonwebtoken');

const secret = '12345';
const expiration = '2h';

module.exports = {
  signToken: function ({ firstName, lastName, email, _id }) {
    const payload = { firstName, lastName, email, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
