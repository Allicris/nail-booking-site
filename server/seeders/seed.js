const db = require('../config/connection');
const { Users, Services } = require('../models'); 
const usersSeeds = require('./usersSeeds.json'); 
const serviceSeeds = require('./serviceSeeds.json');
const cleanDB = require('./cleanDB'); 

db.once('open', async () => {
  try {
    // Clean the 'Users' collection
    await cleanDB('Users', 'users');

  await Users.create(usersSeeds);
  await Services.create(serviceSeeds);

    console.log('All done!');
  } catch (error) {
    console.error('Error:', error);
  } finally {
    process.exit(0);
  }
});
