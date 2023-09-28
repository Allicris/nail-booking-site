const { GraphQLError } = require('graphql');
const jwt = require('jsonwebtoken');

const secret = 'mysecretssshhhhhhh';
const expiration = '5h';

class AuthenticationError extends GraphQLError {
  constructor(message) {
    super(message);
    this.extensions = {
      code: 'UNAUTHENTICATED',
    };
  }
}

const signToken = function ({ email, name, _id }) {
  const payload = { email, name, _id };
  return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
};

module.exports = {
  AuthenticationError,
  signToken,
};
