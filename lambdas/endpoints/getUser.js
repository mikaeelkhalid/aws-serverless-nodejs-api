const Responses = require('../common/apiResponses');

const data = {
  1: {
    name: 'John Doe',
    age: 30,
    job: 'developer',
  },
  2: {
    name: 'Jane Doe',
    age: 25,
    job: 'designer',
  },
  3: {
    name: 'Jim Doe',
    age: 27,
    job: 'manager',
  },
};

exports.handler = async (event) => {
  console.log('event: ', event);

  if (!event.pathParameters || !event.pathParameters.ID) {
    return Responses._400({
      error: 'Bad Request',
      message: 'Missing ID',
    });
  }

  let ID = event.pathParameters.ID;

  if (data[ID]) {
    return Responses._200(data[ID]);
  }

  return Responses._400({
    error: 'Bad Request',
    message: 'User not found',
  });
};
