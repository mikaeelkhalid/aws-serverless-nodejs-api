const AWS = require('aws-sdk');

const documentClient = new AWS.DynamoDB.DocumentClient();

const Dynamo = {
  get: async (ID, TableName) => {
    const params = {
      TableName,
      Key: {
        ID,
      },
    };

    const data = await documentClient.get(params).promise();

    if (!data || !data.Item) {
      throw Error(`Data not found for ID: ${ID} from table: ${TableName}`);
    }

    console.log('data: ', data);

    return data.Item;
  },

  write: async (data, TableName) => {
    if (!data.ID) {
      throw Error('Missing ID');
    }

    const params = {
      TableName,
      Item: data,
    };

    const result = await documentClient.put(params).promise();

    if (!result) {
      throw Error('Failed to write data');
    }

    return data;
  },
};

module.exports = Dynamo;
