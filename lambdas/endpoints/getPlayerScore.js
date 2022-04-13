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

  const user = await Dynamo.get(ID, tableName).catch((err) => {
    console.log('err: ', err);
    return null;
  });

  if (!user) {
    return Responses._400({
      error: 'Bad Request',
      message: 'User not found',
    });
  }

  return Responses._200({ user });
};
