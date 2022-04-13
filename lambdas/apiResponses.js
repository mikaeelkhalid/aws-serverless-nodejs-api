const Responses = {
  _200(message = {}) {
    return {
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
      },
      statusCode: 200,
      body: JSON.stringify(message),
    };
  },

  _400(message = {}) {
    return {
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
      },
      statusCode: 400,
      body: JSON.stringify(message),
    };
  },
};

module.exports = Responses;
