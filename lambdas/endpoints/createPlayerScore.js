const Responses = require('../common/apiResponses');
const Dynamo = require('../common/Dynamo');

const tableName = process.env.tableName;

exports.handler = async (event) => {
  console.log('event: ', event);

  if (!event.pathParameters || !event.pathParameters.ID) {
    return Responses._400({
      error: 'Bad Request',
      message: 'Missing ID',
    });
  }

  let ID = event.pathParameters.ID;

  const user = JSON.parse(event.body);

  user.ID = ID;

  const newUser = await Dynamo.write(user, tableName).catch((err) => {
    console.log('err: ', err);
    return null;
  });

  if (!newUser) {
    return Responses._400({
      error: 'Bad Write Request',
      message: 'Failed to write user',
    });
  }

  return Responses._200({ newUser });
};
