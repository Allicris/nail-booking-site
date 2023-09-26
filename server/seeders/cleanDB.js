const { Users } = require('../models');
const db = require('../config/connection');

module.exports = async (modelName, collectionName) => {
  try {
    if (modelName === 'Users') { // Ensure that modelName matches the model name used in your code
      let modelExists = await db.db.listCollections({
        name: collectionName
      }).toArray();

      if (modelExists.length) {
        await db.dropCollection(collectionName);
      }
    } else {
      throw new Error('Model not found'); // Provide an error message for an unsupported model
    }
  } catch (err) {
    throw err;
  }
}
