const db = require('../config/connection');
const { Users } = require('../models'); 
const usersSeeds = require('./usersSeeds.json'); 
const cleanDB = require('./cleanDB'); 

db.once('open', async () => {
  try {
    // Clean the 'Users' collection
    await cleanDB('Users', 'users');

    // Create users using the 'Users' model and the data from usersSeeds
    await Users.create(usersSeeds);

    console.log('All done!');
  } catch (error) {
    console.error('Error:', error);
  } finally {
    process.exit(0);
  }
});
