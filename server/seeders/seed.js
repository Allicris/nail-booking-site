const db = require('../config/connection');
const { Services, Users, Appointment  } = require('../models');
const usersSeeds = require('./usersSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('Users', 'users');

  await Users.create(tusersSeeds);

  console.log('all done!');
  process.exit(0);
});